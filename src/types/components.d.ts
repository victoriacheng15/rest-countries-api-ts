interface ChildrenProp {
	children: React.ReactNode;
}

interface CountryCardProps extends Countries {
	name: string;
	flags: string;
}

type DisplayPagesProps = Pick<
	PaginationContextType,
	"displayPages" | "currentPage"
>;

interface ParagraphProps {
	title: string;
	content: string;
}

interface FlagProps {
	src: string;
	alt: string;
}

interface BorderBtnProps {
	to: string;
	borderName: string;
}
