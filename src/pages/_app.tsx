import '@/styles/globals.css';
import {
	DehydratedState,
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { DefaultSeo } from 'next-seo';
import { QCOptions, SEO } from '@/config/_index';
import Head from 'next/head';
import GlobalLoading from '@/components/Popups/GlobalLoading';
import { Poppins } from 'next/font/google';
import UserInit from '@/lib/providers/UserInit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '400', '800'],
	variable: '--font-poppins',
});

export default function App({
	Component,
	pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
	const [queryClient] = useState(() => new QueryClient(QCOptions));
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Provider>
					<DevTools theme="dark" />
					<Head>
						<meta
							name="viewport"
							content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
						/>
					</Head>
					<UserInit />
					<GlobalLoading />
					<main className={`${poppins.variable} font-poppins`}>
						<Component {...pageProps} />
						<ToastContainer />
					</main>
					<DefaultSeo {...SEO} />
				</Provider>
			</Hydrate>
		</QueryClientProvider>
	);
}
