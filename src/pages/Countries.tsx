import { Form, CountryCard, Pagination } from "../components";
import { usePaginationContext } from "../contexts/PaginationContext";

function Home() {
	const { currentList } = usePaginationContext();

	return (
		<>
			<Form />
			<section className="mx-auto mb-12 flex max-w-[1440px] flex-wrap justify-evenly gap-10">
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
