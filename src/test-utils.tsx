import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CountriesProvider } from "./contexts/CountriesContext";
import { PaginationProvider } from "./contexts/PaginationContext";

const AllProviders = ({ children }: ChildrenProp) => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<CountriesProvider>
					<PaginationProvider>{children}</PaginationProvider>
				</CountriesProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">,
) =>
	render(ui, {
		wrapper: AllProviders,
		...options,
	});

export * from "@testing-library/react";
export { customRender as render };
