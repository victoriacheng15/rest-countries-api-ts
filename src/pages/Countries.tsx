import { useCountriesContext } from "../contexts/CountriesContext";
import { usePaginationContext } from "../contexts/PaginationContext";
import Form from "../components/Form";
import CountryCard from "../components/CountryCard";
import Pagination from "../components/Pagination";
import SomethingWrong from "./SomethingWrong";
import CardSkeleton from "../components/CardSkeleton";

function Home() {
	const { currentList } = usePaginationContext();
	const { loading, error } = useCountriesContext();
	const skeletons = [...new Array(12).fill(1)].map((n, index) => n + index)

	return (
		<>
			<Form />
			<section className="mx-auto mb-12 max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
				{error && <SomethingWrong />}
				{loading && skeletons.map((n) => <CardSkeleton key={n} />)}
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
