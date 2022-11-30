import { useParams, Link } from "react-router-dom";
import { useCountriesContext } from "../../contexts/CountriesContext";
import useFetchCountry from "../../hooks/useFetchCountry";
import Paragraph from "../Paragraph";

function DetailedCountry() {
	const { code } = useParams();
	const { country } = useFetchCountry(code);
	const { countries } = useCountriesContext();

	const getBorderName = (border: string) => {
		return countries
			.filter(({ cca3 }) => cca3.includes(border))
			.map(({ name }) => name.common)[0];
	};

	return (
		<>
			{country.map(
				({
					flags,
					name,
					population,
					region,
					subregion,
					capital,
					tld,
					currencies,
					languages,
					borders,
				}) => (
					<section
						key={name.common}
						className="flex flex-col gap-6 md:flex-row md:gap-16"
					>
						<img
							src={flags.png}
							alt={`Flag of ${name.common}`}
							className="max-h-72 w-full"
						/>
						<div className="flex flex-col gap-6">
							<h2 className="text-3xl font-bold">{name.common}</h2>
							<section className="flex flex-col gap-6 md:flex-row">
								<div className="flex flex-1 flex-col gap-2">
									<Paragraph
										title="population"
										content={population.toLocaleString()}
									/>
									<Paragraph title="region" content={region} />
									<Paragraph title="sub region" content={subregion} />
									<Paragraph title="capital" content={capital} />
								</div>
								<div className="flex flex-1 flex-col gap-2">
									<Paragraph
										title="top level domain"
										content={Object.values(tld)
											.map((domain) => domain)
											.join(" | ")}
									/>
									<Paragraph
										title="currencies"
										content={Object.values(currencies)
											.map((c) => c.name)
											.join(", ")}
									/>
									<Paragraph
										title="languages"
										content={Object.values(languages)
											.map((l) => l)
											.join(", ")}
									/>
								</div>
							</section>
							<section>
								<h3 className="mb-2 text-2xl font-bold capitalize">borders:</h3>
								<div className="flex flex-wrap gap-5">
									{borders ? (
										borders.map((border) => (
											<Link
												key={border}
												to={`/country/${border}`}
												className="rounded-sm bg-lightGray-800 p-2 px-4 font-medium shadow-md shadow-darkBlue-900 duration-300 ease-in-out hover:scale-125 dark:bg-darkBlue-900 dark:shadow-lightGray-900"
											>
												{getBorderName(border)}
											</Link>
										))
									) : (
										<p>No Border Countries</p>
									)}
								</div>
							</section>
						</div>
					</section>
				),
			)}
		</>
	);
}

export default DetailedCountry;
