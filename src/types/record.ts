export interface IRecordType {
  id: string;
  title: string;
}

export type RecordLabel = {
  text: string;
};

export interface IRecord {
  id: string;
  label: RecordLabel[];
  type: IRecordType;
  login: string;
  password: string | null;
}
