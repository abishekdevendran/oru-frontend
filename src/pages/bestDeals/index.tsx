import PageNavigator from '@/components/Pages/BestDeals/PageNavigator';
import { NextSeo } from 'next-seo';
import React from 'react'

const BestDeals = () => {
  return (
		<>
			<NextSeo title="Best Deals | ORUphones" description="ORUphones Best Deals Page" />
			<div className='navbarClearance w-full pt-16'/>
      <PageNavigator />
		</>
	);
}

export default BestDeals