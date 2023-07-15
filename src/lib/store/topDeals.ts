import type IDeal from '@/types/Deals';
import { TListingReturnFilter } from '@/types/ListingFilter';
import { atom } from 'jotai';

export const topDealsAtom = atom<TListingReturnFilter[] | null>(null);
