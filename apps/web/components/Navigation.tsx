'use client';

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
        base: 'backdrop-blur-none backdrop-saturate-100 bg-transparent',
        item: 'data-[active=true]:text-primary',
        wrapper: 'px-4 sm:px-6',
      }}
      height='60px'
    >
      <NavbarBrand>
        <NavbarMenuToggle className='mr-2 h-6 sm:hidden mobile-menu-toggle' />
        <Link
          href='/'
          className='text-inherit hover:text-primary transition-colors'
        >
          <p className='font-bold text-inherit'>Velto Tools</p>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className='ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 sm:flex'
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
            href='/qrcode'
          >
            QR Code
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className='flex gap-2 text-inherit hover:text-primary transition-colors'
            href='/barcode'
          >
            Barcode
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className='mobile-menu bg-content2'>
        <NavbarMenuItem>
          <Link
            className='w-full hover:text-primary transition-colors dark:text-white'
            color='foreground'
            href='/'
          >
            ICS File
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className='w-full hover:text-primary transition-colors dark:text-white'
            color='foreground'
            href='/vcard'
          >
            VCard (vcf)
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className='w-full hover:text-primary transition-colors dark:text-white'
            color='foreground'
            href='/qrcode'
          >
            QR Code
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className='w-full hover:text-primary transition-colors dark:text-white'
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
