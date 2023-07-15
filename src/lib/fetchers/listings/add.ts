// import { AddListingBody } from '../../../../../oruphones.backend/src/controllers/listing/add'

export default async function add(body: any) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/add`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
			credentials: 'include',
		}
	);
	const resp = await response.json();
	if (!response.ok) {
		if (resp.message) {
			throw new Error(resp.message);
		} else {
			throw new Error('Something went wrong');
		}
	}
	return resp;
}
