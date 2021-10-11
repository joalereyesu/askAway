import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/reports',
    icon: <BsIcons.BsFillPersonFill />,
    cName: 'nav-text'
  },
  {
    title: 'Categories',
    path: '/products',
    icon: <BsIcons.BsFillGridFill />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/team',
    icon: <BsIcons.BsSearch />,
    cName: 'nav-text'
  },
  {
      title: 'Notifications',
      path : '/notifications',
      icon: <BsIcons.BsFillBellFill/>,
      cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/messages',
    icon: <BsIcons.BsFillGearFill />,
    cName: 'nav-text'
  },
];