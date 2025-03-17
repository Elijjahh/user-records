<script setup lang="ts">
import { computed } from 'vue';
import { vAutoAnimate } from '@formkit/auto-animate';

import RecordsItem from '@/components/records/RecordsItem.vue';
import useRecordsStore from '@/stores/records';

const recordsStore = useRecordsStore();

const records = computed(() => {
  return recordsStore.savedRecords
    .map((record) => ({ ...record, new: false }))
    .concat(recordsStore.newRecords.map((record) => ({ ...record, new: true })));
});
</script>

<template>
  <div v-auto-animate class="flex flex-col gap-2">
    <div class="grid grid-cols-[repeat(4,_minmax(100px,_1fr))_36px] gap-2">
      <p class="text-neutral-400">Метки</p>
      <p class="text-neutral-400">Тип записи</p>
      <p class="text-neutral-400">Логин</p>
      <p class="text-neutral-400">Пароль</p>
    </div>
    <RecordsItem v-for="record in records" :key="record.id" :record="record" />
  </div>
</template>
