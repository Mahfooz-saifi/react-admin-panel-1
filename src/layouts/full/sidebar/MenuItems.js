import {
  IconAperture, IconCopy, IconLayoutDashboard, IconMoodHappy,  IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Product',
    icon: IconLayoutDashboard,
    // href: '/dashboard',
  },
    {
    id: uniqueId(),
    title: 'Customers',
    icon: IconUserPlus,
    // href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Income',
    icon: IconMoodHappy,
    // href: '/ui/shadow',
  },
  {
    id: uniqueId(),
    title: 'Promote',
    icon: IconAperture,
    // href: '/ui/shadow',
  },
  {
    id: uniqueId(),
    title: 'Help',
    icon: IconCopy,
    // href: '/ui/shadow',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Login',
  //   icon: IconLogin,
  //   href: '/auth/login',
  // },

  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   // href: '/icons',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Sample Page',
  //   icon: IconAperture,
  //   // href: '/sample-page',
  // },
];

export default Menuitems;
