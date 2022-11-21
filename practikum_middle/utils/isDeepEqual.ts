export const isEqual = (a: {}, b: {}): boolean => {
  const isObject = (value: unknown): boolean =>
    typeof value === "object" && value !== null;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every((key: string) => {
    if (isObject(a[key]) || Array.isArray(a[key])) {
      if (isObject(b[key]) || Array.isArray(b[key])) {
        return isEqual(a[key], b[key]);
      }
      return false;
    }
    return a[key] === b[key];
  });
};
