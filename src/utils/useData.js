import { useEffect } from "react";
import { useReducer } from "react";
import dataReducer from "../components/reducers/dataReducer";

export default function useData(dataService) {
	const [data, dispatchData] = useReducer(dataReducer, {});

	useEffect(() => {
		let ignore = false;

		async function fetchData() {
			const jsonData = await dataService.getData();
			if (jsonData && !ignore) {
				dispatchData({
					type: "data_updated",
					data: jsonData
				});
			}
		}
		fetchData();
		return () => { ignore = true; };
	}, []);

	return [data, dispatchData];
}