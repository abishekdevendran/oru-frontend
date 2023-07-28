import { HelpingHand } from 'lucide-react';
import React from 'react';

const BuyBy = () => {
	return (
		<section className="topBrands w-full container my-8 aspect-[2/1]">
			<div className="gridContainer w-full h-full grid grid-cols-8 grid-rows-4">
				<div className="bestSellingCard col-span-4 row-span-4 bg-black rounded-3xl">
					<span className="flex gap-2 items-center justify-center text-center h-1/3 text-white font-poppins text-4xl font-bold">
						Best Selling Phones <HelpingHand size={40} />
					</span>
				</div>
			</div>
		</section>
	);
};

export default BuyBy;
