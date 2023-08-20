import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { fetchSportsData } from "../store/features/sport/sportSlice";

const Sport = () => {
	const { sport } = useParams();
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchSportsData());
	}, [dispatch]);

	const sportsData = useAppSelector((state) => state.sport);

	const matchedSport = sportsData?.sports?.find(
		(item: any) => item?.N === sport
	);

	console.log(matchedSport?.Ct);
	const countries = matchedSport?.Ct;

	console.log(countries);

	if (sportsData.loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{countries?.map((item) => (
				<div>{item.N}</div>
			))}
		</div>
	);
};

export default Sport;
