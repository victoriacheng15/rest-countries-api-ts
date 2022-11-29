import ArrowButtons from "./ArrowButtons";
import DisplayPages from "./DisplayPages";
import { usePaginationContext } from "../../contexts/PaginationContext";

function Pagination() {
	const { displayPages, currentPage } = usePaginationContext();

	return (
		<section className="flex items-center justify-center gap-6">
			<ArrowButtons>
				<DisplayPages displayPages={displayPages} currentPage={currentPage} />
			</ArrowButtons>
		</section>
	);
}

export default Pagination;
