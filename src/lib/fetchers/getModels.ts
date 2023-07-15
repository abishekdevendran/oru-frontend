export default async function getModels(make: string, limit?: number) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/models`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ make, count: limit }),
		}
	);
	const resp = await response.json();
	return resp.data;
}

export async function getModelsFiltered(props: {
	makes?: string[];
	limit?: number;
}) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/models/filtered`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ makes: props.makes, count: props.limit }),
		}
	);
	const resp = await response.json();
	return resp.data;
}

export async function getVariants(make: string, model: string) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/models/variants`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ make, model }),
		}
	);
	const resp = await response.json();
	return resp.data;
}

export async function getLSP(
	make: string,
	model: string,
	storage: string,
	ram?: string
) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/models/getLSP`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ make, model, storage, ...(ram && { ram }) }),
		}
	);
	const resp = await response.json();
	return resp.data;
}
