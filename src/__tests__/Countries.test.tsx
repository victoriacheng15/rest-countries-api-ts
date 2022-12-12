import { render, screen } from "../test-utils";
import user from "@testing-library/user-event";
import Countries from "../pages/Countries";

describe("Countries Page", () => {
	beforeEach(() => {
		render(<Countries />);
	});

	it("should renders SearchBar", () => {
		const searchbox = screen.getByRole("textbox");
		expect(searchbox).toBeInTheDocument();
	});

	it("should have value of Canada in searchbox", async () => {
		user.setup();
		const searchInput = screen.getByRole("textbox");
		await user.type(searchInput, "canada");
		expect(searchInput).toHaveValue("canada");
	});

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
