import Home from "./pages/Home";
import Country from "./pages/Country";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useThemeContext} from "./contexts/ThemeContext";
import Footer from "./components/Footer";

function App() {
	const { dark } = useThemeContext();

	return (
		<div className={`${dark && "dark"}`}>
			<Header />
			<main className="min-h-screen bg-lightGray-800 py-12 dark:bg-darkBlue-800">
				<div className="mx-auto flex flex-col w-11/12 max-w-7xl items-center justify-center">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/country" element={<Country />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
