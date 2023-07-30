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
import React, { useEffect, useState } from 'react';
import UserPanel from './sections/user';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
	const [isNavVisible, setIsNavVisible] = useState(true);
	const router = useRouter();

	// update nav based on scroll direction
	useEffect(() => {
		let prevScrollPos = window.pageYOffset;
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			const visible = prevScrollPos > currentScrollPos;
			setIsNavVisible(visible);
			prevScrollPos = currentScrollPos;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				`nav fixed flex items-center justify-between gap-4 lg:gap-6 h-16 w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] bg-secondary max-lg:py-4 lg:p-4 z-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-100 ${
					isNavVisible ? 'top-0' : '-top-16'
				} transition-all duration-300`,
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
					{
						// if route is not home, render link
						router.pathname === '/' ? (
							<Image
								src={'/assets/LogoNav.svg'}
								alt="Logo"
								width="0"
								height="0"
								sizes="100vw"
								className="h-full lg:h-[120%] w-auto"
							/>
						) : (
							<Link href={'/'} className="h-full">
								<Image
									src={'/assets/LogoNav.svg'}
									alt="Logo"
									width="0"
									height="0"
									sizes="100vw"
									className="h-full lg:h-[120%] w-auto"
								/>
							</Link>
						)
					}
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
