import React from 'react';
import Navbar from '@/components/Navbar';
import { NextSeo } from 'next-seo';
import Hero from '@/components/Carousals/hero';

const _index = () => {
	return (
		<>
			<NextSeo title="Home | ORUphones" description="ORUphones landing page" />
			<Navbar />
			<Hero />
		</>
	);
};

export default _index;
