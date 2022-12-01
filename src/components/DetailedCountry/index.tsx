import { useParams } from "react-router-dom";
import { useCountriesContext } from "../../contexts/CountriesContext";
import useFetchCountry from "../../hooks/useFetchCountry";
import Paragraph from "../Paragraph";
import BorderBtn from "./BorderBtn";
import Flag from "./Flag";
import ParaGroup from "./ParaGroup";

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
						className="flex flex-col justify-between gap-6 md:flex-row md:gap-14"
					>
						<Flag src={flags.png} alt={`Flag of ${name.common}`} />
						<div className="flex flex-1 flex-col gap-8">
							<h2 className="text-3xl font-bold">{name.common}</h2>
							<section className="flex flex-col gap-8 md:flex-row">
								<ParaGroup>
									<Paragraph
										title="population"
										content={population.toLocaleString()}
									/>
									<Paragraph title="region" content={region} />
									<Paragraph title="sub region" content={subregion || "N/A"} />
									<Paragraph title="capital" content={capital || "N/A"} />
								</ParaGroup>
								<ParaGroup>
									<Paragraph
										title="top level domain"
										content={Object.values(tld)
											.map((domain) => domain)
											.join(" | ")}
									/>
									<Paragraph
										title="currencies"
										content={
											currencies
												? Object.values(currencies)
														.map((c) => c.name)
														.join(", ")
												: "N/A"
										}
									/>
									<Paragraph
										title="languages"
										content={
											languages
												? Object.values(languages)
														.map((l) => l)
														.join(", ")
												: "N/A"
										}
									/>
								</ParaGroup>
							</section>
							<section>
								<h3 className="mb-2 text-2xl font-bold capitalize">borders:</h3>
								<div className="flex flex-wrap gap-5">
									{borders ? (
										borders.map((border) => (
											<BorderBtn
												key={border}
												to={`/country/${border}`}
												borderName={getBorderName(border)}
											/>
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
