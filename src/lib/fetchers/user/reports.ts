export async function getReports() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/user/reports`,
		{
			credentials: 'include',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
	const data = await response.json();
	return data.data;
}

export async function checkReport(reportId: string) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/user/reports`,
		{
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ reportId }),
		}
	);
	const data = await response.json();
	return data;
}

export default {
	getReports,
	checkReport,
};
