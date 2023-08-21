import { Dispatch, SetStateAction } from "react";
import { getTournaments } from "../services/requests";
import { useQuery } from "@tanstack/react-query";

type Props = {
	tournaments: any;
	setSelectedTournament: Dispatch<SetStateAction<number>>;
	TrnId: number;
};

const Tournaments = ({ tournaments, TrnId, setSelectedTournament }: Props) => {
	const { data, error, isLoading } = useQuery(["tournaments", TrnId], () =>
		getTournaments(TrnId)
	);

	const formatDate = (isoDateString: string) => {
		const options = { day: "numeric", month: "long" };
		const formattedDate = new Date(isoDateString).toLocaleDateString(
			"en-US",
			options
		);
		return formattedDate;
	};

	const formatTime = (isoDateString: string) => {
		const options = { hour: "2-digit", minute: "2-digit" };
		const formattedTime = new Date(isoDateString).toLocaleTimeString(
			"en-US",
			options
		);
		return formattedTime;
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}
	return (
		<>
			<div className="absolute left-[188px] top-3 flex gap-3">
				<select className="bg-[#272727] text-white">
					{tournaments?.map((tournament: any, index: number) => (
						<option
							key={tournament?.Id}
							onClick={() => setSelectedTournament(tournament.id)}
							className="cursor-pointer"
						>
							{tournament.N}
						</option>
					))}
				</select>
			</div>

			<div className="absolute text-sm left-[188px] top-20 h-screen overflow-y-auto z-8 text-white">
				<div className="grid grid-cols- gap-x-16">
					{data?.Matches?.map((match: any, index: number) => (
						<div
							key={index}
							className="flex gap-7 items-center bg-[#272727] p-3 border-b-2 border-black"
						>
							<div className="flex flex-col gap-1">
								<span>{formatDate(match?.Md)}</span>
								<span>{formatTime(match?.Md)}</span>
							</div>
							<div className="flex gap-3">
								<span>{match?.An}</span>
								<span>-</span>
								<span>{match?.Hn}</span>
							</div>
							<div>
								<div className="flex gap-4">
									{Object.values(match.Markets).map(
										(item: any, index: number) => {
											return (
												<div className="flex gap-1">
													<p
														key={index}
														className="bg-gradient-to-t p-3 py-1 text-black from-[#F1F1F1] to-[#9E9E9E] scale-[0.8]"
													>
														{item?.at(0)?.Name}
													</p>
													<p
														key={index}
														className="bg-gradient-to-t p-3 py-1 from-[#54B052] to-[#287226] scale-[0.8]"
													>
														{item?.at(0)?.OddsValue}
													</p>
												</div>
											);
										}
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Tournaments;
