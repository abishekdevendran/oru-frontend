import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/../tailwind.config.js';
import { useEffect, useState } from 'react';

const fullConfig = resolveConfig(tailwindConfig).theme!.screens!;

export default function useResponsive(keys: 'sm' | 'md' | 'lg' | 'xl' | '2xl') {
	const [isScreen, setScreen] = useState(false);
	useEffect(() => {
		const mediaQuery = window.matchMedia(
			`(min-width: ${fullConfig[keys as keyof typeof fullConfig]})`,
		);
		const listener = () => setScreen(mediaQuery.matches);
		mediaQuery.addEventListener('change', listener);
		return () => mediaQuery.removeEventListener('change', listener);
	}, [keys]);
	return isScreen;
}
