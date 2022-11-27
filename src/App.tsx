import Header from "./components/Header";
import { useThemeContext, ThemeContextType } from "./contexts/ThemeContext";

function App() {
	const { dark }: ThemeContextType = useThemeContext();

	return (
		<div className={`min-h-screen font-nuito ${dark && "dark"}`}>
			<Header />
		</div>
	);
}

export default App;
