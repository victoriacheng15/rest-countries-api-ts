import Form from "../components/Form";
import CountryCard from "../components/CountryCard";
import useFetchCountries from "../hooks/useFetchCountries";

function Home() {
	const { countries } = useFetchCountries();

	return (
		<>
			<Form />
			<section className="mx-auto flex max-w-[1440px] flex-wrap justify-evenly gap-10">
				{countries
					.slice(0, 70)
					.map(
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
