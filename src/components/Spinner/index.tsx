function Spinner() {
	return (
		<div className="mx-auto flex aspect-square w-40 flex-wrap items-center justify-center gap-4">
			<div className="grid aspect-square  w-full animate-spin-slow place-items-center rounded-full border-8 border-t-darkBlue-900  ">
				<div className="grid  aspect-square  w-[80%] place-items-center rounded-full border-8 border-r-darkBlue-900 ">
					<div className="aspect-square w-[60%]  rounded-full border-8 border-b-darkBlue-900  " />
				</div>
			</div>
		</div>
	);
}

export default Spinner;
