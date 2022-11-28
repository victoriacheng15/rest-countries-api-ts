import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CountriesProvider } from "./contexts/CountriesContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<CountriesProvider>
					<App />
				</CountriesProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
);
