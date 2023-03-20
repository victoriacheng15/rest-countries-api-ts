import { regions } from "./regionList";
import { useCountriesContext } from "../../contexts/CountriesContext";

function Dropdown() {
	const { select, setSelect } = useCountriesContext();

	return (
		<select
			value={select}
			onChange={(e) => setSelect(e.target.value)}
			className="w-64 rounded-lg bg-lightGray-700 p-4 text-gray-900 outline-dashed outline-2 dark:bg-darkBlue-700 dark:text-lightGray-700 md:w-48"
		>
			{regions.map(({ value, label }) => (
				<option key={label} value={value}>
					{label}
				</option>
			))}
		</select>
	);
}

export default Dropdown;
