import { render, screen } from "@testing-library/react";
import { CountriesProvider } from "../../contexts/CountriesContext";
import { PaginationProvider } from "../../contexts/PaginationContext";
import Pagination from "./index";

describe("Pagination", () => {
	beforeEach(() => {
		render(
			<CountriesProvider>
				<PaginationProvider>
					<Pagination />
				</PaginationProvider>
			</CountriesProvider>,
		);
	});

	it("should render pagination correctly", () => {
		const pagination = screen.getByRole("navigation");
		expect(pagination).toBeInTheDocument();
	});

	// it("should display 5 pages once loaded", () => {
	// 	const pages = screen.findAllByRole("listitem");
  //   expect(pages).toBeInTheDocument()
	// });
});
