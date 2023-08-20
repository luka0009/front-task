const SportsList = ({ sports, setSelectedSport }: any) => {
	const sportsList = sports;

	console.log("sportsList", sportsList);
	return (
		<div className="absolute flex gap-3 left-[200px] bottom-3">
			{sportsList?.map((sport: any, index: number) => (
				<div className="cursor-pointer" key={index} onClick={() => setSelectedSport(sport.N)}>
					{sport.N}
				</div>
			))}
		</div>
	);
};

export default SportsList;
