import DesktopFilter from '@/components/Pages/BestDeals/DesktopFilter';
import ProductCard from '@/components/Pages/_common/cards/ProductCard';
import useResponsive from '@/hooks/useResponsive';
import { TListingReturnFilter } from '@/types/ListingFilter';
import { ChevronRight } from 'lucide-react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

const tempData: TListingReturnFilter<'res'> = {
	_id: '63c6c122417d504c3f7b502e',
	deviceCondition: 'Fair',
	listedBy: 'Mahesh',
	deviceStorage: '128 GB',
	defaultImage: {
		fullImage:
			'https://d1tl44nezj10jx.cloudfront.net/devImg/allModelsImg/apple_iphone_13_pro_max.jpg',
		_id: '643102def67133b580740f92',
	},
	listingLocation: 'Udaipur',
	listingPrice: '31806',
	marketingName: 'Apple iPhone 13 Pro Max',
	model: 'Apple iPhone 13 Pro Max',
	verified: true,
	listingId: '63c6c122417d504c3f7b502e',
	status: 'Active',
	verifiedDate: ' ',
	listingDate: 'Jan 17th',
	deviceRam: '',
	isOtherVendor: 'N',
	imagePath:
		'https://d1tl44nezj10jx.cloudfront.net/devImg/allModelsImg/apple_iphone_13_pro_max.jpg',
	listingState: 'Uttar Pradesh',
	listingLocality: 'Sagar Sarai',
};

const BestSelling = () => {
	return (
		<>
			<NextSeo
				title="Bestselling Models | ORUphones"
				description="ORUphones Best Deals Page"
			/>
			<div className="navbarClearance w-full pt-16" />
			<span className="container flex my-4">
				<Link href={`/`} className="underline">
					Home Page
				</Link>
				<span className="flex">
					<ChevronRight />
					<span>Best Selling Models</span>
				</span>
			</span>
				<section className="container pageContent flex gap-4">
					{useResponsive('lg') && (
						<div className="filterRails w-96 relative">
							<DesktopFilter />
						</div>
					)}
					<div className="flex flex-col w-full">
						<div className="font-poppins text-3xl font-semibold tracking-tighter m-8">
							Best Selling Phones
						</div>
						<div className="products w-full grid items-center justify-between gap-4 grid-cols-[repeat(auto-fill,minmax(min(20rem,100%),1fr))] shadow-xl">
							{Array(20)
								.fill(0)
								.map((_, i) => (
									<ProductCard data={tempData} key={i} />
								))}
						</div>
					</div>
				</section>
		</>
	);
};

export default BestSelling;
