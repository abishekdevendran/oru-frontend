import {
	BadgeCheck,
	Coins,
	HelpingHand,
	ShieldCheck,
	Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BuyBy = () => {
	return (
		<section className="topBrands w-full container my-8">
			<div className="gridContainer w-full grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 gap-2 p-2 lg:aspect-[2/1] aspect-[1/2]">
				<Link
					className="bestSellingCard shadow-xl col-span-1 row-span-1 bg-black rounded-3xl aspect-square hover:scale-105"
					href={'/bestDeals'}
				>
					<span className="flex gap-2 items-center justify-center text-center h-1/3 text-white font-poppins text-4xl font-bold">
						Best Selling Phones <HelpingHand size={40} />
					</span>
					<Image
						src="/assets/Index/bestSellingCard.jpeg"
						alt="Best Selling Phones"
						width={500}
						height={500}
						className="w-full h-2/3 p-2 rounded-3xl object-fill"
					/>
				</Link>
				<div className="gridContainer w-full grid grid-cols-2 grid-rows-2 gap-2 aspect-square]">
					<Link
						className="VerifiedCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square hover:scale-105"
						href={'/bestDeals?verified=true'}
					>
						<span className="flex gap-2 items-center justify-center text-center h-1/3 font-poppins font-semibold tracking-tighter text-2xl">
							Verified Phones <BadgeCheck size={20} />
						</span>
						<Image
							src="/assets/Index/verifiedCard.png"
							alt="Verified Phones"
							width={500}
							height={500}
							className="w-full h-2/3 p-2 rounded-3xl object-cover object-top"
						/>
					</Link>
					<Link
						className="LikeNewCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square hover:scale-105"
						href={'/bestDeals?minPrice=10000&maxPrice=30000'}
					>
						<span className="flex gap-2 items-center justify-center text-center h-1/3 font-poppins font-semibold tracking-tighter text-2xl">
							Like New Condition <Sparkles size={20} />
						</span>
						<Image
							src="/assets/Index/likeNewCard.png"
							alt="Best Selling Phones"
							width={500}
							height={500}
							className="w-full h-2/3 p-2 rounded-3xl object-cover"
						/>
					</Link>
					<Link
						className="WarrantyCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square hover:scale-105"
						href={'/bestDeals?warranty="all'}
					>
						<span className="flex gap-2 items-center justify-center text-center h-1/3 font-poppins font-semibold tracking-tighter text-2xl">
							With Warranty <ShieldCheck size={20} />
						</span>
						<Image
							src="/assets/Index/warrantyCard.png"
							alt="Best Selling Phones"
							width={500}
							height={500}
							className="w-full h-2/3 p-2 rounded-3xl object-cover"
						/>
					</Link>
					<div className="PriceGridContainer aspect-square w-full grid grid-cols-2 grid-rows-2">
						<Link
							className="PriceCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square hover:scale-105"
							href={'/bestDeals?minPrice=0&maxPrice=10000'}
						>
							<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-lg leading-none">
								<span>Under</span>
								<span className="font-semibold">₹10k</span>
								<Coins size={20} />
							</span>
						</Link>
						<Link
							className="PriceCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square hover:scale-105"
							href={'/bestDeals?minPrice=0&maxPrice=20000'}
						>
							<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-lg leading-none">
								<span>Under</span>
								<span className="font-semibold">₹20k</span>
								<Coins size={20} />
							</span>
						</Link>
						<Link
							className="PriceCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square hover:scale-105"
							href={'/bestDeals?minPrice=10000&maxPrice=30000'}
						>
							<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-lg leading-none">
								<span>Under</span>
								<span className="font-semibold">₹30k</span>
								<Coins size={20} />
							</span>
						</Link>
						<Link
							className="PriceCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square hover:scale-105"
							href={'/bestDeals?minPrice=30000&maxPrice=50000'}
						>
							<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-lg leading-none">
								<span>Under</span>
								<span className="font-semibold">₹50k</span>
								<Coins size={20} />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BuyBy;
