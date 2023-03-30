function Flag({ src, alt }: FlagProps) {
	return (
		<div className="max-w-full basis-[55%]">
			<img
				src={src}
				alt={alt}
				width={320}
				height={209}
				className="w-full object-cover"
			/>
		</div>
	);
}

export default Flag;
