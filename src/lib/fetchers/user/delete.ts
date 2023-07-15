export default async function deleteUser() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/user/deleteUser`,
		{
			credentials: 'include',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		}
	);
	const data = await response.json();
	return data;
}
