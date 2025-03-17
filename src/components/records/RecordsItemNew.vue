<script setup lang="ts">
import { watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import { UIInput } from '@/components/ui/input';
import RecordsRemoveButton from '@/components/records/RecordsRemoveButton.vue';
import RecordsSelectType from '@/components/records/RecordsSelectType.vue';

import useRecordsStore, { type UserRecord } from '@/stores/records';

const { record } = defineProps<{
  record: UserRecord;
}>();

const validationSchema = toTypedSchema(
  zod.object({
    badges: zod.string().max(50, { message: 'Максимум 50 символов' }).optional(),
    type: zod.enum(['local', 'ldap']),
    login: zod
      .string({ message: 'Это обязательное поле' })
      .min(1, { message: 'Это обязательное поле' })
      .max(100, { message: 'Максимум 100 символов' }),
    password: zod
      .string({ message: 'Это обязательное поле' })
      .min(1, { message: 'Это обязательное поле' })
      .max(100, { message: 'Максимум 100 символов' })
      .nullable(),
  }),
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: badges } = useField<string>('badges');
const { value: type } = useField<'local' | 'ldap'>('type', {}, { initialValue: record.type });
const { value: login } = useField<string>('login');
const { value: password } = useField<string | null>('password');

watch(
  type,
  (newType) => {
    password.value = newType === 'ldap' ? null : '';
  },
  { immediate: true },
);

function getBadgesFromString(badgesString: string | undefined) {
  if (!badgesString) return [];

  const badges = badgesString.split(';') || [];
  return badges.map((badge) => ({ text: badge }));
}

const recordsStore = useRecordsStore();

const checkValues = handleSubmit((values) => {
  if (!errors.value.badges && !errors.value.type && !errors.value.login && !errors.value.password) {
    const badges = getBadgesFromString(values.badges);
    const password = values.password ? values.password : null;
    recordsStore.saveNewRecord({ ...values, id: record.id, badges, password });
  }
});
</script>

<template>
  <form class="grid grid-cols-[repeat(4,_minmax(100px,_1fr))_36px] gap-2">
    <div>
      <UIInput
        v-model="badges"
        @focusout="checkValues"
        placeholder="Значение"
        :class="{ 'border-destructive focus-visible:ring-destructive': errors.badges }"
      />
      <span class="text-sm text-destructive">{{ errors.badges }}</span>
    </div>

    <div>
      <RecordsSelectType v-model="type" @change="checkValues" />
      <span class="text-sm text-destructive">{{ errors.type }}</span>
    </div>

    <div :class="{ 'col-span-2': type !== 'local' }">
      <UIInput
        v-model="login"
        @focusout="checkValues"
        placeholder="Значение"
        :class="{ 'border-destructive focus-visible:ring-destructive': errors.login }"
      />
      <span class="text-sm text-destructive">{{ errors.login }}</span>
    </div>

    <div v-if="type === 'local' && password !== null">
      <UIInput
        v-model="password"
        @focusout="checkValues"
        type="password"
        :class="{ 'border-destructive focus-visible:ring-destructive': errors.password }"
      />
      <span class="text-sm text-destructive">{{ errors.password }}</span>
    </div>

    <RecordsRemoveButton class="h-9" @click.prevent="recordsStore.removeNewRecord(record.id)" />
  </form>
</template>
