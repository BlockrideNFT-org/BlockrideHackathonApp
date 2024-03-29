import { NavLink } from "react-router-dom";
import tw, { css, styled } from "twin.macro";

import appLinks from "../../app/constants/appLinks";

export default function DashboardSideNav() {
  return (
    <Container>
      <NavigationSection>
        {appLinks.map(({ label, url, icon: Icon }) => {
          return (
            <li key={label}>
              <Link to={url}>
                <Icon />
                {label}
              </Link>
            </li>
          );
        })}
      </NavigationSection>
    </Container>
  );
}

const Container = styled.nav`
  ${tw`w-full h-page py-[24px] px-[32px] flex flex-col border-r border-[#EBEDF0]`};

  ${tw`bg-white `};
`;

const NavigationSection = styled.ul`
  ${tw`flex-grow`};

  &,
  li {
    ${tw`w-full`};

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

const LinkStyles = css`
  ${tw`w-full h-[46px] rounded-[8px] px-[16px] flex items-center text-[1.4rem] text-[#959595] font-normal mb-[8px] last-of-type:mb-0`};

  svg {
    ${tw`w-[20px] h-[20px] mr-[10px]`};
  }
`;

const Link = styled(NavLink)`
  ${LinkStyles};

  &.active {
    ${tw`bg-[#FE991E] text-[#1D2939] rounded-[100px]`};

    svg {
      path {
        stroke: black;
      }
    }
  }
`;
