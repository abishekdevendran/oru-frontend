import { Button } from '@/components/ui/button';
import { Bell, Heart } from 'lucide-react';
import React from 'react';

const Index = () => {
	return (
		<div className="flex items-center justify-around">
			<Button variant={'ghost'}>
				<Heart />
			</Button>
			<Button variant={'ghost'}>
				<Bell />
			</Button>
		</div>
	);
};

export default Index;
