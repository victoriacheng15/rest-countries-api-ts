function DisplayPages({ displayPages, currentPage }: DisplayPagesProps) {
	return (
		<div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
			{displayPages.map((num) =>
				currentPage === num ? (
					<span
						key={num}
						className="page-box border-darkBlue-700 dark:border-lightGray-700 dark:text-lightGray-800"
					>
						{num}
					</span>
				) : (
					<span
						key={num}
						className="page-box rounded-full border-lightGray-900  dark:border-lightGray-900 dark:text-lightGray-700"
					>
						{num}
					</span>
				),
			)}
		</div>
	);
}

export default DisplayPages;
