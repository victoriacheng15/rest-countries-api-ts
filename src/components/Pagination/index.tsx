import ArrowButtons from "./ArrowButtons";
import DisplayPages from "./DisplayPages";
import { usePaginationContext } from "../../contexts/PaginationContext";

function Pagination() {
	const { displayPages, currentPage } = usePaginationContext();

	return (
		<nav
			className="flex items-center justify-center gap-6"
			role="navigation"
			aria-label="pagination navigation"
		>
			<ArrowButtons>
				<DisplayPages displayPages={displayPages} currentPage={currentPage} />
			</ArrowButtons>
		</nav>
	);
}

export default Pagination;
