import { renderHook, waitFor } from "@testing-library/react";
import useFetchCountry from "../hooks/useFetchCountry";

describe("fetching single country", () => {
	it("should return a country information", async () => {
		const { result } = renderHook(() => useFetchCountry("CAN"));

		await waitFor(() => {
			return !result.current.loading;
		});

		expect(result.current.country).toBeTruthy();
	});
});
