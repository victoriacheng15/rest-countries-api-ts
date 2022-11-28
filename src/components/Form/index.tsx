import Dropdown from "./Dropdown"
import SearchBox from "./SearchBox"

function Form() {
  return (
    <form className="flex flex-col gap-12 md:flex-row md:justify-between w-full mb-8">
    <SearchBox />
    <Dropdown />
  </form>
  )
}

export default Form