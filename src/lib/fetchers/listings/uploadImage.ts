export async function uploadImage(formData: FormData): Promise<{
	reason: string;
	status: string;
	imageOriginalPath: string;
	imageThumbPath: string;
}> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/imageUpload?type=listingImage`,
		{
			method: 'POST',
			body: formData,
			credentials: 'include',
		}
	);
	const resp = await response.json();
	return resp;
}
