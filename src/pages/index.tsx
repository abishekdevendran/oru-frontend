import React from 'react';
import Navbar from '@/components/Navbar';
import { NextSeo } from 'next-seo';
import Hero from '@/components/Carousals/hero';
import getHomeBrands from '@/fetchers/index/getHomeBrands';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import TopBrands from '@/components/Pages/Index/TopBrands';

type TProps = {
	brands: string[] | null;
};

export const getStaticProps: GetStaticProps = async (context) => {
	const brands = await getHomeBrands();
	return {
		props: {
			brands:
				brands
					?.sort((a, b) => a?.displayOrder - b?.displayOrder)
					.map((item) => item?.imagePath)
					.slice(0,10) || null,
		},
		revalidate: 86400, // 24 hours
	};
};

const Index = ({ brands }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<NextSeo title="Home | ORUphones" description="ORUphones landing page" />
			<Navbar />
			<Hero />
			<TopBrands brands={brands} />
		</>
	);
};

export default Index;
