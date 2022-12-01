import { Route, Routes } from "react-router-dom";
import Countries from "./Countries";
import Country from "./Country";
import SomethingWrong from "./SomethingWrong";
import { useCountriesContext } from "../contexts/CountriesContext";
import Spinner from "../components/Spinner";

function Home() {
	const { loading, error } = useCountriesContext();
	console.log(error)

	return (
		<>
			<main className="min-h-screen bg-lightGray-800 py-12 text-darkBlue-900 dark:bg-darkBlue-800 dark:text-lightGray-800">
				<div className="mx-auto flex w-11/12 max-w-7xl flex-col">
					{loading && <Spinner />}
					{error && <SomethingWrong />}
					<Routes>
						<Route path="/" element={<Countries />} />
						<Route path="/country/:code" element={<Country />} />
						<Route path="*" element={<SomethingWrong />} />
					</Routes>
				</div>
			</main>
		</>
	);
}

export default Home;
