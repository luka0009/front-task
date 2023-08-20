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

	console.log(data?.Matches);
	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<>
			<div className="absolute left-[250px] top-12 flex gap-3">
				{tournaments?.map((tournament: any, index: number) => (
					<div
						key={index}
						onClick={() => setSelectedTournament(tournament.id)}
						className="cursor-pointer"
					>
						{tournament.N}
					</div>
				))}
			</div>

			<div className="absolute left-[250px] top-40 max-h-[300px] overflow-y-auto">
				<div className="grid grid-cols- gap-x-16">
					{data?.Matches?.map((match: any, index: number) => (
						<div key={index} className="flex gap-7 items-center">
							<div className="flex flex-col gap-1">
								<span>{formatDate(match?.Md)}</span>
								<span>{formatTime(match?.Md)}</span>
							</div>
							<div className="flex gap-3">
								<span>{match?.An}</span>
								<span>-</span>
								<span>{match?.Hn}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Tournaments;
