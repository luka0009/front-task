import { Dispatch, SetStateAction, useState } from "react";

const Countries = ({
	countries,
	setSelectedCountry,
	tournaments,
	setSelectedTournament,
	selectedCountry,
}: any) => {
	const [show, setShow] = useState(false);
	return (
		<>
			<div className="flex flex-col bg-black h-screen">
				<h1 className="text-green-400">Countries</h1>
				<div className="p-3 max-h-screen overflow-y-auto mr-10 w-[180px] bg-black text-white">
					{countries?.map((country: any, index: number) => (
						<div
							key={index}
							onClick={() => setSelectedCountry(country.N)}
							className="cursor-pointer"
						>
							<div
								onClick={() => setShow((show) => !show)}
								className="flex justify-between"
							>
								<span>{country.N}</span>
								<span>{show ? "<" : ">"}</span>
							</div>
							{show && country?.N === selectedCountry && (
								<div>
									{tournaments?.map((tournament: any, index: number) => (
										<span
											key={tournament?.Id}
											onClick={() => setSelectedTournament(tournament.id)}
											className="cursor-pointer text-green-500 text-sm"
										>
											{tournament.N}
										</span>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Countries;
