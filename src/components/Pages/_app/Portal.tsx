import { useRef, useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
}

export const Portal = (props: PortalProps) => {
	const ref = useRef<Element | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// get html element
		ref.current = document.getElementsByTagName('html')[0];
		setMounted(true);
	}, []);

	return mounted && ref.current
		? createPortal(<div>{props.children}</div>, ref.current)
		: null;
};
