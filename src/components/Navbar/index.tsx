import { Button } from '@/components/ui/button';
import loadingAtom from '@/lib/store/loading';
import { cn } from '@/lib/utils';
import { locationAtom } from '@/store/location';
import { useAtomValue, useSetAtom } from 'jotai';
import { MapPin, Menu } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Index({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	const setIsLoading = useSetAtom(loadingAtom);
	const readLocation = useAtomValue(locationAtom);
	return (
		<nav
			className={cn(
				'flex items-center justify-between gap-4 lg:gap-6 h-16 w-full bg-secondary p-4',
				className,
			)}
			{...props}
		>
			<div className="navLeft flex items-center justify-between lg:gap-4 h-full">
				<Button
					variant={'ghost'}
					className="h-full"
					onClick={() => setIsLoading(true)}
				>
					<Menu />
				</Button>
				<Image
					src={'/assets/LogoNav.svg'}
					alt="Logo"
					width="0"
					height="0"
					sizes="100vw"
					className="h-full w-auto p-1"
				/>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-between">
					{readLocation}
					<MapPin />
				</div>
				<Button variant={'outline'} className="rounded-full">
					Login/SignUp
				</Button>
			</div>
		</nav>
	);
}
