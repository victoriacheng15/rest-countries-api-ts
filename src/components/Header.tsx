import { useThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

function Header() {
	const { dark, setDark } = useThemeContext();

	const DarkTheme = () => (
		<>
			<IoMoon /> dark mode
		</>
	);

	const LightTheme = () => (
		<>
			<IoMoonOutline /> light mode
		</>
	);

	return (
		<header className="bg-lightGray-700 py-12 text-darkBlue-900 dark:bg-darkBlue-700 dark:text-lightGray-700 md:py-8">
			<div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between">
				<h1 className="text-[20px] font-bold md:text-[30px]">
					<Link to="/">Where in the World?</Link>
				</h1>
				<button
					type="button"
					className="flex items-center gap-2 rounded-lg border-2 border-darkBlue-900 p-2 capitalize dark:border-lightGray-700"
					onClick={setDark}
				>
					{dark ? <DarkTheme /> : <LightTheme />}
				</button>
			</div>
		</header>
	);
}

export default Header;
