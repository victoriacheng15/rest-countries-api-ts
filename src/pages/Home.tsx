import CountryCard from "../components/CountryCard";
import useFetchCountries from "../hooks/useFetchCountries";

function Home() {
	const { countries } = useFetchCountries();
	return (
		<>
			<section className="mx-auto flex max-w-7xl flex-wrap justify-between gap-8">
				{countries
					.slice(0, 70)
					.map(({ name, capital, flags, region, population, cca2 }: any) => (
						<CountryCard
							key={cca2}
							alphaCode={cca2}
							name={name.official}
							countryCapital={capital || "N/A"}
							region={region}
							flags={flags.png}
							alt={name.official}
							population={population}
						/>
					))}
			</section>
		</>
	);
}

export default Home;
