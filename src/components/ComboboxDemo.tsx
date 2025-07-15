'use client';
import * as React from 'react';
import { Check, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

export function ComboboxDemo({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [value, setValue] = React.useState('');

  // 🔒 Lock scroll when open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100/95 dark:bg-black/90">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-4xl bg-background rounded-xl border shadow-lg p-6 sm:p-8 relative">
          <button
            className="absolute top-4 right-4 text-muted-foreground"
            onClick={() => setOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>

          <Command className="w-full pt-4">
            <CommandInput
              placeholder="Search framework..."
              className="h-11 text-base px-4 pb-4"
            />
            <CommandList className="max-h-[400px] overflow-y-auto">
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                    className="text-base py-3"
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        'ml-auto',
                        value === framework.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
    </div>
  );
}
