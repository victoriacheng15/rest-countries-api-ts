import Form from "../components/Form";
import CountryCard from "../components/CountryCard";
import { useCountriesContext } from "../contexts/CountriesContext";

function Home() {
	const { countries } = useCountriesContext();

	return (
		<>
			<Form />
			<section className="mx-auto flex max-w-[1440px] flex-wrap justify-evenly gap-10">
				{countries.map(
					({ cca2, name, flags, region, population, capital }: Countries) => (
						<CountryCard
							key={cca2}
							cca2={cca2}
							flags={flags.png}
							alt={name.official}
							name={name.official}
							population={population}
							region={region}
							capital={capital || "N/A"}
						/>
					),
				)}
			</section>
		</>
	);
}

export default Home;
