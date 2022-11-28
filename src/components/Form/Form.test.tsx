import { logRoles, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from ".";

describe("Form", () => {
	beforeEach(() => {
		// render(<Form />);
		const view = render(<Form />).container;
		logRoles(view);
	});

	it("should renders SearchBar", () => {
		const searchbox = screen.getByRole("textbox");
		expect(searchbox).toBeInTheDocument();
	});

	// it('should have value of Canada in searchbox', async () => {
	//   user.setup()
	//   const searchInput = screen.getByRole('textbox')
	//   await user.type(searchInput, "canada", {delay: 500})
	//   expect(searchInput).toHaveValue("canada")
	// })

	it("should renders dropdown", () => {
		const dropdown = screen.getByRole("combobox");
		expect(dropdown).toBeInTheDocument();
	});
});
