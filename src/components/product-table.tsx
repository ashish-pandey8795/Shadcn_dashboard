'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Filter, Plus, SlidersHorizontal } from 'lucide-react';

const products = [
  {
    id: 1,
    image: 'Product 1',
    name: 'Practical Wooden Mouse',
    category: 'Furniture',
    price: 125.1,
    description:
      'The Eryn Keyboard is the latest in a series of warm products from Ortiz LLC',
    color: 'bg-gray-200 dark:bg-gray-700',
  },
  {
    id: 2,
    image: 'Product 2',
    name: 'Bespoke Bronze Sausages',
    category: 'Books',
    price: 142.29,
    description:
      'New maroon Mouse with ergonomic design for shrill comfort',
    color: 'bg-yellow-300 dark:bg-yellow-800',
  },
  {
    id: 3,
    image: 'Product 3',
    name: 'Handcrafted Aluminum Soap',
    category: 'Groceries',
    price: 166.2,
    description:
      'Our zesty-inspired Shirt brings a taste of luxury to your pale lifestyle',
    color: 'bg-green-300 dark:bg-green-700',
  },
  {
    id: 4,
    image: 'Product 4',
    name: 'Fresh Ceramic Chicken',
    category: 'Clothing',
    price: 278.79,
    description:
      'Our salty-inspired Table brings a taste of luxury to your flawed lifestyle',
    color: 'bg-yellow-400 dark:bg-yellow-700',
  },
  {
    id: 5,
    image: 'Product 5',
    name: 'Refined Concrete Chair',
    category: 'Clothing',
    price: 197.65,
    description:
      'Discover the snake-like agility of our Chips, perfect for narrow users',
    color: 'bg-cyan-300 dark:bg-cyan-700',
  },
];

export function ProductTable() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">People</h2>
          <p className="text-sm text-muted-foreground">
            Manage products (Server side table functionalities.)
          </p>
        </div>
        <Button variant="default">
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>

      {/* Search + Filters */}
      <div className="flex gap-2">
        <Input placeholder="Search products…" className="max-w-sm" />
        <Button variant="outline" className=" bg-white text-black dark:bg-black dark:text-white flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Categories
        </Button>
        <Button variant="outline" className="ml-auto bg-white text-black dark:bg-black dark:text-white">
          <SlidersHorizontal className="w-4 h-4" />
          View
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-md border border-gray-200 dark:border-gray-700">
        <Table>
          <TableHeader >
            <TableRow className='bg-white text-black dark:bg-black dark:text-white'>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div
                    className={`w-16 h-16 rounded-md text-white flex items-center justify-center text-xs font-medium ${product.color}`}
                  >
                    {product.image}
                  </div>
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{product.category}</Badge>
                </TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {product.description}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4">
        <div>10 row(s) total.</div>
        <div className="flex items-center space-x-2">
          <span>Rows per page</span>
          <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded px-2 py-1 text-sm ">
            <option>10</option>
            <option>20</option>
          </select>
          <span>Page 1 of 2</span>
          <Button variant="ghost" size="icon" disabled>
            &laquo;
          </Button>
          <Button variant="ghost" size="icon" disabled>
            &lsaquo;
          </Button>
          <Button variant="ghost" size="icon">
            &rsaquo;
          </Button>
          <Button variant="ghost" size="icon">
            &raquo;
          </Button>
        </div>
      </div>
    </div>
  );
}
