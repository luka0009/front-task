import { Dispatch, SetStateAction } from "react";

type Props = {
	countries: any;
	setSelectedCountry: Dispatch<SetStateAction<string>>;
};

const Countries = ({ countries, setSelectedCountry }: Props) => {
	return (
		<>
			<div className="p-3 max-h-[400px] overflow-y-scroll w-[200px]">
				{countries?.map((country: any, index: number) => (
					<div key={index} onClick={() => setSelectedCountry(country.N)} className="cursor-pointer">{country.N}</div>
				))}
			</div>
		</>
	);
};

export default Countries;
