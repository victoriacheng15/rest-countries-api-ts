interface Countries {
	cca2: string;
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