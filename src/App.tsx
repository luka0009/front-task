import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sport from "./pages/Sport";
import SportsList from "./components/SportsList";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { useEffect, useState } from "react";
import { fetchSportsData } from "./store/features/sport/sportSlice";
import Countries from "./components/Countries";
import Tournaments from "./components/Tournaments";

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchSportsData());
	}, [dispatch]);

	const sportsData = useAppSelector((state) => state.sport);
	console.log("sportsData", sportsData?.sports);
	const [selectedSport, setSelectedSport] = useState<any>("Football");
	const [selectedCountry, setSelectedCountry] = useState<any>("England");
	const [selectedTournament, setSelectedTournament] = useState(selectedCountry);

	console.log(sportsData.sports);

	if (sportsData.loading) {
		return <div>Loading...</div>;
	}

	if (!sportsData.loading && sportsData.error) {
		return <div>error: {sportsData.error}</div>;
	}

	const matchedSport = sportsData?.sports?.find(
		(item: any) => item.N === selectedSport
	);
	const countries = matchedSport?.Ct;

	const matchedCountry = countries?.find(
		(item: any) => item.N === selectedCountry
	);

	const tournaments = matchedCountry?.Trn;

	console.log("tournaments", matchedCountry?.Trn);
	const tournament = matchedCountry?.Trn?.at(0);
	console.log("selected", selectedSport);

	return (
		<>
			<Countries
				countries={countries}
				setSelectedCountry={setSelectedCountry}
				tournaments={tournaments}
				setSelectedTournament={setSelectedTournament}
			/>
			<Tournaments
				tournaments={tournaments}
				TrnId={tournament?.Id}
				setSelectedTournament={setSelectedTournament}
			/>
			<SportsList
				sports={sportsData?.sports}
				setSelectedSport={setSelectedSport}
				selectedSport={selectedSport}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:sport" element={<Sport />} />
			</Routes>
		</>
	);
}

export default App;
