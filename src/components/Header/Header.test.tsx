import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import { ThemeProvider } from "../../contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import Header from "./index";

describe("Header", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
			{
				wrapper: ThemeProvider,
			},
		);
	});

	it("should have the heading", () => {
		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
	});

  it('should render the theme button', () => {
    const themeButton = screen.getByRole('button')
    expect(themeButton).toBeInTheDocument()
  })

  it('should show dark mode after click the button', async () => {
    const themeButton = screen.getByRole('button')
    await user.click(themeButton)
    expect(themeButton).toHaveTextContent(/dark mode/i)
  })
});
