import type { IRecordType } from "types/global";

export const RECORD_TYPES: IRecordType[] = [
  { id: "ldap", title: "LDAP" },
  { id: "local", title: "Локальная" },
];

export const DEFAULT_RECORD_TYPE = RECORD_TYPES[0];
