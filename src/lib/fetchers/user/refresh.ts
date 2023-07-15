export default async function refreshUser(forceNew: boolean) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/user/refreshUser`,
		{
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				forceNew,
			}),
		}
	);
	const data = await response.json();
	return data;
}
