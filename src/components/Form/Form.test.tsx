import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from ".";
import { CountriesProvider } from "../../contexts/CountriesContext";

describe("Form", () => {
	beforeEach(() => {
		render(<Form />, {
			wrapper: CountriesProvider
		});
	});

	it("should renders SearchBar", () => {
		const searchbox = screen.getByRole("textbox");
		expect(searchbox).toBeInTheDocument();
	});

	it('should have value of Canada in searchbox', async () => {
	  user.setup()
	  const searchInput = screen.getByRole('textbox')
	  await user.type(searchInput, "canada")
	  expect(searchInput).toHaveValue("canada")
	})

	it("should renders dropdown correctly", () => {
		const dropdown = screen.getByRole("combobox");
		expect(dropdown).toBeInTheDocument();
	});

	it("should render default option", () => {
		const defaultOption = screen.getByRole("option", {
			name: "Select Region",
		}) as HTMLOptionElement;
		expect(defaultOption.selected).toBe(true);
	});

	it("should hae 6 options", () => {
		const options = screen.getAllByRole("option");
		expect(options).toHaveLength(6);
	});

	it("should selected Asia", async () => {
		const dropdown = screen.getByRole("combobox");
		const asiaOption = screen.getByRole("option", {
			name: "Asia",
		}) as HTMLOptionElement;
		await user.selectOptions(dropdown, asiaOption);
		expect(asiaOption.selected).toBe(true);
	});
});
