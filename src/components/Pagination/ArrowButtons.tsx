import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { usePaginationContext } from "../../contexts/PaginationContext";

function ArrowButtons({ children }: ChildrenProp) {
	const { forward, backward } = usePaginationContext();

	return (
		<>
			<button
				className="text-5xl text-darkBlue-900 duration-300 ease-in-out hover:scale-150 dark:text-lightGray-800"
				type="button"
				onClick={backward}
				aria-label="go previous page"
			>
				<RiArrowDropLeftLine />
			</button>
			{children}
			<button
				className="text-5xl text-darkBlue-900 duration-300 ease-in-out hover:scale-150 dark:text-lightGray-800"
				type="button"
				onClick={forward}
				aria-label="go to next page"
			>
				<RiArrowDropRightLine />
			</button>
		</>
	);
}

export default ArrowButtons;
