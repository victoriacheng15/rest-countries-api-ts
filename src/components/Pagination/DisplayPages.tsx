function DisplayPages({ displayPages, currentPage }: DisplayPagesProps) {
	return (
		<ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
			{displayPages.map((num) =>
				currentPage === num ? (
					<li
						key={num}
						className="page-box border-darkBlue-700 dark:border-lightGray-700 dark:text-lightGray-800"
						aria-current="true"
					>
						{num}
					</li>
				) : (
					<li
						key={num}
						className="page-box rounded-full border-lightGray-900  dark:border-lightGray-900 dark:text-lightGray-700"
					>
						{num}
					</li>
				),
			)}
		</ul>
	);
}

export default DisplayPages;
