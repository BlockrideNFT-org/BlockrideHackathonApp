import { ReactComponent as DashboardIcon } from "app/assets/icons/dashboard.svg";
import { ReactComponent as AnalyticsIcon } from "app/assets/icons/analytics.svg";
import { ReactComponent as MarketplaceIcon } from "app/assets/icons/marketplace.svg";
import { ReactComponent as ProfileIcon } from "app/assets/icons/profile.svg";
import { ReactComponent as DocumentationIcon } from "app/assets/icons/documentation.svg";
import { ReactComponent as ContactIcon } from "app/assets/icons/phone.svg";

const appLinks = [
  {
    label: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Analytics",
    url: "/analytics",
    icon: AnalyticsIcon,
  },
  {
    label: "Marketplace",
    url: "/marketplace",
    icon: MarketplaceIcon,
  },
  {
    label: "Profile",
    url: "/profile",
    icon: ProfileIcon,
  },
  {
    label: "Documentation",
    url: "/documentation",
    icon: DocumentationIcon,
  },
  {
    label: "Contact Us",
    url: "/contact-us",
    icon: ContactIcon,
  },
];

export default appLinks;
