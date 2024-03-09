interface MyObject<T> {
  [key: string]: T;
}

export const getValueFromObject = <T>(object: MyObject<T>, key: string): T => {
  if (Object.keys(object).includes(key)) {
    return object[key];
  } else {
    return "" as unknown as T;
  }
};
