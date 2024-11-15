import "@/assets/css/vendors/simplebar.css";
import "@/assets/css/themes/dagger.css";
import { Transition } from "react-transition-group";
import Breadcrumb from "@/components/Base/Breadcrumb";
import { useState, useEffect, createRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { selectSideMenu } from "@/stores/sideMenuSlice";
import {
  selectCompactMenu,
  setCompactMenu as setCompactMenuStore,
} from "@/stores/compactMenuSlice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { FormattedMenu, linkTo, nestedMenu, enter, leave } from "./side-menu";
import Lucide from "@/components/Base/Lucide";
import users from "@/fakers/users";
import clsx from "clsx";
import SimpleBar from "simplebar";
import { Menu } from "@/components/Base/Headless";
import QuickSearch from "@/components/QuickSearch";
import SwitchAccount from "@/components/SwitchAccount";
import NotificationsPanel from "@/components/NotificationsPanel";
import ActivitiesPanel from "@/components/ActivitiesPanel";

function Main() {
  const dispatch = useAppDispatch();
  const compactMenu = useAppSelector(selectCompactMenu);
  const setCompactMenu = (val: boolean) => {
    localStorage.setItem("compactMenu", val.toString());
    dispatch(setCompactMenuStore(val));
  };
  const [quickSearch, setQuickSearch] = useState(false);
  const [switchAccount, setSwitchAccount] = useState(false);
  const [notificationsPanel, setNotificationsPanel] = useState(false);
  const [activitiesPanel, setActivitiesPanel] = useState(false);
  const [compactMenuOnHover, setCompactMenuOnHover] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [formattedMenu, setFormattedMenu] = useState<
    Array<FormattedMenu | string>
  >([]);
  const sideMenuStore = useAppSelector(selectSideMenu);
  const sideMenu = () => nestedMenu(sideMenuStore, location);
  const scrollableRef = createRef<HTMLDivElement>();

  const toggleCompactMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setCompactMenu(!compactMenu);
  };

  const compactLayout = () => {
    if (window.innerWidth <= 1600) {
      setCompactMenu(true);
    }
  };

  const requestFullscreen = () => {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    }
  };

  useEffect(() => {
    if (scrollableRef.current) {
      new SimpleBar(scrollableRef.current);
    }

    setFormattedMenu(sideMenu());
    compactLayout();

    window.onresize = () => {
      compactLayout();
    };
  }, [sideMenuStore, location]);

  return (
    <div
      className={clsx([
        "dagger",
        "before:content-[''] before:bg-gradient-to-b before:from-slate-100 before:to-slate-50 before:fixed before:inset-0 dark:before:from-darkmode-800 dark:before:to-darkmode-900",
      ])}
    >
      <div
        className={clsx([
          "fixed top-0 left-0 z-50 h-screen side-menu group",
          { "side-menu--collapsed": compactMenu },
          { "side-menu--on-hover": compactMenuOnHover },
        ])}
      >
        <div className="fixed top-0 inset-x-0 z-10 h-[65px] box border-x-0 border-t-0 rounded-none flex">
          <div
            className={clsx([
              "bg-white flex-none flex items-center z-10 px-5 h-full xl:w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000001f] dark:bg-darkmode-600",
              "before:content-[''] before:hidden before:xl:block before:absolute before:right-0 before:border-r before:border-dashed before:border-slate-300/70 before:h-4/6 before:group-[.side-menu--collapsed.side-menu--on-hover]:xl:border-solid before:group-[.side-menu--collapsed.side-menu--on-hover]:xl:h-full",
            ])}
            onMouseOver={(event) => {
              event.preventDefault();
              setCompactMenuOnHover(true);
            }}
            onMouseLeave={(event) => {
              event.preventDefault();
              setCompactMenuOnHover(false);
            }}
          >
            <a
              href=""
              className="hidden xl:flex items-center transition-[margin] group-[.side-menu--collapsed]:xl:ml-2 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0"
            >
              <div className="flex items-center justify-center w-[34px] rounded-lg h-[34px] bg-gradient-to-r from-theme-1 to-theme-2 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                <div className="w-[16px] h-[16px] relative -rotate-45 [&_div]:bg-white">
                  <div className="absolute w-[21%] left-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                  <div className="absolute w-[21%] inset-0 m-auto h-[120%] rounded-full"></div>
                  <div className="absolute w-[21%] right-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                </div>
              </div>
              <div className="ml-3.5 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 transition-opacity font-medium">
                DAGGER
              </div>
            </a>
            <a
              href=""
              onClick={toggleCompactMenu}
              className="hidden group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed]:xl:opacity-0 transition-[opacity,transform] 3xl:flex items-center justify-center w-[20px] h-[20px] ml-auto border rounded-full border-slate-600/40 hover:bg-slate-600/5"
            >
              <Lucide icon="ArrowLeft" className="w-3.5 h-3.5 stroke-[1.3]" />
            </a>
            <div className="flex items-center gap-1 xl:hidden">
              <a
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setActiveMobileMenu(true);
                }}
                className="p-2 rounded-full hover:bg-slate-100"
              >
                <Lucide icon="AlignJustify" className="w-[18px] h-[18px]" />
              </a>
              <a
                href=""
                className="p-2 rounded-full hover:bg-slate-100"
                onClick={(e) => {
                  e.preventDefault();
                  setQuickSearch(true);
                }}
              >
                <Lucide icon="Search" className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
          <div className="absolute transition-[padding] duration-100 xl:pl-[275px] group-[.side-menu--collapsed]:xl:pl-[91px] h-full inset-x-0">
            <div className="flex items-center w-full h-full px-5">
              {/* BEGIN: Breadcrumb */}
              <Breadcrumb className="flex-1 hidden xl:block">
                <Breadcrumb.Link
                  className="dark:before:bg-chevron-white"
                  to="/"
                >
                  App
                </Breadcrumb.Link>
                <Breadcrumb.Link
                  className="dark:before:bg-chevron-white"
                  to="/"
                >
                  Dashboards
                </Breadcrumb.Link>
                <Breadcrumb.Link
                  className="dark:before:bg-chevron-white"
                  to="/"
                  active={true}
                >
                  Analytics
                </Breadcrumb.Link>
              </Breadcrumb>
              {/* END: Breadcrumb */}
              {/* BEGIN: Search */}
              <div
                className="relative justify-center flex-1 hidden xl:flex"
                onClick={() => setQuickSearch(true)}
              >
                <div className="bg-slate-50 border w-[350px] flex items-center py-2 px-3.5 rounded-[0.5rem] text-slate-400 cursor-pointer hover:bg-slate-100 transition-colors dark:bg-darkmode-800">
                  <Lucide icon="Search" className="w-[18px] h-[18px]" />
                  <div className="ml-2.5 mr-auto">Quick search...</div>
                  <div>⌘K</div>
                </div>
              </div>
              <QuickSearch
                quickSearch={quickSearch}
                setQuickSearch={setQuickSearch}
              />
              {/* END: Search */}
              {/* BEGIN: Notification & User Menu */}
              <div className="flex items-center flex-1">
                <div className="flex items-center gap-1 ml-auto">
                  <a
                    href=""
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-darkmode-400"
                    onClick={(e) => {
                      e.preventDefault();
                      setActivitiesPanel(true);
                    }}
                  >
                    <Lucide icon="LayoutGrid" className="w-[18px] h-[18px]" />
                  </a>
                  <a
                    href=""
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-darkmode-400"
                    onClick={(e) => {
                      e.preventDefault();
                      requestFullscreen();
                    }}
                  >
                    <Lucide icon="Expand" className="w-[18px] h-[18px]" />
                  </a>
                  <a
                    href=""
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-darkmode-400"
                    onClick={(e) => {
                      e.preventDefault();
                      setNotificationsPanel(true);
                    }}
                  >
                    <Lucide icon="Bell" className="w-[18px] h-[18px]" />
                  </a>
                </div>
                <Menu className="ml-5">
                  <Menu.Button className="overflow-hidden rounded-full w-[36px] h-[36px] border-[3px] border-slate-200/70 image-fit">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </Menu.Button>
                  <Menu.Items className="w-56 mt-1">
                    <Menu.Item
                      onClick={() => {
                        setSwitchAccount(true);
                      }}
                    >
                      <Lucide icon="ToggleLeft" className="w-4 h-4 mr-2" />
                      Switch Account
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item
                      onClick={() => {
                        navigate("settings?page=connected-services");
                      }}
                    >
                      <Lucide icon="Settings" className="w-4 h-4 mr-2" />
                      Connected Services
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => {
                        navigate("settings?page=email-settings");
                      }}
                    >
                      <Lucide icon="Inbox" className="w-4 h-4 mr-2" />
                      Email Settings
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => {
                        navigate("settings?page=security");
                      }}
                    >
                      <Lucide icon="Lock" className="w-4 h-4 mr-2" />
                      Reset Password
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item
                      onClick={() => {
                        navigate("settings");
                      }}
                    >
                      <Lucide icon="Users" className="w-4 h-4 mr-2" />
                      Profile Info
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => {
                        navigate("login");
                      }}
                    >
                      <Lucide icon="Power" className="w-4 h-4 mr-2" />
                      Logout
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
              <ActivitiesPanel
                activitiesPanel={activitiesPanel}
                setActivitiesPanel={setActivitiesPanel}
              />
              <NotificationsPanel
                notificationsPanel={notificationsPanel}
                setNotificationsPanel={setNotificationsPanel}
              />
              <SwitchAccount
                switchAccount={switchAccount}
                setSwitchAccount={setSwitchAccount}
              />
              {/* END: Notification & User Menu */}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-y-0 xl:top-[65px] z-10 xl:z-0"
          onMouseOver={(event) => {
            event.preventDefault();
            setCompactMenuOnHover(true);
          }}
          onMouseLeave={(event) => {
            event.preventDefault();
            setCompactMenuOnHover(false);
          }}
        >
          <div
            className={clsx([
              "box xl:ml-0 border-y-0 border-l-0 rounded-none w-[275px] duration-300 transition-[width,margin] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] relative overflow-hidden h-full flex flex-col",
              "after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:z-[-1] after:xl:hidden",
              { "ml-0 after:block": activeMobileMenu },
              { "-ml-[275px] after:hidden": !activeMobileMenu },
            ])}
          >
            <div
              className={clsx([
                "fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden",
                { flex: activeMobileMenu },
                { hidden: !activeMobileMenu },
              ])}
            >
              <a
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setActiveMobileMenu(false);
                }}
                className="mt-5 ml-5"
              >
                <Lucide icon="X" className="w-8 h-8 text-white" />
              </a>
            </div>
            <div
              ref={scrollableRef}
              className={clsx([
                "w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent",
                "[&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30",
              ])}
            >
              <ul className="scrollable">
                {/* BEGIN: First Child */}
                {formattedMenu.map((menu, menuKey) =>
                  typeof menu == "string" ? (
                    <li className="side-menu__divider" key={menuKey}>
                      {menu}
                    </li>
                  ) : (
                    <li key={menuKey}>
                      <a
                        href=""
                        className={clsx([
                          "side-menu__link",
                          { "side-menu__link--active": menu.active },
                          {
                            "side-menu__link--active-dropdown":
                              menu.activeDropdown,
                          },
                        ])}
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          linkTo(menu, navigate);
                          setFormattedMenu([...formattedMenu]);
                        }}
                      >
                        <Lucide
                          icon={menu.icon}
                          className="side-menu__link__icon"
                        />
                        <div className="side-menu__link__title">
                          {menu.title}
                        </div>
                        {menu.badge && (
                          <div className="side-menu__link__badge">
                            {menu.badge}
                          </div>
                        )}
                        {menu.subMenu && (
                          <Lucide
                            icon="ChevronDown"
                            className="side-menu__link__chevron"
                          />
                        )}
                      </a>
                      {/* BEGIN: Second Child */}
                      {menu.subMenu && (
                        <Transition
                          in={menu.activeDropdown}
                          onEnter={enter}
                          onExit={leave}
                          timeout={300}
                        >
                          <ul
                            className={clsx([
                              "",
                              { block: menu.activeDropdown },
                              { hidden: !menu.activeDropdown },
                            ])}
                          >
                            {menu.subMenu.map((subMenu, subMenuKey) => (
                              <li key={subMenuKey}>
                                <a
                                  href=""
                                  className={clsx([
                                    "side-menu__link",
                                    {
                                      "side-menu__link--active": subMenu.active,
                                    },
                                    {
                                      "side-menu__link--active-dropdown":
                                        subMenu.activeDropdown,
                                    },
                                  ])}
                                  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    linkTo(subMenu, navigate);
                                    setFormattedMenu([...formattedMenu]);
                                  }}
                                >
                                  <Lucide
                                    icon={subMenu.icon}
                                    className="side-menu__link__icon"
                                  />
                                  <div className="side-menu__link__title">
                                    {subMenu.title}
                                  </div>
                                  {subMenu.badge && (
                                    <div className="side-menu__link__badge">
                                      {subMenu.badge}
                                    </div>
                                  )}
                                  {subMenu.subMenu && (
                                    <Lucide
                                      icon="ChevronDown"
                                      className="side-menu__link__chevron"
                                    />
                                  )}
                                </a>
                                {/* BEGIN: Third Child */}
                                {subMenu.subMenu && (
                                  <Transition
                                    in={subMenu.activeDropdown}
                                    onEnter={enter}
                                    onExit={leave}
                                    timeout={300}
                                  >
                                    <ul
                                      className={clsx([
                                        "",
                                        {
                                          block: subMenu.activeDropdown,
                                        },
                                        { hidden: !subMenu.activeDropdown },
                                      ])}
                                    >
                                      {subMenu.subMenu.map(
                                        (lastSubMenu, lastSubMenuKey) => (
                                          <li key={lastSubMenuKey}>
                                            <a
                                              href=""
                                              className={clsx([
                                                "side-menu__link",
                                                {
                                                  "side-menu__link--active":
                                                    lastSubMenu.active,
                                                },
                                                {
                                                  "side-menu__link--active-dropdown":
                                                    lastSubMenu.activeDropdown,
                                                },
                                              ])}
                                              onClick={(
                                                event: React.MouseEvent
                                              ) => {
                                                event.preventDefault();
                                                linkTo(lastSubMenu, navigate);
                                                setFormattedMenu([
                                                  ...formattedMenu,
                                                ]);
                                              }}
                                            >
                                              <Lucide
                                                icon={lastSubMenu.icon}
                                                className="side-menu__link__icon"
                                              />
                                              <div className="side-menu__link__title">
                                                {lastSubMenu.title}
                                              </div>
                                              {lastSubMenu.badge && (
                                                <div className="side-menu__link__badge">
                                                  {lastSubMenu.badge}
                                                </div>
                                              )}
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </Transition>
                                )}
                                {/* END: Third Child */}
                              </li>
                            ))}
                          </ul>
                        </Transition>
                      )}
                      {/* END: Second Child */}
                    </li>
                  )
                )}
                {/* END: First Child */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx([
          "transition-[margin,width] duration-100 px-5 mt-[65px] pt-[31px] pb-16 relative z-10",
          { "xl:ml-[275px]": !compactMenu },
          { "xl:ml-[91px]": compactMenu },
        ])}
      >
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
