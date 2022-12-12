import { render, screen } from "../test-utils";
import user from "@testing-library/user-event";
import Header from "../components/Header";

describe("Header", () => {
	beforeEach(() => {
		render(<Header />);
	});

	it("should have the heading", () => {
		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
	});

	it("should render the theme button", () => {
		const themeButton = screen.getByRole("button");
		expect(themeButton).toBeInTheDocument();
	});

	it("should show dark mode after click the button", async () => {
		const themeButton = screen.getByRole("button");
		await user.click(themeButton);
		expect(themeButton).toHaveTextContent(/dark mode/i);
	});
});
