import { cva, type VariantProps } from 'class-variance-authority';

export { default as UIAlert } from './UIAlert.vue';
export { default as UIAlertDescription } from './UIAlertDescription.vue';

export const alertVariants = cva(
  'flex items-center gap-2 w-full rounded-lg border px-4 py-3 text-sm',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AlertVariants = VariantProps<typeof alertVariants>;
