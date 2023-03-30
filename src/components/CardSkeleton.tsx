import Spinner from "./Spinner";

function CardSkeleton() {
	return (
		<article className="w-[300px] h-[350px] overflow-hidden rounded-lg bg-lightGray-800 shadow-lg shadow-gray-600 dark:bg-darkBlue-700 dark:shadow-gray-600 lg:basis-72">
			<div className="grid place-items-center h-full">
				<Spinner />
			</div>
		</article>
	);
}

export default CardSkeleton;
