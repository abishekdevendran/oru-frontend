import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BrandCard = ({ brand }: { brand: string }) => {
	return (
		<Image
			src={brand}
			alt={brand}
			width={100}
			height={100}
			className="aspect-square rounded-full bg-gray-100 object-contain first:ml-auto last:mr-auto"
		/>
	);
};

const TopBrands = ({ brands }: { brands: string[] }) => {
	return (
		<section className="topBrands w-full h-32 container">
			<div className="flex items-center justify-between gap-4">
				<span>Top Brands</span>
				<Button variant="link">
					<Link
						href="/brands"
						className="flex gap-2 items-center justify-center"
					>
						View All
						<ArrowRight size={12} />
					</Link>
				</Button>
			</div>
			<div className="flexContainer flex items-center gap-4 max-w-full w-full py-4 overflow-x-auto">
				{brands.map((brand, index) => (
					<BrandCard key={index} brand={brand} />
				))}
			</div>
		</section>
	);
};

export default TopBrands;
