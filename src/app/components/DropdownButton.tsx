import tw, { styled } from "twin.macro";

const DropdownButton = styled.button`
  ${tw`h-[42px] w-full bg-transparent border-none `};
  svg {
    &.dropdown {
      ${tw`-rotate-90`};
    }
    path {
      ${tw`fill-current`};
    }
  }
`;

export default DropdownButton;
