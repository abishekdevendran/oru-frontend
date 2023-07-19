type TListingFilter = {
	ram?: string[];
	latitude? : number;
	longitude? : number;
	locality? : string;
	state? : string;
	city? : string;
	page?: number;
	make?: string[];
	model?: string[];
	condition?: string[];
	storage?: string[];
	warranty?: string[];
	verified?: boolean;
	priceRange?: number[];
	limit?: number;
	notionalIDs?: string[];
	sort?: {
		latlong?: number;
		price?: number;
		date?: number;
	};
	includeSelf?: boolean;
};

export type TListingFilterWithID = {
	listingId: string;
} & TListingFilter;

export type TListingReturnFilter = {
	vendorLogo: { fullImage: string; thumbImage: string }[];
	externalSource: any;
	color: string;
	condition: string | undefined;
	verifiedDate: string;
	compareData: boolean;
	similarListTable: boolean;
	listingId?: string;
	deviceCondition?: string;
	// defaultImage?: string;
	listingLocation?: string;
	listingPrice?: number;
	marketingName?: string;
	model?: string;
	make?: string;
	status?: string;
	listingDate?: string;
	listedBy?: string;
	images?: {
		thumbImage: string;
		fullImage: string;
		isVarified: string;
	}[];
	defaultImage: {
		fullImage: string;
	};
	isOtherVendor?: 'Y' | 'N';
	imagePath: string;
	deviceStorage?: string;
	charger?: string;
	earphone?: string;
	originalbox?: string;
	deviceRam?: string;
	functionalTestResults?: {
		commandName: string;
		startDateTime: string;
		displayName: string;
		testStatus: string;
		endDateTime: string;
	}[];
	notionalPercentage?: number;
	warranty?: string;
	cosmetic?: {
		0: string;
		1: string;
		2: string;
	};
	favourite?: boolean;
	verified?: boolean;
	count?: number;
	vendorName?: string;
	vendorImage?: string;
	vendorLink?: string;
	listingState?:string;
	listingLocality?:string;
};

export type Tmodel = {
	model: string;
	image: string;
};

export default TListingFilter;
