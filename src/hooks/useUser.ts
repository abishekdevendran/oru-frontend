import userAtom, { OGuserAtom } from '@/store/user';
import logoutFunc from '@/fetchers/user/logout';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import loadingAtom from '@/store/loading';

const isLoggedInAtom = atom((get) => !!get(userAtom));

function useUser() {
	const [user, setUser] = useAtom(userAtom);
	const { isLoading: isUserLoading } = useAtomValue(OGuserAtom);
	const isLoggedIn = useAtomValue(isLoggedInAtom);
	const setIsLoading = useSetAtom(loadingAtom);
	const logout = async () => {
		setIsLoading({
			isLoading: true,
			reason: 'Logging out...',
		});
		await logoutFunc();
		setUser(undefined);
		setIsLoading(false);
	};
	return {
		user,
		setUser,
		isLoggedIn,
		isUserLoading,
		logout,
	};
}

export default useUser;
