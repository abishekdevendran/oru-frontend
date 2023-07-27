import Geocode from 'react-geocode';
import filterAtom from '@/store/productFilter';
import TLocation from '@/types/Location';
import { getLocation } from '@/fetchers/location';
import { setCookie } from 'cookies-next';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const GEOCODE_API_KEY = process.env.NEXT_PUBLIC_GEOCODE_API_KEY!;

export const locationAtom = atomWithStorage<Partial<TLocation> | undefined>(
	'location',
	undefined
);
locationAtom.debugLabel = 'locationAtom';
const readLocationAtom = atom((get) => {
	const location = get(locationAtom);
	if (!location) {
		return 'India';
	}
	if (location.locality && location.city) {
		return location.locality + ', ' + location.city;
	}
	if (location.city && location.state) {
		return location.city + ', ' + location.state;
	}
	if (location.state) {
		return location.state;
	}
	return 'India';
});
readLocationAtom.debugLabel = 'readLocationAtom';
export const updateLocationAtom = atom(
	null,
	async (get, set, locationObj: Partial<TLocation> | undefined) => {
		if (!locationObj) {
			set(locationAtom, undefined);
			set(filterAtom, {
				...get(filterAtom),
				locality: undefined,
				state: undefined,
				city: undefined,
				latitude : undefined,
				longitude : undefined
			});
			return;
		}
		const { locality, city, state, latitude, longitude } = locationObj;
		setCookie('location', JSON.stringify(locationObj));
		set(filterAtom, {
			...get(filterAtom),
			locality: locality,
			state: state,
			city: city,
			latitude : latitude,
			longitude : longitude
		});
		set(locationAtom, locationObj);
	}
);

export const updateLocationLatLongAtom = atom(
	null,
	async (
		_get,
		set,
		location: { coords: { latitude: string; longitude: string } }
	) => {
		Geocode.setApiKey(GEOCODE_API_KEY);
		Geocode.setLanguage('en');
		Geocode.setRegion('IN');
		Geocode.setLocationType('ROOFTOP');
		Geocode.enableDebug();
		// Get city from latidude & longitude.

		const locationfromlatlong = await getLocation(
			parseFloat(location.coords.latitude),
			parseFloat(location.coords.longitude)
		);

		let city = locationfromlatlong.dataObject[1].name;
		let state = locationfromlatlong.dataObject[0].name;
		let locality = locationfromlatlong.dataObject[2].name;

		const localitywithcity = locality + ',' + ' ' + city;

		let locationObj = {
			locality: locality,
			city: city,
			state: state,
			latitude: parseFloat(location.coords.latitude),
			longitude: parseFloat(location.coords.longitude),
			location: localitywithcity,
		};
		set(updateLocationAtom, locationObj);
	}
);

export const citiesAtom = atomWithStorage<any>('cities', undefined);

export default readLocationAtom;
