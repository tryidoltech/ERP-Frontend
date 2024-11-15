import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import Hurricane from "../themes/Hurricane";
import Ravage from "../themes/Ravage";
import Echo from "../themes/Echo";
import Hook from "../themes/Hook";
import Razor from "../themes/Razor";
import Havoc from "../themes/Havoc";
import Dagger from "../themes/Dagger";
import Shuriken from "../themes/Shuriken";
import Raze from "../themes/Raze";
import Exort from "../themes/Exort";
import Viper from "../themes/Viper";

export const themes = [
  {
    name: "echo",
    component: Echo,
  },
  {
    name: "hurricane",
    component: Hurricane,
  },
  {
    name: "ravage",
    component: Ravage,
  },
  {
    name: "hook",
    component: Hook,
  },
  {
    name: "razor",
    component: Razor,
  },
  {
    name: "havoc",
    component: Havoc,
  },
  {
    name: "dagger",
    component: Dagger,
  },
  {
    name: "shuriken",
    component: Shuriken,
  },
  {
    name: "raze",
    component: Raze,
  },
  {
    name: "exort",
    component: Exort,
  },
  {
    name: "viper",
    component: Viper,
  },
] as const;

export type Themes = (typeof themes)[number];

interface ThemeState {
  value: Themes["name"];
}

export const getTheme = (search?: Themes["name"]) => {
  const theme = search === undefined ? localStorage.getItem("theme") : search;
  return (
    themes.filter((item, key) => {
      return item.name === theme;
    })[0] || themes[0]
  );
};

const initialState: ThemeState = {
  value:
    localStorage.getItem("theme") === null ? themes[0].name : getTheme().name,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Themes["name"]>) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "echo");
  }

  return state.theme.value;
};

export default themeSlice.reducer;
