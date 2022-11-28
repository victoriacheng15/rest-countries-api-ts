import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useThemeContext } from "./contexts/ThemeContext";

function App() {
	const { dark } = useThemeContext();

	return (
		<div className={`${dark && "dark"}`}>
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
