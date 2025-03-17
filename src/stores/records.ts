import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export type Badge = { text: string };

export type UserRecord = {
  id: number;
  badges: Badge[];
  type: 'local' | 'ldap';
  login: string;
  password: string | null;
};

function generateUniqueId() {
  return Math.floor(100000 + Math.random() * 900000);
}

function createRecord(): UserRecord {
  return {
    id: generateUniqueId(),
    badges: [],
    type: 'ldap',
    login: '',
    password: null,
  };
}

const useRecordsStore = defineStore('records', () => {
  const records = useLocalStorage<UserRecord[]>('user-records', [createRecord()]);

  function addRecord() {
    records.value.push(createRecord());
  }

  function removeRecord(id: number) {
    const index = records.value.findIndex((r) => r.id === id);
    records.value.splice(index, 1);
  }

  function setRecord(id: number, record: Omit<UserRecord, 'id'>) {
    const index = records.value.findIndex((r) => r.id === id);
    records.value[index] = { ...record, id };
  }

  return {
    records,
    addRecord,
    removeRecord,
    setRecord,
  };
});

export default useRecordsStore;
