import { Country } from './country.interface';
import { Region } from './region.type';

export type TermCountries = {
  term: string;
  countries: Country[];
};

export type RegionCountries = {
  region?: Region;
  countries: Country[];
};

export type CacheStore = {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
};
