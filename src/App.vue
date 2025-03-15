<script setup lang="ts">
import RecordsAddButton from '@/components/records/RecordsAddButton.vue';
import RecordsList from '@/components/records/RecordsList.vue';
import RecordsBadgeAlert from '@/components/records/RecordsBadgeAlert.vue';
</script>

<template>
  <main class="~px-8/32 container mx-auto mt-10">
    <div class="flex items-center gap-4">
      <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Учетные записи</h1>
      <RecordsAddButton />
    </div>

    <RecordsBadgeAlert class="mt-8" />
    <RecordsList class="mt-8" />
  </main>
</template>
