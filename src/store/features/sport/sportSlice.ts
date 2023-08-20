import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SportState {
	loading: boolean;
	error: unknown;
	sports: any;
}

const initialState: SportState = {
	sports: null,
	loading: false,
	error: "",
};

export const fetchSportsData = createAsyncThunk(
	"sport/fetchSportsData",
	async () => {
		const API_URL = "https://sportsbook-api.lasworks.com/api";
		const fetchHeaders = {
			SiteId: 1,
			Lang: "en",
			Accept: "*/*",
			"Content-Type": "application/json",
		};

		const requestData = {
			Interval: 5,
		};

		const response = await fetch(`${API_URL}/prematch/menu`, {
			headers: fetchHeaders,
			body: JSON.stringify(requestData),
			method: "POST",
		});

		const data = await response.json();
		return data.S; // Extract and return the S parameter
	}
);

export const sportSlice = createSlice({
	name: "sport",
	initialState,
	reducers: {
		setSports: (state, action) => {
			state.sports = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchSportsData.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchSportsData.fulfilled, (state, action) => {
				state.loading = false;
				state.sports = action.payload;
			})
			.addCase(fetchSportsData.rejected, (state, action) => {
				state.loading = false;
				state.sports = [];
				state.error = action.error.message;
			});
	},
});

export const { setSports } = sportSlice.actions;

export default sportSlice.reducer;
