import { Person } from "../models/people";
import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./states/people";
import favoritesSlice from "./states/favorites";

export interface AppStore {
	people: Person[];
	favorites: Person[];
}

export const store = configureStore<AppStore>({
	reducer: {
		people: peopleSlice,
		favorites: favoritesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
