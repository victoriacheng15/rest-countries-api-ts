interface ChildrenProps {
	children: React.ReactNode;
}

interface CountryCardProps extends Countries {
	name: string;
	flags: string;
}

interface DisplayPagesProps {
	displayPages: number[];
	currentPage: number;
}

interface ParagraphProps {
	title: string;
	content: string | any;
}

interface FlagProps {
	src: string;
	alt: string;
}

interface BorderBtnProps {
	to: string;
	borderName: string;
}
