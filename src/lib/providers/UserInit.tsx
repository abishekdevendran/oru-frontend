import { OGuserAtom } from '@/store/user';
import isLoggedIn from '@/fetchers/user/isLoggedIn';
import { useSetAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';

const UserInit = () => {
	const userSetter = useSetAtom(OGuserAtom);
	const { data, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const data = await isLoggedIn();
			if (data.isLoggedIn) {
				userSetter({
					data: data.user,
					isLoading: false,
				});
			} else {
				userSetter({
					data: undefined,
					isLoading: false,
				});
			}
			return data;
		},
	});
	return null;
};

export default UserInit;
