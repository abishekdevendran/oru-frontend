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
			<div className="gridContainer w-full grid lg:grid-cols-8 grid-cols-6 lg:grid-rows-4 grid-rows-6 gap-2 p-2 lg:aspect-[2/1] aspect-[1/1]">
				<Link
					className="bestSellingCard shadow-xl col-span-3 lg:col-span-4 row-span-4 bg-black rounded-xl lg:rounded-3xl lg:aspect-square hover:scale-105"
					href={'/bestDeals'}
				>
					<span className="flex gap-2 items-center justify-center text-center tracking-tighter leading-none h-1/3 text-white font-poppins text-xs sm:text-lg lg:text-4xl font-bold px-8">
						Best Selling Phones <HelpingHand size={40} />
					</span>
					<Image
						src="/assets/Index/bestSellingCard.jpeg"
						alt="Best Selling Phones"
						width={500}
						height={500}
						className="w-full h-2/3 p-2 rounded-xl lg:rounded-3xl object-fill"
					/>
				</Link>
				<Link
					className="VerifiedCard flex flex-row-reverse lg:flex-col shadow-xl col-span-3 lg:col-span-2 row-span-2 lg:row-span-2 rounded-xl lg:rounded-3xl lg:aspect-square hover:scale-105"
					href={'/bestDeals?verified=true'}
				>
					<span className="flex max-lg:flex-col gap-2 items-center justify-center text-center max-lg:w-1/3 lg:h-1/3 font-poppins font-semibold tracking-tighter text-xs sm:text-lg lg:text-2xl">
						<span>Verified Phones</span>
						<BadgeCheck size={20} />
					</span>
					<Image
						src="/assets/Index/verifiedCard.png"
						alt="Verified Phones"
						width={500}
						height={500}
						className="w-full max-lg:w-2/3 lg:h-2/3 rounded-xl lg:rounded-3xl object-cover object-top"
					/>
				</Link>
				<Link
					className="LikeNewCard flex flex-row-reverse lg:flex-col shadow-xl col-span-3 lg:col-span-2 row-span-2 lg:row-span-2 rounded-xl lg:rounded-3xl lg:aspect-square hover:scale-105"
					href={'/bestDeals?minPrice=10000&maxPrice=30000'}
				>
					<span className="flex max-lg:flex-col gap-2 items-center justify-center text-center max-lg:w-1/3 lg:h-1/3 font-poppins font-semibold tracking-[-0.08em] text-xs sm:text-lg lg:text-2xl">
						<span>Like New Condition</span> <Sparkles size={20} />
					</span>
					<Image
						src="/assets/Index/likeNewCard.png"
						alt="Best Selling Phones"
						width={500}
						height={500}
						className="w-full max-lg:w-2/3 lg:h-2/3 p-2 rounded-xl lg:rounded-3xl object-cover"
					/>
				</Link>
				<Link
					className="WarrantyCard shadow-xl lg:col-span-2 col-span-2 lg:row-span-2 row-span-2 rounded-xl lg:rounded-3xl lg:aspect-square hover:scale-105"
					href={'/bestDeals?warranty="all'}
				>
					<span className="flex gap-2 items-center justify-center text-center h-1/3 font-poppins font-semibold tracking-tighter text-xs sm:text-lg lg:text-2xl">
						With Warranty <ShieldCheck size={20} />
					</span>
					<Image
						src="/assets/Index/warrantyCard.png"
						alt="Best Selling Phones"
						width={500}
						height={500}
						className="w-full h-2/3 p-2 rounded-xl lg:rounded-3xl object-cover"
					/>
				</Link>
				<Link
					className="PriceCard flex lg:flex-col items-center justify-around max-lg:px-8 lg:py-8 shadow-xl lg:col-span-1 col-span-2 row-span-1 rounded-xl lg:rounded-3xl lg:aspect-square hover:scale-105"
					href={'/bestDeals?minPrice=0&maxPrice=10000'}
				>
					<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-xs sm:text-lg lg:text-lg leading-none">
						<span>Under</span>
						<span className="font-semibold">₹10k</span>
					</span>
					<Coins size={20} />
				</Link>
				<Link
					className="PriceCard flex lg:flex-col items-center justify-around max-lg:px-8 lg:py-8 shadow-xl lg:col-span-1 col-span-2 row-span-1 rounded-xl lg:rounded-3xl lg:aspect-square hover:scale-105"
					href={'/bestDeals?minPrice=0&maxPrice=20000'}
				>
					<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-xs sm:text-lg lg:text-lg leading-none">
						<span>Under</span>
						<span className="font-semibold">₹20k</span>
					</span>
					<Coins size={20} />
				</Link>
				<Link
					className="PriceCard flex lg:flex-col items-center justify-around max-lg:px-8 lg:py-8 shadow-xl lg:col-span-1 col-span-2 row-span-1 rounded-xl lg:rounded-3xl lg:aspect-square hover:scale-105"
					href={'/bestDeals?minPrice=10000&maxPrice=30000'}
				>
					<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-xs sm:text-lg lg:text-lg leading-none">
						<span>Under</span>
						<span className="font-semibold">₹30k</span>
					</span>
					<Coins size={20} />
				</Link>
				<Link
					className="PriceCard flex lg:flex-col items-center justify-around max-lg:px-8 lg:py-8 shadow-xl lg:col-span-1 col-span-2 row-span-1 rounded-xl lg:rounded-3xl lg:aspect-square hover:scale-105"
					href={'/bestDeals?minPrice=30000&maxPrice=50000'}
				>
					<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-xs sm:text-lg lg:text-lg leading-none">
						<span>Under</span>
						<span className="font-semibold">₹50k</span>
					</span>
					<Coins size={20} />
				</Link>
			</div>
		</section>
	);
};

export default BuyBy;
