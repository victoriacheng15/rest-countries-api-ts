import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("should render the heading", () => {
		render(<App />);
		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
	});
});
