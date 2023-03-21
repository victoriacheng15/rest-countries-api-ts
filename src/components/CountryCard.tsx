import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";

function CountryCard({
	cca3,
	name,
	flags,
	alt,
	population,
	region,
	capital,
}: CountryCardProps) {
	return (
		<>
			<Link
				className="flex h-auto max-w-xs flex-1 basis-[265px] duration-300 ease-in-out hover:scale-110"
				to={`/country/${cca3}`}
			>
				<article className="w-full overflow-hidden rounded-lg bg-lightGray-800 shadow-lg shadow-gray-600 dark:bg-darkBlue-700 dark:shadow-gray-600 lg:basis-72">
					<div className="max-w-full h-auto">
						<img
							src={flags}
							alt={alt}
							width={320}
							height={160}
							className="object-contains w-full h-full"
						/>
					</div>
					<div className="flex flex-col gap-4 p-3">
						<h2 className="text-lg font-extrabold ">{name}</h2>
						<Paragraph
							title="population"
							content={population.toLocaleString()}
						/>
						<Paragraph title="region" content={region} />
						<Paragraph title="capital" content={capital} />
					</div>
				</article>
			</Link>
		</>
	);
}

export default CountryCard;
