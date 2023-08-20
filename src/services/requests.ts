import axios from "axios";

const API_URL = "https://sportsbook-api.lasworks.com/api";

/**
 * NOTE
 * You must send the following header parameters in every xhr request
 */

const fetchHeaders = {
	SiteId: 1,
	Lang: "en",
	Accept: "*/*",
	"Content-Type": "application/json",
};

export const getPreSports = async () => {
	try {
		const requestData = {
			Interval: 5,
		};

		const config = {
			headers: fetchHeaders,
		};

		const response = await axios.post(
			`${API_URL}/prematch/menu`,
			requestData,
			config
		);

		if (response.status < 200 || response.status >= 300) {
			throw new Error("Network response was not ok");
		}

		return response.data;
	} catch (error: any) {
		if (error.response && error.response.data.message) {
			throw new Error(error.response.data.message);
		}
		throw new Error(error.message);
	}
};

export const getTournaments = async (TrnId: number) => {
	try {
		const requestData = {
			Interval: 5,
			MarketId: null,
			Mobile: true,
			TournamentId: TrnId,
		};

		const config = {
			headers: fetchHeaders,
		};

		const response = await axios.post(
			`${API_URL}/prematch/tournament`,
			requestData,
			config
		);

		if (response.status < 200 || response.status >= 300) {
			throw new Error("Network response was not ok");
		}

		return response.data;
	} catch (error: any) {
		if (error.response && error.response.data.message) {
			throw new Error(error.response.data.message);
		}
		throw new Error(error.message);
	}
};

export const getBetslip = async () => {
	try {
		const requestData = {
			Id: 186227060, // OutcomeId
			Ticket: [], // Tickets in your store
			Type: "O",
		};

		const config = {
			headers: fetchHeaders,
		};

		const response = await axios.post(
			`${API_URL}/betslip`,
			requestData,
			config
		);

		if (response.status < 200 || response.status >= 300) {
			throw new Error("Network response was not ok");
		}

		return response.data;
	} catch (error: any) {
		if (error.response && error.response.data.message) {
			throw new Error(error.response.data.message);
		}
		throw new Error(error.message);
	}
};
