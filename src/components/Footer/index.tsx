import { Github, Twitter, Linkedin } from "./Socials";

function Footer() {
	return (
		<footer className="mt-auto bg-lightGray-800 py-4 text-darkBlue-900 dark:bg-darkBlue-800 dark:text-lightGray-800">
			<div className="mx-auto flex w-11/12 max-w-7xl items-center justify-center">
				<p className="flex items-center gap-2">
					Coded by Victoria | <Github /> | <Linkedin /> | <Twitter />
				</p>
			</div>
		</footer>
	);
}

export default Footer;
