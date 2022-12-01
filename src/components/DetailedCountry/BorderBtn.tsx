import { Link } from "react-router-dom";

function BorderBtn({ to, borderName }: BorderBtnProps) {
	return (
		<Link
			to={to}
			className="rounded-sm bg-lightGray-800 p-2 px-4 font-medium shadow-md shadow-darkBlue-900 duration-300 ease-in-out hover:scale-125 dark:bg-darkBlue-900 dark:shadow-lightGray-900"
		>
			{borderName}
		</Link>
	);
}

export default BorderBtn;
