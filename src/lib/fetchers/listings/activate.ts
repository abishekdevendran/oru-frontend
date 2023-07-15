export default async function activate(listingId: string){
  const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/activate`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ listingId }),
			credentials: 'include',
		}
	);
  const resp = await response.json();
  return resp;
}