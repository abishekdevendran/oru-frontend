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
import Image from 'next/image';
import { Verified } from 'lucide-react';

const verifiedBadge = (verified: boolean) => {
	return verified ? (
	<div className="absolute left-0 top-0 text-white">
		<div className="relative w-32 h-16">
			<Image
				src="/assets/verified.svg"
				alt="Verified"
				width={50}
				height={50}
				className="absolute top-4 left-5 scale-x-[2.2] scale-y-[2]"
			/>
			<Verified className="absolute top-3 left-1" size={20} />
			<span className="absolute top-3 left-7 leading-6">Verified</span>
		</div>
	</div>
	) : null;
};
const locationStringifier = (
	state?: string,
	city?: string,
	locality?: string,
) => {
	if (city && city.split(' ').length > 1) {
		let arr = city.split(' ');
		let soln: string[] = [];
		arr.forEach((item) => {
			soln.push(item[0].toUpperCase());
		});
		city = soln.join('');
	}
	if (locality) {
		return `${locality}, ${city}`;
	} else if (city) {
		return `${city}, ${state}`;
	} else {
		return state;
	}
};

const commaAdder = (num: number | string) => {
	if (typeof num === 'number') {
		num = num.toString();
	}
	let arr = num.split('');
	let soln: string[] = [];
	// add commas in Indian format
	let count = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (count === 3) {
			soln.push(',');
			count = 0;
		}
		soln.push(arr[i]);
		count++;
	}
	return soln.reverse().join('');
};

const ProductCard = ({ data }: { data: TListingReturnFilter<'res'> }) => {
	return (
		<Link
			className="m-auto min-w-fit w-40 h-[30rem] lg:h-96 relative hover:scale-105 "
			href={`/bestDeals/${data.make}/${data.model}/${data.listingId}`}
		>
			{data.verified && verifiedBadge(data.verified)}
			<Card className="shadow-lg w-full h-full">
				<CardContent className="h-3/5 p-0 m-0 rounded-t-xl">
					<div className="w-full h-full rounded-xl">
						<Image
							src={data.defaultImage?.fullImage ?? ''}
							alt={data.marketingName ?? 'Mobile Phone'}
							width={300}
							height={300}
							sizes="50vw"
							className="w-auto h-full mx-auto  object-contain"
						/>
					</div>
				</CardContent>
				<CardHeader className="h-1/5">
					<CardTitle>{`₹${commaAdder(data.listingPrice ?? '')}`}</CardTitle>
					<CardDescription>{data.marketingName}</CardDescription>
				</CardHeader>
				<CardFooter className="h-1/5">
					<div className="w-full h-full flex items-center justify-between font-poppins lg:text-sm text-xs">
						<div className="h-full flex flex-col items-start justify-around">
							<span className="font-poppins">{data.deviceStorage}</span>
							<span className="font-poppins">
								{locationStringifier(
									data.listingState,
									data.listingLocation,
									data.listingLocality,
								)}
							</span>
						</div>
						<div className="h-full flex flex-col items-end text-end justify-around">
							<span className="font-poppins">{`Condition: ${data?.deviceCondition}`}</span>
							<span className="font-poppins">{data?.listingDate}</span>
						</div>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default ProductCard;
