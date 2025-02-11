import React from 'react';
import { VerticalNav } from '@/index';
import figma from '@figma/code-connect';

figma.connect(VerticalNav, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1878-14963', {
  imports: ["import { VerticalNav } from '@innovaccer/design-system'"],
  props: {
    expanded: figma.enum('Variant', {
      Collapsed: false,
      Basic: true,
      'With sections': true,
    }),
  },
  example: (props) => (
    <VerticalNav
      {...props}
      menus={[
        {
          name: 'patient_360',
          label: 'Patient 360',
          icon: 'assignment_ind',
          link: '/patient360',
          count: 10,
        },
        {
          name: 'care_management',
          label: 'Care Management and Resources',
          icon: 'forum',
          count: 2,
          subMenu: [
            {
              name: 'care_management.timeline',
              label: 'Timeline',
              icon: 'events',
            },
            {
              name: 'care_management.care_plans',
              label: 'Care Plans',
              icon: 'events',
            },
          ],
        },
        {
          name: 'episodes',
          label: 'Episodes',
          disabled: true,
          icon: 'airline_seat_flat_angled',
          count: 5,
        },
      ]}
    />
  ),
});
