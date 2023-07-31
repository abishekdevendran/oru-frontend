import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const DesktopFilter = () => {
	return (
		<Card className="shadow-xl sticky top-20">
			<CardHeader>
				<CardTitle>Filters</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
		</Card>
	);
};

export default DesktopFilter;
