import { BadgeCheck, Coins, HelpingHand, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const BuyBy = () => {
	return (
		<section className="topBrands w-full container my-8">
			<div className="gridContainer w-full grid grid-cols-2 grid-rows-1 gap-2 p-2 aspect-[2/1]">
				<div className="bestSellingCard shadow-xl col-span-1 row-span-1 bg-black rounded-3xl aspect-square">
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
				</div>
				<div className="gridContainer w-full grid grid-cols-2 grid-rows-2 gap-2 aspect-square]">
					<div className="VerifiedCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square">
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
					</div>
					<div className="LikeNewCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square">
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
					</div>
					<div className="WarrantyCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square">
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
					</div>
					<div className="PriceGridContainer aspect-square w-full grid grid-cols-2 grid-rows-2">
						<div className="PriceCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square">
							<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-lg leading-none">
								<span>Under</span>
								<span className="font-semibold">₹10k</span>
								<Coins size={20} />
							</span>
						</div>
						<div className="PriceCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square">
							<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-lg leading-none">
								<span>Under</span>
								<span className="font-semibold">₹20k</span>
								<Coins size={20} />
							</span>
						</div>
						<div className="PriceCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square">
							<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-lg leading-none">
								<span>Under</span>
								<span className="font-semibold">₹30k</span>
								<Coins size={20} />
							</span>
						</div>
						<div className="PriceCard shadow-xl col-span-1 row-span-1 rounded-3xl aspect-square">
							<span className="h-full flex flex-col gap-2 items-center justify-center text-center font-poppins text-lg leading-none">
								<span>Under</span>
								<span className="font-semibold">₹50k</span>
								<Coins size={20} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BuyBy;
