import type { IRecordType } from "types/global";

export type RecordLabelType = {
  text: string;
};

export interface IRecord {
  id: string;
  label: RecordLabelType[];
  type: IRecordType;
  login: string;
  password: string | null;
}
