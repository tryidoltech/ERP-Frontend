import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import {
  setColorScheme,
  colorSchemes,
  ColorSchemes,
} from "@/stores/colorSchemeSlice";
import { useLocation } from "react-router-dom";
import { selectTheme, setTheme, themes, Themes } from "@/stores/themeSlice";
import { selectDarkMode, setDarkMode } from "@/stores/darkModeSlice";
import { setPageLoader } from "@/stores/pageLoaderSlice";
import { Slideover } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import { useState, useEffect } from "react";
import clsx from "clsx";

function Main() {
  const dispatch = useAppDispatch();
  const activeColorScheme = useAppSelector(selectColorScheme);
  const activeDarkMode = useAppSelector(selectDarkMode);
  const activeTheme = useAppSelector(selectTheme);
  const [tempActiveColorScheme, setTempActiveColorScheme] =
    useState(activeColorScheme);
  const [tempActiveTheme, setTempActiveTheme] = useState(activeTheme);
  const [themeSwitcherSlideover, setThemeSwitcherSlideover] = useState(false);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const setColorSchemeClass = () => {
    const el = document.querySelectorAll("html")[0];
    el.setAttribute("class", activeColorScheme);
  };

  const switchColor = (colorScheme: ColorSchemes) => {
    dispatch(setPageLoader(true));
    setTempActiveColorScheme(colorScheme);
    setThemeSwitcherSlideover(false);

    setTimeout(() => {
      dispatch(setColorScheme(colorScheme));

      setTimeout(() => {
        dispatch(setPageLoader(false));
      }, 500);
    }, 500);
    localStorage.setItem("colorScheme", colorScheme);
    setColorSchemeClass();
  };

  setColorSchemeClass();

  const setDarkModeClass = () => {
    const el = document.querySelectorAll("html")[0];
    activeDarkMode ? el.classList.add("dark") : el.classList.remove("dark");
  };
  const switchDarkMode = (darkMode: boolean) => {
    dispatch(setDarkMode(darkMode));
    setDarkModeClass();
  };
  setDarkModeClass();

  const switchTheme = (theme: Themes["name"]) => {
    dispatch(setPageLoader(true));
    setTempActiveTheme(theme);
    setThemeSwitcherSlideover(false);

    setTimeout(() => {
      dispatch(setTheme(theme));

      setTimeout(() => {
        dispatch(setPageLoader(false));
      }, 500);
    }, 500);
    localStorage.setItem("theme", theme);
  };

  const imageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/themes/*.{jpg,jpeg,png,svg}", { eager: true });

  useEffect(() => {
    if (queryParams.get("theme")) {
      const selectedTheme = themes.find(
        (theme) => theme.name === queryParams.get("theme")
      );

      if (selectedTheme) {
        switchTheme(selectedTheme.name);
      }
    }
  }, []);

  return (
    <div>
      <Slideover
        open={themeSwitcherSlideover}
        onClose={() => {
          setThemeSwitcherSlideover(false);
        }}
      >
        <Slideover.Panel className="w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]">
          <a
            href=""
            className="focus:outline-none hover:bg-white/10 bg-white/5 transition-all hover:rotate-180 absolute inset-y-0 left-0 right-auto flex items-center justify-center my-auto -ml-[60px] sm:-ml-[105px] border rounded-full text-white/90 w-8 h-8 sm:w-14 sm:h-14 border-white/90 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              setThemeSwitcherSlideover(false);
            }}
          >
            <Lucide className="w-3 h-3 sm:w-8 sm:h-8 stroke-[1]" icon="X" />
          </a>
          <Slideover.Description className="p-0">
            <div className="flex flex-col">
              <div className="px-8 pt-6 pb-8">
                <div className="text-base font-medium">Templates</div>
                <div className="text-slate-500 mt-0.5">
                  Choose your templates
                </div>
                <div className="grid grid-cols-2 mt-5 gap-y-3.5 gap-x-5">
                  {themes.map((theme, themeKey) => (
                    <div key={themeKey}>
                      <div
                        onClick={() => switchTheme(theme.name)}
                        className={clsx([
                          "h-28 cursor-pointer bg-slate-50 box p-1",
                          tempActiveTheme == theme.name &&
                            "border-2 border-theme-1/60",
                        ])}
                      >
                        <div className="w-full h-full overflow-hidden rounded-md">
                          {imageAssets[
                            `/src/assets/images/themes/${theme.name}.png`
                          ] !== undefined && (
                            <img
                              className="w-full h-full"
                              src={
                                imageAssets[
                                  `/src/assets/images/themes/${theme.name}.png`
                                ].default
                              }
                            />
                          )}
                        </div>
                      </div>
                      <div className="mt-2.5 capitalize text-center text-xs">
                        {theme.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-b border-dashed"></div>
              <div className="px-8 pt-6 pb-8">
                <div className="text-base font-medium">Color Schemes</div>
                <div className="text-slate-500 mt-0.5">
                  Choose your color schemes
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3.5 mt-5">
                  {colorSchemes.map((colorScheme, colorKey) => (
                    <div key={colorKey}>
                      <div
                        onClick={() => switchColor(colorScheme)}
                        className={clsx([
                          "h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80",
                          tempActiveColorScheme == colorScheme &&
                            "border-2 border-theme-1/60",
                        ])}
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="flex items-center h-full gap-1 -mx-2">
                            <div
                              className={clsx([
                                "w-1/2 h-[140%] bg-theme-1 rotate-12",
                                colorScheme,
                              ])}
                            ></div>
                            <div
                              className={clsx([
                                "w-1/2 h-[140%] bg-theme-2 rotate-12",
                                colorScheme,
                              ])}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-b border-dashed"></div>
              <div className="px-8 pt-6 pb-8">
                <div className="text-base font-medium">Appearance</div>
                <div className="text-slate-500 mt-0.5">
                  Choose your appearance
                </div>
                <div className="grid grid-cols-3 gap-4 mt-5">
                  <div>
                    <div
                      onClick={() => switchDarkMode(false)}
                      className={clsx([
                        "h-12 p-1 rounded-full cursor-pointer box",
                        "[&.active]:border-2 [&.active]:border-theme-1/60",
                        !activeDarkMode ? "active" : "",
                      ])}
                    >
                      <div className="w-full h-full rounded-full bg-slate-200"></div>
                    </div>
                    <div className="mt-2.5 capitalize text-center text-xs">
                      Light Mode
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={() => switchDarkMode(true)}
                      className={clsx([
                        "h-12 p-1 rounded-full cursor-pointer box",
                        "[&.active]:border-2 [&.active]:border-theme-1/60",
                        activeDarkMode ? "active" : "",
                      ])}
                    >
                      <div className="w-full h-full rounded-full bg-slate-900"></div>
                    </div>
                    <div className="mt-2.5 capitalize text-center text-xs">
                      Dark Mode
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slideover.Description>
        </Slideover.Panel>
      </Slideover>
      <div
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          setThemeSwitcherSlideover(true);
        }}
        className="fixed bottom-0 right-0 z-50 flex items-center justify-center mb-5 mr-5 text-white rounded-full shadow-lg cursor-pointer w-14 h-14 bg-theme-1"
      >
        <Lucide className="w-5 h-5 animate-spin" icon="Settings" />
      </div>
    </div>
  );
}

export default Main;
