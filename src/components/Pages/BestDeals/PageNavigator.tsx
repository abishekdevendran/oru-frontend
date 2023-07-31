import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const PageNavigator = () => {
	const router = useRouter();
	const { make, model } = router.query;
	return (
		<span className="container flex my-4">
			<Link href={`/`} className="underline">
				Home Page
			</Link>
			{!(make || model) ? (
				<span className="flex">
					<ChevronRight />
					<span>BestDeals</span>
				</span>
			) : (
				<span className="flex">
					<ChevronRight />
					<Link href={`/bestDeals`} className="underline">
						Best Deals
					</Link>
				</span>
			)}
			{make &&
				(model ? (
					<span className="flex">
						<ChevronRight />
						<Link href={`/bestDeals/${make}`} className="underline">
							{make}
						</Link>
					</span>
				) : (
					<span className="flex">
						<ChevronRight />
						<span>{make}</span>
					</span>
				))}
			{model && (
				<span className="flex">
					<ChevronRight />
					<span>{model}</span>
				</span>
			)}
		</span>
	);
};

export default PageNavigator;
