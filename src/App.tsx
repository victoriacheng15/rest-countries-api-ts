import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import SomethingWrong from "./pages/SomethingWrong";
import { useThemeContext } from "./contexts/ThemeContext";

function App() {
	const { dark } = useThemeContext();

	return (
		<div className={`${dark && "dark"} flex flex-col`}>
			<Header />
			<main className="bg-lightGray-800 py-12 text-darkBlue-900 dark:bg-darkBlue-800 dark:text-lightGray-800 min-h-screen">
				<div className="mx-auto flex w-11/12 max-w-7xl flex-col">
					<Routes>
						<Route path="/" element={<Countries />} />
						<Route path="/country/:code" element={<Country />} />
						<Route path="*" element={<SomethingWrong />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</div>
	);
}	

export default App;
