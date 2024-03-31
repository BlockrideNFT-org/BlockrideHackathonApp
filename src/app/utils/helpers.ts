import dayjs from "dayjs";

export const encodeString = (str: string) =>
  btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );

/**
 * Decode string
 */
export const decodeString = (str: string) =>
  decodeURIComponent(
    Array.prototype.map
      .call(
        atob(str),
        (c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
      )
      .join("")
  );

export function formatDateStr(dateStr: string | number, format?: string) {
  return dayjs(dayjs(dateStr)).format(format || "MMM DD, YYYY");
}
