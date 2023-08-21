const SportsList = ({ sports, setSelectedSport, selectedSport }: any) => {
	return (
		<div className="fixed bottom-0 w-full items-center justify-center flex gap-8 border-[2px] border-[#22B14C] bg-black text-white z-99 p-1 pb-5 py-5">
			{sports?.map((sport: any, index: number) => (
				<div
					className="cursor-pointer"
					key={index}
					onClick={() => setSelectedSport(sport.N)}
				>
					<span
						className={`bg-[#151515] p-3 ${
							selectedSport === sport?.N && "bg-[#54B052]"
						}`}
					>
						{sport?.N}
					</span>
				</div>
			))}
		</div>
	);
};

export default SportsList;
