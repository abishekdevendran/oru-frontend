import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { BookDownIcon, Heart, Link, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useUser from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const SideBar = () => {
	const { user } = useUser();
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="max-lg:pr-2 lg:px-4 w-full" />
			</SheetTrigger>
			<SheetContent side={'left'}>
				<SheetHeader>
					<SheetTitle>
						<div className="userContainer flex mb-12">
							<Avatar className="w-24 h-24">
								<AvatarImage src={user?.profilePicPath} />
								<AvatarFallback>ORU</AvatarFallback>
							</Avatar>
							<span>{user?.userName}</span>
						</div>
					</SheetTitle>
				</SheetHeader>
				<div className="flex flex-col">
					<div className="flex flex-col">
						<span className="text-xl font-bold">User</span>
						<span className="text-sm">
							Manage all user specific ameneties here.
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xl font-bold">About Us</span>
						<span className="text-sm">Manage your account settings.</span>
					</div>
					<div className="optionsContainer">
						<Separator />
						<Button
							variant={'ghost'}
							className="flex gap-4 items-center justify-start w-full"
						>
							<BookDownIcon className="mr-2" />
							<span>Blog</span>
						</Button>
						<Separator />
						<Button
							variant={'ghost'}
							className="flex gap-4 items-center justify-start w-full"
						>
							<Link className="mr-2" />
							<span>Services</span>
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default SideBar;
