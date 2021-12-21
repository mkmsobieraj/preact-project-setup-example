export const remove = <T extends Comparable<T>>(arr: T[], value: T): T[] => {
  return arr.filter((el) => !el.compare(value));
};

export interface Comparable<T> {
  compare(val: T): boolean;
}
