function Spinner() {
	return (
		<div className="w-40 aspect-square flex items-center justify-center mx-auto gap-4 flex-wrap">
			<div className="border-t-darkBlue-900 border-8  rounded-full w-full aspect-square animate-spin-slow grid place-items-center  ">
				<div className="border-r-darkBlue-900  border-8  rounded-full w-[80%] aspect-square grid place-items-center ">
					<div className="border-b-darkBlue-900 border-8  rounded-full w-[60%] aspect-square  " />
				</div>
			</div>
		</div>
	);
}

export default Spinner;
