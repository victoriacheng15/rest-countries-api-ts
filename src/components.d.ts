interface ChildrenProps {
	children: React.ReactNode;
}

interface CountryCardProps extends Countries {
	name: string;
	flags: string;
}

interface DisplayPagesProps {
	displayPages: number[]
	currentPage: number
}