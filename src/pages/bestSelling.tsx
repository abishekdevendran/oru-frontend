import { ChevronRight } from 'lucide-react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

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
		</>
	);
};

export default BestSelling;
