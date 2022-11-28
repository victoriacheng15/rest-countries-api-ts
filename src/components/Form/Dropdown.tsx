import { regions } from "./regionList";

function Dropdown() {
	return (
		<select
			// value={}
			// onChange={}
			className="w-64 rounded-lg bg-lightGray-700 p-4 text-lightGray-900 outline-dashed outline-1 dark:bg-darkBlue-700 dark:text-lightGray-700 md:w-48"
		>
			{regions.map(({ id, value, label }) => (
				<option key={id} value={value}>
					{label}
				</option>
			))}
		</select>
	);
}

export default Dropdown;
