import SSRreq from '@/types/SSRreq';
import SSRHeaders from '@/lib/ssrHeaders';

export default async function getHomeBrands(req?: SSRreq): Promise<
	{
		_id: string;
		displayOrder: number;
		name: string;
		imagePath: string;
	}[]
> {
	//ping the api route with the location
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/master/brands`,
		{
			method: 'GET',
			credentials: 'include',
			...SSRHeaders(req),
		},
	);
	const json = await res.json();
	return json.dataObject;
}
