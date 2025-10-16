import { InsightCardData } from '../types';

export const data: InsightCardData = {
  title: 'Insights on Charles',
  description:
    'Charles Lawson, 42, from Santa Rita Jail 4 days ago. Diagnosed with moderate asthma. No active medication refills. Recent ED visit for respiratory distress. History of unstable housing and behavioral health engagement.',
  categories: [
    {
      id: 'clinical',
      title: 'Clinical',
      insights: [
        {
          id: 'clinical-1',
          title: 'No Inhaler Access',
          iconName: 'report',
          iconAppearance: 'alert',
          borderColor: 'var(--mirch)',
          backgroundColor: 'var(--mirch-lightest-2)',
          selected: true,
        },
        {
          id: 'clinical-2',
          title: 'Complex follow-up schedule',
          iconName: 'warning',
          iconAppearance: 'warning',
          borderColor: 'var(--tawak)',
          backgroundColor: 'var(--tawak-lightest-2)',
          selected: false,
        },
      ],
    },
    {
      id: 'social',
      title: 'Social',
      insights: [
        {
          id: 'social-1',
          title: 'Food Insecurity Risk',
          iconName: 'warning',
          iconAppearance: 'warning',
          borderColor: 'var(--tawak)',
          backgroundColor: 'var(--tawak-lightest-2)',
          selected: false,
        },
      ],
    },
    {
      id: 'behavioral',
      title: 'Behavioral',
      insights: [
        {
          id: 'behavioral-1',
          title: 'This information is protected.',
          iconName: 'info',
          iconAppearance: 'subtle',
          borderColor: 'var(--night-lighter)',
          backgroundColor: 'var(--stone-lightest)',
          selected: false,
        },
      ],
    },
  ],
};
