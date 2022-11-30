import { Route, Routes } from "react-router-dom";
import Countries from "./Countries";
import Country from "./Country";

function Home() {
	return (
		<>
			<main className="min-h-screen bg-lightGray-800 py-12 text-darkBlue-900 dark:bg-darkBlue-800 dark:text-lightGray-800">
				<div className="mx-auto flex w-11/12 max-w-7xl flex-col items-center justify-center">
					<Routes>
						<Route path="/" element={<Countries />} />
						<Route path="/country/:code" element={<Country />} />
					</Routes>
				</div>
			</main>
		</>
	);
}

export default Home;
