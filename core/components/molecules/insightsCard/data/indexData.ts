export const data = {
  title: 'Insights on Charles',
  titleDescription:
    'Charles Lawson, 42, from Santa Rita Jail 4 days ago. Diagnosed with moderate asthma. No active medication refills. Recent ED visit for respiratory distress. History of unstable housing and behavioral health engagement.',
  subtitles: [
    {
      id: '1',
      title: 'Clinical',
      insights: [
        {
          id: '1-1',
          selected: true,
          title: 'No Inhaler Access',
          iconName: 'report',
          iconAppearance: 'alert',
          borderColor: 'var(--mirch)',
          backgroundColor: 'var(--mirch-lightest-2)',
        },
        {
          id: '1-2',
          selected: false,
          title: 'Complex follow-up schedule',
          iconName: 'warning',
          iconAppearance: 'accent1',
          borderColor: 'var(--tawak)',
          backgroundColor: 'var(--tawak-lightest-2)',
        },
      ],
    },
    {
      id: '2',
      title: 'Social',
      insights: [
        {
          id: '2-1',
          selected: false,
          title: 'Food Insecurity Risk',
          iconName: 'warning',
          iconAppearance: 'accent1',
          borderColor: 'var(--tawak)',
          backgroundColor: 'var(--tawak-lightest-2)',
        },
      ],
    },
    {
      id: '3',
      title: 'Behavioral',
      insights: [
        {
          id: '3-1',
          selected: false,
          title: 'This information is protected.',
          iconName: 'info',
          iconAppearance: 'subtle',
          borderColor: 'var(--night-lighter)',
          backgroundColor: 'var(--stone-lightest)',
        },
      ],
    },
  ],
};
