export const remove = <T extends Comparable<T>>(arr: T[], value: T): T[] => {
  console.log();
  return arr.filter((el) => !el.compare(value));
};

export interface Comparable<T> {
  compare(val: T): boolean;
}
