export default interface TUser {
	userName: string;
	email: string;
	profilePicPath: string;
	city: string;
	state: string;
	mobileNumber: number;
	favListings: string[];
	userListings: string[];
	associatedWith: string;
	isAccountExpired: boolean;
}
