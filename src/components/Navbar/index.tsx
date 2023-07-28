import { Button } from '@/components/ui/button';
import useResponsive from '@/hooks/useResponsive';
import useUser from '@/hooks/useUser';
import loadingAtom from '@/lib/store/loading';
import { cn } from '@/lib/utils';
import readLocationAtom, { locationAtom } from '@/store/location';
import { useAtomValue, useSetAtom } from 'jotai';
import { Loader, MapPin, Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import UserPanel from './sections/user';

const LoginPopup = dynamic(() => import('@/components/Popups/LoginPopup'), {
	ssr: false,
});
export default function Index({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	const setIsLoading = useSetAtom(loadingAtom);
	const readLocation = useAtomValue(readLocationAtom);
	const [isLoginOpen, setIsLoginOpen] = React.useState(false);
	const { isUserLoading, isLoggedIn } = useUser();
	return (
		<nav
			className={cn(
				'nav fixed top-0 flex items-center justify-between gap-4 lg:gap-6 h-16 w-full bg-secondary max-lg:py-4 lg:p-4 z-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-100',
				className,
			)}
			{...props}
		>
			<div className="flex items-center justify-between w-full h-full">
				<div className="navLeft flex items-center justify-between lg:gap-4 h-full">
					{!useResponsive('lg') && (
						<Button
							variant={'ghost'}
							className="h-full"
							onClick={() => setIsLoading(true)}
						>
							<Menu />
						</Button>
					)}
					<Image
						src={'/assets/LogoNav.svg'}
						alt="Logo"
						width="0"
						height="0"
						sizes="100vw"
						className="h-full lg:h-[120%] w-auto"
					/>
				</div>
				<div className="flex items-center justify-between lg:gap-4 mr-2">
					<Button
						variant={'ghost'}
						className="flex items-center justify-between rounded-full"
					>
						{readLocation}
						<MapPin />
					</Button>
					{isUserLoading && <Loader className="animate-spin" />}
					{!isUserLoading && isLoggedIn && <UserPanel />}
					{!isUserLoading && !isLoggedIn && (
						<>
							<Button
								variant={'outline'}
								className="rounded-full lg:w-36"
								onClick={() => setIsLoginOpen(true)}
							>
								Login/SignUp
							</Button>
							{isLoginOpen && (
								<LoginPopup isOpen={isLoginOpen} setOpen={setIsLoginOpen} />
							)}
						</>
					)}
					<Button
						variant={'default'}
						className="hidden lg:block rounded-full w-36"
					>
						Sell Your Phone
					</Button>
				</div>
			</div>
		</nav>
	);
}
