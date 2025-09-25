import { InsightCardData } from '../types';

export const socialData: InsightCardData = {
  title: 'Social Determinants of Health',
  description: 'Comprehensive assessment of social factors impacting patient health outcomes.',
  categories: [
    {
      id: 'housing',
      title: 'Housing',
      insights: [
        {
          id: 'housing-1',
          title: 'Unstable Housing',
          iconName: 'home',
          iconAppearance: 'alert',
          borderColor: '#D93737',
          backgroundColor: '#FCF1F1',
          selected: false,
        },
        {
          id: 'housing-2',
          title: 'Temporary Shelter',
          iconName: 'location_city',
          iconAppearance: 'warning',
          borderColor: '#FF8C00',
          backgroundColor: '#FFF8E1',
          selected: false,
        },
      ],
    },
    {
      id: 'food-security',
      title: 'Food Security',
      insights: [
        {
          id: 'food-1',
          title: 'Food Insecurity Risk',
          iconName: 'restaurant',
          iconAppearance: 'warning',
          borderColor: '#FF8C00',
          backgroundColor: '#FFF8E1',
          selected: false,
        },
      ],
    },
    {
      id: 'transportation',
      title: 'Transportation',
      insights: [
        {
          id: 'transport-1',
          title: 'Limited Transportation Access',
          iconName: 'directions_car',
          iconAppearance: 'subtle',
          borderColor: '#6C757D',
          backgroundColor: '#F8F9FA',
          selected: false,
        },
      ],
    },
  ],
};
