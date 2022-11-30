import { createContext, useState, useContext } from "react";
import { useCountriesContext } from "./CountriesContext";

interface PaginationContextType {
	currentPage: number;
	displayPages: number[];
	currentList: Countries[];
	forward: () => void;
	backward: () => void;
}

const PaginationContext = createContext({} as PaginationContextType);

export function PaginationProvider({ children }: ChildrenProps) {
	const { countries } = useCountriesContext();

	const [listPerPage] = useState(12);
	const [currentPage, setCurrentPage] = useState(1);
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(5);

	const indexOfLast = currentPage * listPerPage;
	const indexOfFirst = indexOfLast - listPerPage;
	const currentList = countries.slice(indexOfFirst, indexOfLast);

	const total = Math.ceil(countries.length / listPerPage);
	const pageArr = [...new Array(total + 1).keys()].slice(1);
	const displayPages = pageArr.slice(start, end);

	const forward = () => {
		const FIVE = displayPages.length;
		const condition = currentPage <= Math.floor(FIVE / 2);
		if (condition) {
			setCurrentPage((prev) => prev + 1);
			setStart(0);
			setEnd(5);
		} else {
			setCurrentPage((prev) => (prev >= total ? total : prev + 1));
			setStart((prev) => (prev >= total - 5 ? total - 5 : start + 1));
			setEnd((prev) => (prev >= total ? total : end + 1));
		}
	};

	const backward = () => {
		const condition = currentPage > total - 2;
		if (condition) {
			setCurrentPage((prev) => prev - 1);
			setStart((prev) => (prev >= total - 5 ? total - 5 : start - 1));
			setEnd((prev) => (prev >= total - 5 ? total : end - 1));
		} else {
			setCurrentPage((prev) => (prev <= 1 ? 1 : prev - 1));
			setStart(start <= 0 ? 0 : start - 1);
			setEnd(end <= 5 ? 5 : end - 1);
		}
	};

	return (
		<PaginationContext.Provider
			value={{
				currentList,
				currentPage,
				displayPages,
				forward,
				backward,
			}}
		>
			{children}
		</PaginationContext.Provider>
	);
}

export const usePaginationContext = () => useContext(PaginationContext);
