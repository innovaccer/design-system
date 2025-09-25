export const behavioralData = {
  title: 'Behavioral Health',
  titleDescription: 'Patient has complex behavioral health needs requiring coordinated care approach.',
  categories: [
    {
      id: '1',
      title: 'Mental Health',
      insights: [
        {
          id: '1-1',
          title: 'Depression Screening',
          iconName: 'psychology',
          iconAppearance: 'alert',
          borderColor: 'var(--mirch)',
          backgroundColor: 'var(--mirch-lightest-2)',
          selected: true,
        },
        {
          id: '1-2',
          title: 'Anxiety Symptoms',
          iconName: 'warning',
          iconAppearance: 'warning',
          borderColor: 'var(--tawak)',
          backgroundColor: 'var(--tawak-lightest-2)',
          selected: false,
        },
      ],
    },
    {
      id: '2',
      title: 'Substance Use',
      insights: [
        {
          id: '2-1',
          title: 'Tobacco Use',
          iconName: 'smoking_rooms',
          iconAppearance: 'subtle',
          borderColor: '#6C757D',
          backgroundColor: '#F8F9FA',
          selected: false,
        },
      ],
    },
  ],
};
