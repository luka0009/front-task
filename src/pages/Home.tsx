import { useQuery } from "@tanstack/react-query";
import { getPreSports } from "../services/requests";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSportsData, setSports } from "../store/features/sport/sportSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SportsList from "../components/SportsList";
import Countries from "../components/Countries";

const Home = () => {
	// const { data, refetch } = useQuery(["preSports"], getPreSports);
	// const sportsData = useAppSelector((state) => state.sport);

	// const dispatch = useAppDispatch();
	// useEffect(() => {
	// 	dispatch(fetchSportsData());
	// }, [dispatch]);

	// console.log(sportsData.sports);

	// if (sportsData.loading) {
	// 	return <div>Loading...</div>;
	// }

	// if (!sportsData.loading && sportsData.error) {
	// 	return <div>error: {sportsData.error}</div>;
	// }

	return (
		<div className="">
			<div>
				{/* {sportsData?.sports?.map((item: any, index: any) => (
					<div key={index}>
						<Link to={`/${item.N}`}>{item.N}</Link>
					</div>
				))} */}
				<Countries />
				{/* <SportsList sports={sportsData?.sports} /> */}
			</div>
		</div>
	);
};

export default Home;
