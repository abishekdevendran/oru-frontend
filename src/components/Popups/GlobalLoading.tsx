import React, { useEffect } from 'react';

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useAtom } from 'jotai';
import loadingAtom from '@/lib/store/loading';
import { useRouter } from 'next/router';
import { Loader } from 'lucide-react';

const GlobalLoading = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useAtom(loadingAtom);
	// if route changes, close the dialog
	useEffect(() => {
		router.events.on('routeChangeStart', (url) => {
			if (!isOpen.isLoading) {
				setIsOpen({
					isLoading: true,
					reason: `Navigating to ${url}...}`,
				});
			}
		});
		router.events.on('routeChangeComplete', () => {
			if (isOpen.isLoading) {
				setIsOpen({
					isLoading: false,
					reason: undefined,
				});
			}
		});
		router.events.on('routeChangeError', () => {
			if (isOpen.isLoading) {
				setIsOpen({
					isLoading: false,
					reason: undefined,
				});
			}
		});
	}, [router, setIsOpen, isOpen]);
	return (
		<AlertDialog open={isOpen.isLoading}>
			<AlertDialogContent className="w-4/5 md:w-full">
				<AlertDialogHeader>
					<AlertDialogTitle>Loading</AlertDialogTitle>
					<AlertDialogDescription>
						<div className="flex flex-col items-center justify-center">
							<Loader className="animate-spin" />
							{isOpen.reason ?? `Sit tight, we're loading data for you!`}
						</div>
					</AlertDialogDescription>
				</AlertDialogHeader>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default GlobalLoading;
