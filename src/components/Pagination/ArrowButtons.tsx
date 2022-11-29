import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { usePaginationContext } from "../../contexts/PaginationContext";

function ArrowButtons({ children }: ChildrenProps) {
	const { forward, backward } = usePaginationContext();

	return (
		<>
			<button
				className="text-5xl text-darkBlue-900 duration-300 ease-in-out hover:scale-150 dark:text-lightGray-800"
				type="button"
				onClick={backward}
			>
				<RiArrowDropLeftLine />
			</button>
			{children}
			<button
				className="text-5xl text-darkBlue-900 duration-300 ease-in-out hover:scale-150 dark:text-lightGray-800"
				type="button"
				onClick={forward}
			>
				<RiArrowDropRightLine />
			</button>
		</>
	);
}

export default ArrowButtons;
