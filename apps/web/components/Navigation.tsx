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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Badge,
} from '@heroui/react';

import { useSessionStore } from '@/lib/stores/User/userSessionStore';
import { User } from '@/lib/types/user';
import { createClient } from '@/utils/supabase/client';

export default function Navigation() {
  const { user } = useSessionStore();

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
        <NavbarMenuToggle className='mr-2 h-6 sm:hidden mobile-menu-toggle' />
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

      <NavbarContent
        className='ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content2 lg:px-1 lg:dark:bg-content1'
        justify='end'
      >
        {/* Profile */}
        <NavbarItem className='px-2'>
          {user ? (
            <LoggedInUserNavItem user={user} />
          ) : (
            <LoggedOutUserNavItem />
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className='mobile-menu'>
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
            color='foreground'
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

function LoggedOutUserNavItem() {
  return (
    <Link href='/login'>
      <button className='mt-1 h-8 w-8 transition-transform'>
        <Badge
          color='success'
          content=''
          placement='bottom-right'
          shape='circle'
        >
          <Avatar size='sm' />
        </Badge>
      </button>
    </Link>
  );
}

function LoggedInUserNavItem({ user }: { user: User }) {
  const supabase = createClient();

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <button className='mt-1 h-8 w-8 transition-transform'>
          <Badge
            color='success'
            content=''
            placement='bottom-right'
            shape='circle'
          >
            <Avatar size='sm' src={user?.user_metadata?.avatar_url} />
          </Badge>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Profile Actions' variant='flat'>
        <DropdownItem key='profile' className='h-14 gap-2'>
          <p className='font-semibold'>Signed in as</p>
          <p className='font-semibold'>{user?.email}</p>
        </DropdownItem>
        <DropdownItem key='settings'>My Profile</DropdownItem>
        <DropdownItem key='team_settings'>Saved Tools</DropdownItem>
        <DropdownItem key='logout' color='danger' onPress={handleLogout}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
