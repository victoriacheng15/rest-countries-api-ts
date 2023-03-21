import { useCountriesContext } from "../contexts/CountriesContext";
import { usePaginationContext } from "../contexts/PaginationContext";
import Form from "../components/Form";
import CountryCard from "../components/CountryCard";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import SomethingWrong from "./SomethingWrong";

function Home() {
	const { currentList } = usePaginationContext();
	const { loading, error } = useCountriesContext();

	return (
		<>
			<Form />
			<section className="mx-auto mb-12 flex max-w-[1440px] flex-wrap justify-evenly gap-10">
				{loading && <Spinner />}
				{error && <SomethingWrong />}
				{currentList.map(
					({ cca3, name, flags, region, population, capital }: Countries) => (
						<CountryCard
							key={cca3}
							cca3={cca3}
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
