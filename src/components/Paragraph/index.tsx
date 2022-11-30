function Paragraph({ title, content }: ParagraphProps) {
	return (
		<p>
			<span className="text-lg font-bold capitalize tracking-wide">
				{title}:
			</span>{" "}
			{content}
		</p>
	);
}

export default Paragraph;
