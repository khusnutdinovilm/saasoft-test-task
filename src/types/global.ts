export interface IRecordType {
  id: string;
  title: string;
}

export type BooleanFields<T, K extends keyof T> = {
  [P in K]: boolean;
};
