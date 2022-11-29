import Form from "../components/Form";
import CountryCard from "../components/CountryCard";
import { useCountriesContext } from "../contexts/CountriesContext";
import { usePaginationContext } from "../contexts/PaginationContext";
import Pagination from "../components/Pagination";

function Home() {
	const { countries } = useCountriesContext();
	const { currentList } = usePaginationContext();

	return (
		<>
			<Form />
			<section className="mx-auto mb-12 flex max-w-[1440px] flex-wrap justify-evenly gap-10">
				{currentList.map(
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
			<Pagination />
		</>
	);
}

export default Home;
