import React from 'react';
import Navbar from '@/components/Navbar';
import { NextSeo } from 'next-seo';

const _index = () => {
	return (
		<>
			<NextSeo
				title="Home | ORUphones"
				description="ORUphones landing page"
			/>
			<Navbar />
		</>
	);
};

export default _index;
