import { Button } from '@/components/ui/button';
import useResponsive from '@/hooks/useResponsive';
import useUser from '@/hooks/useUser';
import loadingAtom from '@/lib/store/loading';
import { cn } from '@/lib/utils';
import { locationAtom } from '@/store/location';
import { useAtomValue, useSetAtom } from 'jotai';
import { Loader, MapPin, Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const LoginPopup = dynamic(() => import('@/components/Popups/LoginPopup'), {
	ssr: false,
});
export default function Index({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	const setIsLoading = useSetAtom(loadingAtom);
	const readLocation = useAtomValue(locationAtom);
	const [isLoginOpen, setIsLoginOpen] = React.useState(false);
	const { isUserLoading, isLoggedIn } = useUser();
	return (
		<nav
			className={cn(
				'nav flex items-center justify-between gap-4 lg:gap-6 h-16 w-full bg-secondary p-4',
				className,
			)}
			{...props}
		>
			<div className="container flex items-center justify-between w-full h-full">
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
				<div className="flex items-center justify-between gap-4">
					<Button
						variant={'ghost'}
						className="flex items-center justify-between"
					>
						{readLocation}
						<MapPin />
					</Button>
					{isUserLoading && <Loader className="animate-spin" />}
					{!isUserLoading && isLoggedIn && <p>Logged In</p>}
					{!isUserLoading && !isLoggedIn && (
						<>
							<Button
								variant={'outline'}
								className="rounded-full"
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
						className="hidden lg:block rounded-full bg-yellow text-black"
					>
						Sell Your Phone
					</Button>
				</div>
			</div>
		</nav>
	);
}
