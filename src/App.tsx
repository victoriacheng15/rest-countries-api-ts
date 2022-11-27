import Home from "./pages/Home";
import Country from "./pages/Country";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useThemeContext, ThemeContextType } from "./contexts/ThemeContext";
import Footer from "./components/Footer";

function App() {
	const { dark }: ThemeContextType = useThemeContext();

	return (
		<div className={`${dark && "dark"}`}>
			<Header />
			<main className="py-8">
				<div className="mx-auto flex w-11/12 max-w-7xl items-center justify-center">
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
