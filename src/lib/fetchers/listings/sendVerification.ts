export default async function sendVerification(listingId: string) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/sendVerification`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ listingId }),
			credentials: 'include',
		}
	);
	if (!response.ok) throw new Error('Failed to send verification');
	const resp = await response.json();
	return resp.data;
}
