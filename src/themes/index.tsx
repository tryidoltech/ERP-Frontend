import { selectTheme, getTheme } from "@/stores/themeSlice";
import { selectPageLoader } from "@/stores/pageLoaderSlice";
import { useAppSelector } from "@/stores/hooks";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Transition } from "@headlessui/react";

function Main() {
  const theme = useAppSelector(selectTheme);
  const pageLoader = useAppSelector(selectPageLoader);
  const Component = getTheme(theme).component;

  return (
    <div>
      <Transition
        show={!pageLoader}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Component />
      </Transition>
      <Transition
        className="fixed inset-0 dark:bg-darkmode-600"
        show={pageLoader}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <svg
          className="fixed inset-0 w-10 h-10 m-auto text-theme-1 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </Transition>
      <ThemeSwitcher />
    </div>
  );
}

export default Main;
