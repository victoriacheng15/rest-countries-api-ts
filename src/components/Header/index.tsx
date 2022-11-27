import { DarkTheme, LightTheme } from './Theme';


function Header() {
	return (
		<header className="bg-lightGray-700 py-12 text-darkBlue-900 dark:bg-darkBlue-700 dark:text-lightGray-700 md:py-8">
			<h1 className="text-[20px] font-bold md:text-[30px]">
				Where in the World?
			</h1>
      <button type="button">Light Mode</button>
		</header>
	);
}

export default Header;
