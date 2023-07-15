// import { UpdateListingBody } from '../../../../../oruphones.backend/src/controllers/listing/update' little typescript magic

export default async function update(body:any) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/update`,
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
	return resp;
}
