interface FormState {
	search: string;
	select: string;
}

interface CountriesContextType extends CountriesState, FormState {
	setSearch: (search: string) => void;
	setSelect: (select: string) => void;
}

interface PaginationContextType {
	currentPage: number;
	displayPages: number[];
	currentList: Countries[];
	forward: () => void;
	backward: () => void;
}

interface ThemeContextType {
	dark: boolean;
	setDark: () => void;
}
