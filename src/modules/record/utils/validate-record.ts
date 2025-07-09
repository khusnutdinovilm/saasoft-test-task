import type { IRecordType } from "types/global";

import type { IRecord, RecordLabelType } from "modules/record/types/record";

const isValidLabel = (obj: unknown): obj is RecordLabelType => {
  if (typeof obj !== "object" && obj === null) return false;

  const recordLabelObj = obj as Record<string, unknown>;

  return typeof recordLabelObj.text === "string";
};

const isValidType = (obj: unknown): obj is IRecordType => {
  if (typeof obj !== "object" && obj === null) return false;

  const recordTypeObj = obj as Record<string, unknown>;

  return (
    typeof recordTypeObj.id === "string" &&
    (recordTypeObj.id === "ldap" || recordTypeObj.id === "local") &&
    typeof recordTypeObj.title === "string"
  );
};

export default function isValidRecord(obj: unknown): obj is IRecord {
  if (typeof obj !== "object" && obj === null) return false;

  const recordObj = obj as Record<string, unknown>;

  if (
    typeof recordObj.id !== "string" ||
    typeof recordObj.login !== "string" ||
    !Array.isArray(recordObj.label) ||
    !recordObj.label.every(isValidLabel) ||
    !isValidType(recordObj.type)
  )
    return false;

  const type = recordObj.type as IRecordType;
  const password = recordObj.password;

  if (type.id === "ldap" && password !== null) {
    return false;
  }

  if (type.id === "local" && typeof password !== "string") {
    return false;
  }

  return true;
}
