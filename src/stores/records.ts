import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { ref } from 'vue';

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
  const savedRecords = useLocalStorage<UserRecord[]>('user-records', []);
  const newRecords = ref<UserRecord[]>([]);

  function addNewRecord() {
    newRecords.value.push(createRecord());
  }

  function saveNewRecord(record: UserRecord) {
    const index = newRecords.value.findIndex((r) => r.id === record.id);
    newRecords.value.splice(index, 1);
    savedRecords.value.push(record);
  }

  function removeNewRecord(id: number) {
    const index = newRecords.value.findIndex((r) => r.id === id);
    newRecords.value.splice(index, 1);
  }

  function removeSavedRecord(id: number) {
    const index = savedRecords.value.findIndex((r) => r.id === id);
    savedRecords.value.splice(index, 1);
  }

  function changeSavedRecord(record: UserRecord) {
    const index = savedRecords.value.findIndex((r) => r.id === record.id);
    savedRecords.value[index] = record;
  }

  return {
    savedRecords,
    newRecords,
    addNewRecord,
    saveNewRecord,
    removeNewRecord,
    removeSavedRecord,
    changeSavedRecord,
  };
});

export default useRecordsStore;
