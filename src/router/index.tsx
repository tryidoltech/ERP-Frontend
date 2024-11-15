import { useRoutes } from "react-router-dom";
import DashboardOverview1 from "../pages/DashboardOverview1";
import DashboardOverview2 from "../pages/DashboardOverview2";
import DashboardOverview3 from "../pages/DashboardOverview3";
import DashboardOverview4 from "../pages/DashboardOverview4";
import DashboardOverview5 from "../pages/DashboardOverview5";
import DashboardOverview6 from "../pages/DashboardOverview6";
import DashboardOverview7 from "../pages/DashboardOverview7";
import DashboardOverview8 from "../pages/DashboardOverview8";
import Users from "../pages/Users";
import Departments from "../pages/Departments";
import AddUser from "../pages/AddUser";
import ProfileOverview from "../pages/ProfileOverview";
import Settings from "../pages/Settings";
import Billing from "../pages/Billing";
import Invoice from "../pages/Invoice";
import Categories from "../pages/Categories";
import AddProduct from "../pages/AddProduct";
import ProductList from "../pages/ProductList";
import ProductGrid from "../pages/ProductGrid";
import TransactionList from "../pages/TransactionList";
import TransactionDetail from "../pages/TransactionDetail";
import SellerList from "../pages/SellerList";
import SellerDetail from "../pages/SellerDetail";
import Reviews from "../pages/Reviews";
import Inbox from "../pages/Inbox";
import FileManagerList from "../pages/FileManagerList";
import FileManagerGrid from "../pages/FileManagerGrid";
import Chat from "../pages/Chat";
import Calendar from "../pages/Calendar";
import PointOfSale from "../pages/PointOfSale";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Creative from "../pages/Creative";
import Dynamic from "../pages/Dynamic";
import Interactive from "../pages/Interactive";
import RegularTable from "../pages/RegularTable";
import Tabulator from "../pages/Tabulator";
import Modal from "../pages/Modal";
import Slideover from "../pages/Slideover";
import Notification from "../pages/Notification";
import Tab from "../pages/Tab";
import Accordion from "../pages/Accordion";
import Button from "../pages/Button";
import Alert from "../pages/Alert";
import ProgressBar from "../pages/ProgressBar";
import Tooltip from "../pages/Tooltip";
import Dropdown from "../pages/Dropdown";
import Typography from "../pages/Typography";
import Icon from "../pages/Icon";
import LoadingIcon from "../pages/LoadingIcon";
import RegularForm from "../pages/RegularForm";
import Datepicker from "../pages/Datepicker";
import TomSelect from "../pages/TomSelect";
import FileUpload from "../pages/FileUpload";
import WysiwygEditor from "../pages/WysiwygEditor";
import Validation from "../pages/Validation";
import Chart from "../pages/Chart";
import Slider from "../pages/Slider";
import ImageZoom from "../pages/ImageZoom";
import LandingPage from "../pages/LandingPage";

import Layout from "../themes";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <DashboardOverview1 />,
        },
        {
          path: "dashboard-overview-2",
          element: <DashboardOverview2 />,
        },
        {
          path: "dashboard-overview-3",
          element: <DashboardOverview3 />,
        },
        {
          path: "dashboard-overview-4",
          element: <DashboardOverview4 />,
        },
        {
          path: "dashboard-overview-5",
          element: <DashboardOverview5 />,
        },
        {
          path: "dashboard-overview-6",
          element: <DashboardOverview6 />,
        },
        {
          path: "dashboard-overview-7",
          element: <DashboardOverview7 />,
        },
        {
          path: "dashboard-overview-8",
          element: <DashboardOverview8 />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "departments",
          element: <Departments />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
        {
          path: "profile-overview",
          element: <ProfileOverview />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "billing",
          element: <Billing />,
        },
        {
          path: "invoice",
          element: <Invoice />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        {
          path: "product-list",
          element: <ProductList />,
        },
        {
          path: "product-grid",
          element: <ProductGrid />,
        },
        {
          path: "transaction-list",
          element: <TransactionList />,
        },
        {
          path: "transaction-detail",
          element: <TransactionDetail />,
        },
        {
          path: "seller-list",
          element: <SellerList />,
        },
        {
          path: "seller-detail",
          element: <SellerDetail />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        },
        {
          path: "inbox",
          element: <Inbox />,
        },
        {
          path: "file-manager-list",
          element: <FileManagerList />,
        },
        {
          path: "file-manager-grid",
          element: <FileManagerGrid />,
        },
        {
          path: "chat",
          element: <Chat />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "point-of-sale",
          element: <PointOfSale />,
        },
        {
          path: "creative",
          element: <Creative />,
        },
        {
          path: "dynamic",
          element: <Dynamic />,
        },
        {
          path: "interactive",
          element: <Interactive />,
        },
        {
          path: "regular-table",
          element: <RegularTable />,
        },
        {
          path: "tabulator",
          element: <Tabulator />,
        },
        {
          path: "modal",
          element: <Modal />,
        },
        {
          path: "slideover",
          element: <Slideover />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "tab",
          element: <Tab />,
        },
        {
          path: "accordion",
          element: <Accordion />,
        },
        {
          path: "button",
          element: <Button />,
        },
        {
          path: "alert",
          element: <Alert />,
        },
        {
          path: "progress-bar",
          element: <ProgressBar />,
        },
        {
          path: "tooltip",
          element: <Tooltip />,
        },
        {
          path: "dropdown",
          element: <Dropdown />,
        },
        {
          path: "typography",
          element: <Typography />,
        },
        {
          path: "icon",
          element: <Icon />,
        },
        {
          path: "loading-icon",
          element: <LoadingIcon />,
        },
        {
          path: "regular-form",
          element: <RegularForm />,
        },
        {
          path: "datepicker",
          element: <Datepicker />,
        },
        {
          path: "tom-select",
          element: <TomSelect />,
        },
        {
          path: "file-upload",
          element: <FileUpload />,
        },
        {
          path: "wysiwyg-editor",
          element: <WysiwygEditor />,
        },
        {
          path: "validation",
          element: <Validation />,
        },
        {
          path: "chart",
          element: <Chart />,
        },
        {
          path: "slider",
          element: <Slider />,
        },
        {
          path: "image-zoom",
          element: <ImageZoom />,
        },
      ],
    },
    {
      path: "/landing-page",
      element: <LandingPage />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
