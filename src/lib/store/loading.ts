import { atom } from 'jotai';

function loadingAtomCreator(initialValue: boolean) {
	const loadingAtom = atom(
		{
			isLoading: initialValue,
			reason: undefined,
		},
		(
			get,
			set,
			update:
				| boolean
				| {
						isLoading: boolean;
						reason?: string;
				  },
		) => {
			if (typeof update === 'boolean') {
				set(loadingAtom, {
					isLoading: update,
					reason: undefined,
				});
			} else {
				set(loadingAtom, update);
			}
		},
	);
	return loadingAtom;
}

const loadingAtom = loadingAtomCreator(false);
loadingAtom.debugLabel = 'globalLoading';

export default loadingAtom;
