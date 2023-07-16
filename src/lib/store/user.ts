import TUser from '@/types/User';
import { atom } from 'jotai';

export const OGuserAtom = atom<{
	data: Partial<TUser> | undefined;
	isLoading: boolean;
}>({
	data: undefined,
	isLoading: true,
});
OGuserAtom.debugLabel = 'OGuserAtom';


const userAtom = atom(
	(get) => get(OGuserAtom).data,
	(get, set, update: Partial<TUser> | undefined) => {
		set(OGuserAtom, {
			data: update,
			isLoading: false,
		});
		return update;
	},
);
userAtom.debugLabel = 'userAtom';

export default userAtom;
