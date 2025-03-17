<script setup lang="ts">
import { computed } from 'vue';
import { vAutoAnimate } from '@formkit/auto-animate';

import RecordsAddButton from '@/components/records/RecordsAddButton.vue';
import RecordsList from '@/components/records/RecordsList.vue';
import RecordsBadgeAlert from '@/components/records/RecordsBadgeAlert.vue';

import useRecordsStore from '@/stores/records';

const recordsStore = useRecordsStore();

const hasRecords = computed(
  () => recordsStore.savedRecords.length > 0 || recordsStore.newRecords.length > 0,
);
</script>

<template>
  <main>
    <section v-auto-animate class="container mx-auto mt-10 ~px-8/32">
      <div class="flex items-center gap-4">
        <h1 class="text-3xl font-semibold">Учетные записи</h1>
        <RecordsAddButton @click="recordsStore.addNewRecord" />
      </div>

      <RecordsBadgeAlert class="mt-8" />
      <RecordsList v-if="hasRecords" class="mt-8" />
      <p v-else class="mt-8 text-center text-xl font-medium">У вас нет учетных записей</p>
    </section>
  </main>
</template>
