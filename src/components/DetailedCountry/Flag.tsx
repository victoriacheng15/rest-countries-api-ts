function Flag({ src, alt }: FlagProps) {
	return (
		<img src={src} alt={alt} className="h-full max-h-72 w-full max-w-xl" />
	);
}

export default Flag;
