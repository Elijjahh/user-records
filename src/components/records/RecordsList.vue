<script setup lang="ts">
import { UIInput } from '@/components/ui/input';
import RecordsRemoveButton from '@/components/records/RecordsRemoveButton.vue';
import RecordsSelectType from '@/components/records/RecordsSelectType.vue';

const records = [
  {
    badges: 'XXX',
    type: 'local',
    login: 'example',
    password: 'password',
  },
];
</script>

<template>
  <div class="grid gap-2">
    <div
      v-for="record in records"
      :key="record.login"
      class="grid grid-cols-[repeat(2,_minmax(100px,_1fr))_auto] gap-2 md:grid-cols-[repeat(4,_minmax(100px,_1fr))_auto]"
    >
      <UIInput default-value="" placeholder="Значение" />
      <RecordsSelectType />
      <UIInput default-value="Elijahh" placeholder="Значение" />
      <UIInput default-value="password" type="password" />
      <RecordsRemoveButton
        class="col-start-3 row-start-1 row-end-3 h-full md:col-auto md:row-auto"
      />
    </div>
  </div>
</template>
