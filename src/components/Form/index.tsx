import Dropdown from "./Dropdown";
import SearchBox from "./SearchBox";

function Form() {
	return (
		<form className="mb-8 flex w-full flex-col gap-12 md:flex-row md:justify-between">
			<SearchBox />
			<Dropdown />
		</form>
	);
}

export default Form;
