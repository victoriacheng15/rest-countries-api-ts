function ErrorPage() {
	return (
		<section className="grid place-items-center gap-4 text-center">
			<h2 className="text-4xl font-bold">404 Error!</h2>
			<h3 className="text-2xl font-bold">Whoops! Something went wrong.</h3>
			<p className="text-xl font-medium">
				Feel free to let me know by raising an issue at this{" "}
				<a
					href="https://github.com/victoriacheng15/rest-countries-api-ts/issues"
					target="_blank"
					rel="noreferrer"
					className="underline"
				>
					link
				</a>
				. Otherwise, let's go back home!
			</p>
		</section>
	);
}

export default ErrorPage;
