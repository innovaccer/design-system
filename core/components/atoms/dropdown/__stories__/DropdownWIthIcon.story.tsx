import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [
  {
    label: 'Alabama',
    value: 'AL',
  },
  {
    label: 'Alaska',
    value: 'AK',
  },
  {
    label: 'Arizona',
    value: 'AZ',
  },
  {
    label: 'Arkansas',
    value: 'AR',
  },
  {
    label: 'California',
    value: 'CO',
  },
  {
    label: 'Connecticut',
    value: 'CT',
  },
  {
    label: 'Delaware',
    value: 'DE',
  },
  {
    label: 'Florida',
    value: 'FL',
  },
  {
    label: 'Georgia',
    value: 'GA',
  },
  {
    label: 'Hawaii',
    value: 'HI',
  },
  {
    label: 'Idaho',
    value: 'ID',
  },
  {
    label: 'Illinois',
    value: 'IL',
  },
  {
    label: 'Indiana',
    value: 'IN',
  },
  {
    label: 'Iowa',
    value: 'IA',
  },
  {
    label: 'Kansas',
    value: 'KS',
  },
  {
    label: 'Kentucky',
    value: 'KY',
  },
  {
    label: 'Louisiana',
    value: 'LA',
  },
  {
    label: 'Maine',
    value: 'ME',
  },
  {
    label: 'Maryland',
    value: 'KY',
  },
  {
    label: 'Massachusetts',
    value: 'MA',
  },
  {
    label: 'Michigan',
    value: 'MI',
  },
  {
    label: 'Minnesota',
    value: 'MN',
  },
  {
    label: 'Mississippi',
    value: 'MS',
  },
  {
    label: 'Missouri',
    value: 'MO',
  },
  {
    label: 'Montana',
    value: 'MT',
  },
  {
    label: 'Nebraska',
    value: 'NE',
  },
  {
    label: 'Nevada',
    value: 'NV',
  },
  {
    label: 'New Hampshire',
    value: 'NT',
  },
  {
    label: 'New Jersey',
    value: 'NJ',
  },
  {
    label: 'New Mexico',
    value: 'NM',
  },
  {
    label: 'New York',
    value: 'NY',
  },
  {
    label: 'North Carolina',
    value: 'NC',
  },
  {
    label: 'North Dakota',
    value: 'ND',
  },
  {
    label: 'Ohio',
    value: 'OH',
  },
  {
    label: 'Oklahoma',
    value: 'OK',
  },
  {
    label: 'Oregon',
    value: 'OR',
  },
  {
    label: 'Pennsylvania',
    value: 'PA',
  },
  {
    label: 'Rhode Island',
    value: 'RI',
  },
  {
    label: 'South Carolina',
    value: 'SC',
  },
  {
    label: 'South Dakota',
    value: 'SD',
  },
  {
    label: 'Tennessee',
    value: 'TN',
  },
  {
    label: 'Texas',
    value: 'TX',
  },
  {
    label: 'Utah',
    value: 'UT',
  },
  {
    label: 'Vermont',
    value: 'VT',
  },
  {
    label: 'Virginia',
    value: 'VA',
  },
  {
    label: 'Washington',
    value: 'WA',
  },
  {
    label: 'West Virginia',
    value: 'WV',
  },
  {
    label: 'Wisconsin',
    value: 'WI',
  },
  {
    label: 'Wyoming',
    value: 'WY',
  },
];

// CSF format story
export const dropdownWithIcon = () => (
  <Dropdown options={options} icon="location_on" className="w-25" placeholder="Select state" staticLimit={100} />
);

export default {
  title: 'Components/Dropdown/Dropdown With Icon',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
        },
      },
    },
  },
};
