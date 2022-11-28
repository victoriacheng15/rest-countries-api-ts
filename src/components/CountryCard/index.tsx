function CountryCard({
	cca2,
	name,
	flags,
	alt,
	population,
	region,
	capital,
}: CountryCardProps) {
	return (
		<>
			<article className="flex max-w-xs flex-1 basis-[265px] flex-col overflow-hidden rounded-lg bg-lightGray-800 shadow-lg shadow-gray-600 duration-300 ease-in-out hover:scale-110 dark:bg-darkBlue-700 dark:shadow-gray-600 lg:basis-72">
				<img src={flags} alt={alt} className="object-fit h-[180px] w-full" />
				<div className="flex flex-col gap-4 p-3">
					<h2 className="text-lg font-extrabold text-darkBlue-900 dark:text-lightGray-800">
						{name}
					</h2>
					<p>
						<span className="font-bold capitalize">Population:</span>{" "}
						{population.toLocaleString()}
					</p>
					<p>
						<span className="font-bold capitalize">Region:</span> {region}
					</p>
					<p>
						<span className="font-bold capitalize">Capital:</span> {capital}
					</p>
				</div>
			</article>
		</>
	);
}

export default CountryCard;
