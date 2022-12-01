import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

function BackHomeBtn() {
	return (
		<Link
			to="/"
			className=" mb-14 flex w-max items-center gap-4 rounded-lg border-2 border-gray-600 p-2 font-semibold text-darkBlue-900 duration-300 ease-in-out hover:bg-darkBlue-900 hover:text-lightGray-700  dark:border-gray-300 dark:text-lightGray-800 dark:hover:bg-lightGray-700 dark:hover:text-darkBlue-700"
		>
			<IoArrowBackOutline /> back
		</Link>
	);
}

export default BackHomeBtn;
