import React from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { TListingReturnFilter } from '@/types/ListingFilter';
import Link from 'next/link';

const ProductCard = ({ data }: { data: TListingReturnFilter<'res'> }) => {
	return (
		<Link
			className="p-4 min-w-fit w-80 h-96 m-auto"
			href={`/bestDeals/${data.make}/${data.model}/${data.listingId}`}
		>
			<Card className="hover:scale-105 shadow-lg w-full h-full">
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardHeader>
					<CardTitle>{data.make}</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default ProductCard;
