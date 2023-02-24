interface Countries {
	cca3: string;
	flags: {
		[key: string]: string;
	};
	alt: string;
	name: {
		[key: string]: string;
	};
	population: string;
	region: string;
	capital: string;
}

interface CountriesState {
	countries: Countries[];
	loading: boolean;
	error: string;
}

interface Country extends Countries {
	subregion: string;
	tld: string[];
	currencies: {
		[key: string]: {
			name: string;
		};
	};
	languages: {
		[key: string]: {
			[key: string]: string;
		};
	};
	borders: string[];
}

interface CountryState {
	country: Country[];
	loading: boolean;
	error: string;
}
