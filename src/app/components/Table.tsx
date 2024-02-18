import { SerializedStyles } from "@emotion/react";
import React, { TableHTMLAttributes } from "react";
import tw, { styled } from "twin.macro";

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  headings: {
    content: React.ReactNode;
    alighCenter?: boolean;
    alignRight?: boolean;
    styles?: SerializedStyles;
  }[];
}
function Table(props: React.PropsWithChildren<Props>) {
  const { headings, children, className } = props;

  return (
    <TableEL className={className}>
      <thead>
        <tr>
          {headings.map((heading, i) => (
            <th
              key={i.toString()}
              css={[
                heading.alighCenter && tw`text-center`,
                heading.alignRight && tw`text-right`,
                heading.styles,
              ]}
            >
              {heading.content}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </TableEL>
  );
}

const TableEL = styled.table`
  ${tw`w-full border-collapse`};

  thead > tr {
    ${tw`h-[44px]`};
  }

  th {
    ${tw`text-[1.4rem] font-[400] text-[rgba(132, 136, 144, 1)] leading-[18px] text-left bg-[rgba(248, 248, 248, 1)] pl-[10px] rounded-t-[4px] mb-[20px]`};
  }
`;

const TableRowEl = styled.tr`
  ${tw`h-[72px]  `};
`;

const TableCellEl = styled.td`
  ${tw`text-base`};
`;

Table.Row = TableRowEl;

Table.Cell = TableCellEl;

export default Table;
