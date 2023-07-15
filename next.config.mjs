import './config/env.mjs';
import withPWA from 'next-pwa';
/** @type {import('next').NextConfig} */
// wrap bundle-analyzer require with process.env check
const withBundleAnalyzer = process.env.ANALYZE
	? (await import('@next/bundle-analyzer')).default({ enabled: true })
	: (a) => a;

const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict Transport Security',
		value: 'max-age=31536000; includeSubDomains; preload',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'Referrer-Policy',
		value: 'same-origin',
	},
];

export default withPWA({
	disable: process.env.NODE_ENV === 'production' ? false : true,
	dest: 'public',
	register: true,
	skipWaiting: true,
})(
	withBundleAnalyzer({
		reactStrictMode: true,
		transpilePackages: ['jotai-devtools'],
		images: {
			domains: [
				'zenrodevimages.s3.us-west-2.amazonaws.com',
				'zenrodeviceimages.s3.us-west-2.amazonaws.com',
				'www.mobiruindia.com',
				'www.oruphones.com',
				'mobiruecom.s3.us-west-2.amazonaws.com',
				'zenroecom.s3.us-west-2.amazonaws.com',
				'zenrodeviceimages.s3-us-west-2.amazonaws.com',
				'demo-bucket-c2c-001.s3.amazonaws.com',
				'd1tl44nezj10jx.cloudfront.net',
			],
			minimumCacheTTL: 60,
		},
		eslint: {
			ignoreDuringBuilds: true,
		},
		async headers() {
			return process.env.production
				? [
						{
							source: '/:path*',
							headers: securityHeaders,
						},
				  ]
				: [];
		},
		...(process.env.production
			? {
					compiler: {
						removeConsole: true,
					},
			  }
			: {}),
		swcMinify: true,
		experimental: {
			scrollRestoration: true,
		},
	}),
);
