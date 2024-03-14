import { NavLink, useLocation } from "react-router-dom";
import tw, { styled, theme } from "twin.macro";
import clsx from "clsx";

import appLinks from "app/constants/appLinks";

export default function DashboardMobilenav() {
  return (
    <Container>
      {appLinks.map(({ label, icon: Icon, url }) => {
        return (
          <Link key={label} to={url}>
            <Icon />
          </Link>
        );
      })}
    </Container>
  );
}

const Container = styled.nav`
  ${tw`w-full h-full flex border-t px-[8px]`};

  ${tw`bg-white relative z-[9999]`};
`;

const Link = styled(NavLink)`
  ${tw` h-full flex-shrink-0 flex-grow flex flex-col items-center justify-center text-base text-black`};

  svg {
    ${tw`w-[20px] h-[24px] mb-[4px]`};
  }

  &.active {
    ${tw`text-black`};

    svg {
      path {
        stroke: black;
      }
    }
  }
`;
