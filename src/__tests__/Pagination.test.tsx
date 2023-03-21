import { render, screen } from "../test-utils";
import Pagination from "../components/Pagination";

describe("Pagination", () => {
	beforeEach(() => {
		render(<Pagination />);
	});

	it("should render pagination correctly", () => {
		const pagination = screen.getByRole("navigation");
		expect(pagination).toBeInTheDocument();
	});
});
