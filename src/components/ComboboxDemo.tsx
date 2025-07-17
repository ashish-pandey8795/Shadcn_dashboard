


'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';

const items = [
  {
    group: 'Navigation',
    links: [
      { label: 'Dashboard', sub: 'Go to Dashboard', key: 'd', href: '/dashboard' },
      { label: 'Product', sub: 'Go to Product', key: 'p', href: '/dashboard' },
      { label: 'Kanban', sub: 'Go to Kanban', key: 'k', href: '/dashboard' },
    ],
  },
  {
    group: 'Account',
    links: [
      { label: 'Profile', sub: 'Go to Profile', key: 'm', href: '/dashboard' },
      { label: 'Login', sub: 'Go to Login', key: 'l', href: '/dashboard' },
    ],
  },
];

export function ComboboxDemo({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex px-0 items-center justify-center bg-gray-100/80 backdrop-blur-sm dark:bg-black/80">
      <div className="w-full max-w-2xl p-4">
        <div className="relative rounded-xl border bg-white dark:bg-zinc-900 shadow-xl">
          <button
            className="absolute top-4 right-4 text-muted-foreground"
            onClick={() => setOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>

          <Command className="w-full pt-4">
            <CommandInput
              placeholder="Type a command or search..."
              className="h-11 text-base px-4"
            />
            <CommandList className="max-h-[400px] overflow-y-auto ">
              <CommandEmpty>No command found.</CommandEmpty>

              {items.map((section) => (
                <CommandGroup key={section.group} heading={section.group} className='px-0'>
                  {section.links.map((item) => (
                    <CommandItem
                      key={item.label}
                      value={item.label}
                      onSelect={() => {
                        setValue(item.label);
                        setOpen(false);
                        router.push(item.href);
                      }}
                      className="text-base px-4 py-3 rounded-none flex hover:border-l-4 hover:border-primary items-center justify-between"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-sm text-muted-foreground">{item.sub}</span>
                      </div>
                      <kbd className="flex space-x-1 rounded border bg-muted px-2 py-1 text-xs">
                        <span className="text-muted-foreground uppercase">{item.key}</span>
                      </kbd>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </div>
      </div>
    </div>
  );
}
