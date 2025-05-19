'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from '@heroui/react';

export default function Navigation() {
  return (
    <Navbar
      classNames={{
        base: 'lg:bg-transparent lg:backdrop-filter-none',
        item: 'data-[active=true]:text-primary',
        wrapper: 'px-4 sm:px-6',
      }}
      height='60px'
    >
      <NavbarBrand>
        <NavbarMenuToggle className='mr-2 h-6 sm:hidden' />
        <Link
          href='/'
          className='text-inherit hover:text-primary transition-colors'
        >
          <p className='font-bold text-inherit'>Velto Tools</p>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className='ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 dark:bg-content1 sm:flex'
        justify='start'
      >
        <NavbarItem>
          <Link
            className='flex gap-2 text-inherit hover:text-primary transition-colors'
            href='/'
          >
            ICS File
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className='flex gap-2 text-inherit hover:text-primary transition-colors'
            href='/vcard'
          >
            VCard (vcf)
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className='flex gap-2 text-inherit hover:text-primary transition-colors'
            href='qrcode'
          >
            QR Code
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className='flex gap-2 text-inherit hover:text-primary transition-colors'
            href='barcode'
          >
            Barcode
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className='w-full hover:text-primary transition-colors'
            color='foreground'
            href='/'
          >
            ICS File
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className='w-full hover:text-primary transition-colors'
            color='primary'
            href='/vcard'
          >
            VCard (vcf)
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className='w-full hover:text-primary transition-colors'
            color='foreground'
            href='/qrcode'
          >
            QR Code
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className='w-full hover:text-primary transition-colors'
            color='foreground'
            href='/barcode'
          >
            Barcode
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
