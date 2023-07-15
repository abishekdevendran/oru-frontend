import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
	client: {
		NEXT_PUBLIC_SERVER_URL : z.string().url().default('http://localhost:5000'),
		NEXT_PUBLIC_GEOCODE_API_KEY : z.string(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
		NEXT_PUBLIC_GEOCODE_API_KEY: process.env.NEXT_PUBLIC_GEOCODE_API_KEY,
	},
});

export default env;
