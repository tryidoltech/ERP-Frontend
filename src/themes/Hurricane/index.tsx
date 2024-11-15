import "@/assets/css/vendors/simplebar.css";
import "@/assets/css/themes/hurricane.css";
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
        "hurricane",
        "before:content-[''] before:z-[-1] before:w-screen before:bg-slate-50 before:top-0 before:h-screen before:fixed before:bg-texture-black before:bg-contain before:bg-fixed before:bg-[center_-20rem] before:bg-no-repeat dark:before:bg-darkmode-800 dark:before:bg-texture-white",
      ])}
    >
      <div
        className={clsx([
          "fixed top-0 left-0 z-50 side-menu group",
          { "side-menu--collapsed": compactMenu },
          { "side-menu--on-hover": compactMenuOnHover },
        ])}
      >
        <div
          className={clsx([
            "fixed top-0 inset-x-0 mt-2.5 z-10 mx-2.5 h-[65px] bg-gradient-to-r from-theme-1 to-theme-2 rounded-[0.6rem] shadow-lg flex",
            "before:content-[''] before:absolute before:inset-x-0 before:-mt-2.5 before:h-2.5 before:backdrop-blur",
          ])}
        >
          <div
            className={clsx([
              "flex-none flex items-center z-10 px-5 h-full xl:w-[275px] overflow-hidden xl:-ml-2.5 relative duration-300 group-[.side-menu--collapsed]:xl:w-[100px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000001f]",
              "before:content-[''] before:hidden before:xl:block before:absolute before:right-0 before:border-r before:border-dotted before:border-white/[0.15] before:h-4/6 before:group-[.side-menu--collapsed.side-menu--on-hover]:xl:hidden",
              "after:content-[''] after:hidden after:xl:block after:absolute after:w-full after:h-full after:bg-[length:100vw_65px] after:z-[-1] after:bg-gradient-to-r after:from-theme-1 after:to-theme-2",
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
              className="hidden xl:flex items-center ml-2.5 transition-[margin] group-[.side-menu--collapsed]:xl:ml-6 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-2.5"
            >
              <div className="transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                <div className="w-[18px] h-[18px] relative -rotate-45 [&_div]:bg-white">
                  <div className="absolute w-[21%] left-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                  <div className="absolute w-[21%] inset-0 m-auto h-[120%] rounded-full"></div>
                  <div className="absolute w-[21%] right-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                </div>
              </div>
              <div className="ml-3.5 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 transition-opacity text-white font-medium">
                HURRICANE
              </div>
            </a>
            <a
              href=""
              onClick={toggleCompactMenu}
              className="hidden group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed]:xl:opacity-0 transition-[opacity,transform] 3xl:flex items-center justify-center w-[20px] h-[20px] ml-auto text-white border rounded-full border-white/40 hover:bg-white/5"
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
                className="p-2 rounded-full hover:bg-white/5"
              >
                <Lucide
                  icon="AlignJustify"
                  className="w-[18px] h-[18px] text-white"
                />
              </a>
              <a
                href=""
                className="p-2 rounded-full hover:bg-white/5"
                onClick={(e) => {
                  e.preventDefault();
                  setQuickSearch(true);
                }}
              >
                <Lucide
                  icon="Search"
                  className="w-[18px] h-[18px] text-white"
                />
              </a>
            </div>
          </div>
          <div className="absolute transition-[padding] duration-100 pl-[84px] xl:pl-[275px] group-[.side-menu--collapsed]:xl:pl-[100px] xl:-ml-2.5 h-full inset-x-0">
            <div className="flex items-center w-full h-full px-5">
              {/* BEGIN: Breadcrumb */}
              <Breadcrumb light className="flex-1 hidden xl:block">
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
                <div className="bg-white/[0.12] w-[350px] flex items-center py-2 px-3.5 rounded-[0.5rem] text-white/60 cursor-pointer hover:bg-white/20 transition-colors dark:bg-black/20">
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
                    className="p-2 rounded-full hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault();
                      setActivitiesPanel(true);
                    }}
                  >
                    <Lucide
                      icon="LayoutGrid"
                      className="text-white w-[18px] h-[18px]"
                    />
                  </a>
                  <a
                    href=""
                    className="p-2 rounded-full hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault();
                      requestFullscreen();
                    }}
                  >
                    <Lucide
                      icon="Expand"
                      className="text-white w-[18px] h-[18px]"
                    />
                  </a>
                  <a
                    href=""
                    className="p-2 rounded-full hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault();
                      setNotificationsPanel(true);
                    }}
                  >
                    <Lucide
                      icon="Bell"
                      className="text-white w-[18px] h-[18px]"
                    />
                  </a>
                </div>
                <Menu className="ml-5">
                  <Menu.Button className="overflow-hidden rounded-full w-[36px] h-[36px] border-[3px] border-white/[0.15] image-fit">
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
          className={clsx([
            "z-10 xl:ml-0 xl:z-0 fixed shadow-xl xl:shadow-none bg-white w-[275px] border-dotted border-slate-400/60 duration-300 transition-[width,margin] group-[.side-menu--collapsed]:xl:w-[100px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:border-slate-50 group-[.side-menu--collapsed.side-menu--on-hover]:xl:border-solid group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] xl:pt-[65px] xl:pl-2.5 xl:relative overflow-hidden border-r h-screen flex flex-col dark:bg-darkmode-800 dark:group-[.side-menu--collapsed.side-menu--on-hover]:xl:border-slate-50/10",
            "before:content-[''] before:transition-colors before:w-screen before:h-screen before:absolute before:bg-texture-black before:bg-contain before:bg-fixed before:bg-[center_-20rem] before:bg-no-repeat before:bg-slate-50 group-[.side-menu--collapsed.side-menu--on-hover]:xl:before:bg-white dark:before:bg-darkmode-800 dark:group-[.side-menu--collapsed.side-menu--on-hover]:xl:before:bg-darkmode-800 dark:before:bg-texture-white",
            "after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:z-[-1] after:xl:hidden",
            { "ml-0 after:block": activeMobileMenu },
            { "-ml-[275px] after:hidden": !activeMobileMenu },
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
              "w-full h-full z-20 px-5 mt-3.5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent",
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
                      <div className="side-menu__link__title">{menu.title}</div>
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
                                  { "side-menu__link--active": subMenu.active },
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
      <div
        className={clsx([
          "transition-[margin,width] duration-100 px-5 xl:mr-2.5 mt-[75px] pt-[31px] pb-16 z-10 relative",
          { "xl:ml-[275px]": !compactMenu },
          { "xl:ml-[100px]": compactMenu },
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
