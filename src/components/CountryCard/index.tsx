function CountryCard({
	alphaCode,
	name,
	flags,
	alt,
	population,
	region,
	countryCapital,
}: CountryCardProps) {
	return (
		<>
			<article className="flex flex-col overflow-hidden rounded-lg bg-lightGray-800 shadow-lg shadow-gray-600 duration-300 ease-in-out hover:scale-110 dark:bg-darkBlue-700 dark:shadow-gray-600 lg:basis-72">
				<img src={flags} alt={alt} className="object-fit h-[180px] w-full" />
				<div className="flex flex-col gap-4 p-3">
					<h2 className="text-lg font-extrabold text-darkBlue-900 dark:text-lightGray-800">
						{name}
					</h2>
					<p>Population: {population.toLocaleString()}</p>
					<p>Region: {region}</p>
					<p>Capital: {countryCapital}</p>
				</div>
			</article>
		</>
	);
}

export default CountryCard;
