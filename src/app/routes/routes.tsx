import { RouteObject } from "react-router-dom";

import DashboardHeader from "app/components/DashBoardHeader";
import DashBoardLayout from "app/components/DashBoardLayout";
import DashboardSideNav from "app/components/DashBoardSideNav";
import DashBoard from "app/views/Dashboard";
import Analytics from "app/views/Analytics";
import MarketPlace from "app/views/Marketplace";
import FleetDetails from "app/views/FleetDetails";
import Profile from "app/views/Profile";
import Documentation from "app/views/Documentation";
import ContactUs from "app/views/ContactUs";
import DashBoardMobileNav from "app/components/DashBoardMobileNav";
import IDVerification from "app/views/IDVerification";

const routesObject: RouteObject[] = [
  {
    element: (
      <DashBoardLayout
        header={<DashboardHeader />}
        sidenav={<DashboardSideNav />}
        mobilenav={<DashBoardMobileNav />}
      />
    ),
    children: [
      {
        path: "/",
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/marketplace",
        element: <MarketPlace />,
      },
      {
        path: "/marketplace/:id",
        element: <FleetDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/documentation",
        element: <Documentation />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/id-verification",
        element: <IDVerification />,
      },
    ],
  },
];

export default routesObject;
