import { Button } from '@/components/ui/button';
import useUser from '@/hooks/useUser';
import { Bell, ChevronDown, Heart } from 'lucide-react';
import React from 'react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
	const { user, isLoggedIn, logout } = useUser();
	if (!isLoggedIn) return null;
	return (
		<div className="flex items-center justify-around gap-2">
			<Button variant={'ghost'} className="p-1">
				<Heart />
			</Button>
			<Button variant={'ghost'} className="p-1">
				<Bell />
			</Button>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button
						variant={'ghost'}
						className="flex items-center justify-center p-0"
					>
						<Avatar>
							<AvatarImage src={user?.profilePicPath} />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<ChevronDown size={15} />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default Index;
