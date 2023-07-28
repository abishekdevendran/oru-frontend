import React from 'react';
import Navbar from '@/components/Navbar';
import { NextSeo } from 'next-seo';
import Hero from '@/components/Carousals/hero';
import getHomeBrands from '@/fetchers/index/getHomeBrands';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import TopBrands from '@/components/Pages/Index/TopBrands';
import BuyBy from '@/components/Pages/Index/BuyBy';

type TProps = {
	brands:
		| {
				_id: string;
				displayOrder: number;
				make: string;
				imagePath: string;
		  }[]
		| null;
};

export const getStaticProps: GetStaticProps<TProps> = async (context) => {
	try {
		const brands = await getHomeBrands();
		return {
			props: {
				brands:
					brands
						?.sort((a, b) => a?.displayOrder - b?.displayOrder)
						.slice(0, 10) ?? null,
			},
			revalidate: 86400, // 24 hours
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				brands: null,
			},
			revalidate: 86400, // 24 hours
		};
	}
};

const Index = ({ brands }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<NextSeo title="Home | ORUphones" description="ORUphones landing page" />
			<Navbar />
			<Hero />
			<TopBrands brands={brands} />
			<BuyBy/>
		</>
	);
};

export default Index;
