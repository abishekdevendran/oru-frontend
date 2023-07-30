import PageNavigator from '@/components/Pages/BestDeals/PageNavigator';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

const MakePage = () => {
	const router = useRouter();
	const { make } = router.query;
	return (
		<>
			<NextSeo
				title={`${make ? make + ' ':''}Best Deals | ORUphones`}
				description="ORUphones Best Deals Page"
			/>
			<div className="navbarClearance w-full pt-16" />
			<PageNavigator />
		</>
	);
};

export default MakePage;
