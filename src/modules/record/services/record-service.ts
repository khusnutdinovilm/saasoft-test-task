import generateUniqueId from "utils/generate-id";

import type { IRecord } from "modules/record/types/record";
import isValidRecord from "modules/record/utils/validate-record";

class RecordService {
  private records: IRecord[];

  constructor() {
    this.records = this.loadRecordFromLs();
  }

  private loadRecordFromLs(): IRecord[] {
    try {
      const recordsLS = localStorage.getItem("records");

      if (!recordsLS) return [];

      const parsedRecord = JSON.parse(recordsLS);

      if (!Array.isArray(parsedRecord)) return [];

      const validRecords = parsedRecord.filter(isValidRecord);

      return validRecords;
    } catch (error) {
      console.error("Ошибка при чтении данных из LocalStorage", error);
      return [];
    }
  }

  async getRecords(): Promise<IRecord[]> {
    try {
      return this.records;
    } catch (error) {
      console.error(error);
      throw new Error("Что-то пошло не так");
    }
  }

  async createRecord(payload: Omit<IRecord, "id">): Promise<IRecord> {
    try {
      const newRecord = {
        ...payload,
        id: generateUniqueId(),
      };
      this.records = [...this.records, newRecord];

      this.saveRecordsInLS();
      return newRecord;
    } catch (error) {
      console.error(error);
      throw new Error("Не удалось сохранить запись");
    }
  }

  async updateRecord(id: IRecord["id"], payload: Partial<IRecord>): Promise<IRecord> {
    try {
      const idx = this.records.findIndex(record => record.id === id);

      if (idx === -1) throw new Error(`Записи с id=${id} не существует`);

      const record = this.records[idx];
      const updatedRecord = {
        ...record,
        ...payload,
      };

      this.saveRecordsInLS();

      return updatedRecord;
    } catch (error) {
      console.error(error);
      throw new Error("Не удалось изменить учетную запись");
    }
  }

  async deleteRecord(id: IRecord["id"]): Promise<void> {
    try {
      const idx = this.records.findIndex(record => record.id === id);

      if (idx === -1) throw new Error(`Записи с id=${id} не существует`);

      this.records.splice(idx, 1);
      this.saveRecordsInLS();
    } catch (error) {
      console.error(error);
      throw new Error("Не удалось удалить учетную запись");
    }
  }

  private saveRecordsInLS() {
    localStorage.setItem("records", JSON.stringify(this.records));
  }
}

export default new RecordService();
