import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "@/components/Base/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "DASHBOARDS",
    {
      icon: "GaugeCircle",
      pathname: "/",
      title: "E-Commerce",
    },
    {
      icon: "ActivitySquare",
      pathname: "/dashboard-overview-2",
      title: "CRM",
    },
    {
      icon: "Album",
      pathname: "/dashboard-overview-3",
      title: "Hospital",
    },
    {
      icon: "BookMarked",
      pathname: "/dashboard-overview-4",
      title: "Factory",
    },
    {
      icon: "HardDrive",
      pathname: "/dashboard-overview-5",
      title: "Banking",
    },
    {
      icon: "MousePointerSquare",
      pathname: "/dashboard-overview-6",
      title: "Cafe",
    },
    {
      icon: "ShieldHalf",
      pathname: "/dashboard-overview-7",
      title: "Crypto",
    },
    {
      icon: "Building",
      pathname: "/dashboard-overview-8",
      title: "Hotel",
    },
    "APPS",
    {
      icon: "GanttChartSquare",
      pathname: "/inbox",
      title: "Inbox",
      badge: 4,
    },
    {
      icon: "PanelRightClose",
      pathname: "/file-manager-list",
      title: "File Manager List",
    },
    {
      icon: "PanelTopClose",
      pathname: "/file-manager-grid",
      title: "File Manager Grid",
    },
    {
      icon: "PanelTopClose",
      pathname: "/point-of-sale",
      title: "Point of Sale",
    },
    {
      icon: "MailOpen",
      pathname: "/chat",
      title: "Chat",
    },
    {
      icon: "CalendarRange",
      pathname: "/calendar",
      title: "Calendar",
    },
    "UI WIDGETS",
    {
      icon: "Album",
      pathname: "/creative",
      title: "Creative",
    },
    {
      icon: "ActivitySquare",
      pathname: "/dynamic",
      title: "Dynamic",
    },
    {
      icon: "Keyboard",
      pathname: "/interactive",
      title: "Interactive",
    },
    "USER MANAGEMENT",
    {
      icon: "SquareUser",
      pathname: "/users",
      title: "Users",
    },
    {
      icon: "CakeSlice",
      pathname: "/departments",
      title: "Departments",
    },
    {
      icon: "PackagePlus",
      pathname: "/add-user",
      title: "Add User",
    },
    "PERSONAL DASHBOARD",
    {
      icon: "Presentation",
      pathname: "/profile-overview",
      title: "Profile Overview",
    },
    {
      icon: "CalendarRange",
      pathname: "/profile-overview?page=events",
      title: "Events",
    },
    {
      icon: "Medal",
      pathname: "/profile-overview?page=achievements",
      title: "Achievements",
    },
    {
      icon: "TabletSmartphone",
      pathname: "/profile-overview?page=contacts",
      title: "Contacts",
    },
    {
      icon: "Snail",
      pathname: "/profile-overview?page=default",
      title: "Default",
    },
    "GENERAL SETTINGS",
    {
      icon: "Briefcase",
      pathname: "/settings",
      title: "Profile Info",
    },
    {
      icon: "MailCheck",
      pathname: "/settings?page=email-settings",
      title: "Email Settings",
    },
    {
      icon: "Fingerprint",
      pathname: "/settings?page=security",
      title: "Security",
    },
    {
      icon: "Radar",
      pathname: "/settings?page=preferences",
      title: "Preferences",
    },
    {
      icon: "DoorOpen",
      pathname: "/settings?page=two-factor-authentication",
      title: "Two-factor Authentication",
    },
    {
      icon: "Keyboard",
      pathname: "/settings?page=device-history",
      title: "Device History",
    },
    {
      icon: "Ticket",
      pathname: "/settings?page=notification-settings",
      title: "Notification Settings",
    },
    {
      icon: "BusFront",
      pathname: "/settings?page=connected-services",
      title: "Connected Services",
    },
    {
      icon: "Podcast",
      pathname: "/settings?page=social-media-links",
      title: "Social Media Links",
    },
    {
      icon: "PackageX",
      pathname: "/settings?page=account-deactivation",
      title: "Account Deactivation",
    },
    "ACCOUNT",
    {
      icon: "PercentSquare",
      pathname: "/billing",
      title: "Billing",
    },
    {
      icon: "DatabaseZap",
      pathname: "/invoice",
      title: "Invoice",
    },
    "E-COMMERCE",
    {
      icon: "BookMarked",
      pathname: "/categories",
      title: "Categories",
    },
    {
      icon: "Compass",
      pathname: "/add-product",
      title: "Add Product",
    },
    {
      icon: "Table2",
      pathname: "/products",
      title: "Products",
      subMenu: [
        {
          icon: "LayoutPanelTop",
          pathname: "/product-list",
          title: "Product List",
        },
        {
          icon: "LayoutPanelLeft",
          pathname: "/product-grid",
          title: "Product Grid",
        },
      ],
    },
    {
      icon: "SigmaSquare",
      pathname: "/transactions",
      title: "Transactions",
      subMenu: [
        {
          icon: "DivideSquare",
          pathname: "/transaction-list",
          title: "Transaction List",
        },
        {
          icon: "PlusSquare",
          pathname: "/transaction-detail",
          title: "Transaction Detail",
        },
      ],
    },
    {
      icon: "FileArchive",
      pathname: "/sellers",
      title: "Sellers",
      subMenu: [
        {
          icon: "FileImage",
          pathname: "/seller-list",
          title: "Seller List",
        },
        {
          icon: "FileBox",
          pathname: "/seller-detail",
          title: "Seller Detail",
        },
      ],
    },
    {
      icon: "Goal",
      pathname: "/reviews",
      title: "Reviews",
    },
    "AUTHENTICATIONS",
    {
      icon: "BookKey",
      pathname: "login",
      title: "Login",
    },
    {
      icon: "BookLock",
      pathname: "register",
      title: "Register",
    },
    "COMPONENTS",
    {
      icon: "LayoutPanelLeft",
      title: "Table",
      subMenu: [
        {
          icon: "FlipVertical",
          pathname: "/regular-table",
          title: "Regular Table",
        },
        {
          icon: "FlipHorizontal",
          pathname: "/tabulator",
          title: "Tabulator",
        },
      ],
    },
    {
      icon: "MemoryStick",
      title: "Overlay",
      subMenu: [
        {
          icon: "MenuSquare",
          pathname: "/modal",
          title: "Modal",
        },
        {
          icon: "Newspaper",
          pathname: "/slideover",
          title: "Slide Over",
        },
        {
          icon: "PanelBottom",
          pathname: "/notification",
          title: "Notification",
        },
      ],
    },
    {
      icon: "Package2",
      pathname: "/tab",
      title: "Tab",
    },
    {
      icon: "Pocket",
      pathname: "/accordion",
      title: "Accordion",
    },
    {
      icon: "PlusSquare",
      pathname: "/button",
      title: "Button",
    },
    {
      icon: "Presentation",
      pathname: "/alert",
      title: "Alert",
    },
    {
      icon: "ShieldEllipsis",
      pathname: "/progress-bar",
      title: "Progress Bar",
    },
    {
      icon: "Clapperboard",
      pathname: "/tooltip",
      title: "Tooltip",
    },
    {
      icon: "FlipVertical",
      pathname: "/dropdown",
      title: "Dropdown",
    },
    {
      icon: "FileType2",
      pathname: "/typography",
      title: "Typography",
    },
    {
      icon: "Aperture",
      pathname: "/icon",
      title: "Icon",
    },
    {
      icon: "Droplets",
      pathname: "/loading-icon",
      title: "Loading Icon",
    },
    {
      icon: "GalleryHorizontalEnd",
      pathname: "/regular-form",
      title: "Regular Form",
    },
    {
      icon: "Microwave",
      pathname: "/datepicker",
      title: "Datepicker",
    },
    {
      icon: "Disc3",
      pathname: "/tom-select",
      title: "Tom Select",
    },
    {
      icon: "Sandwich",
      pathname: "/file-upload",
      title: "File Upload",
    },
    {
      icon: "HopOff",
      pathname: "/wysiwyg-editor",
      title: "Wysiwyg Editor",
    },
    {
      icon: "ClipboardType",
      pathname: "/validation",
      title: "Validation",
    },
    {
      icon: "PieChart",
      pathname: "/chart",
      title: "Chart",
    },
    {
      icon: "KanbanSquare",
      pathname: "/slider",
      title: "Slider",
    },
    {
      icon: "Image",
      pathname: "/image-zoom",
      title: "Image Zoom",
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
