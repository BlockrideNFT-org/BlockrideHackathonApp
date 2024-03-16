import { decodeString, encodeString } from "app/utils/helpers";

export const STORAGE = localStorage;

const storage = {
  get(key: string) {
    const item = STORAGE.getItem(key);

    if (!item) return null;

    try {
      return JSON.parse(decodeString(item));
    } catch (error) {
      return null;
    }
  },
  set(key: string, value: Object) {
    STORAGE.setItem(key, encodeString(JSON.stringify(value)));
  },
  remove(key: string) {
    STORAGE.removeItem(key);
  },
  clear() {
    STORAGE.clear();
  },
};

export default storage;
