export let dropdownOptions: any[] = [];

for (let i = 1; i <= 50; i++) {
  dropdownOptions.push({
    label: `Option${i}`,
    value: `Option${i}`,
  });
}

export const selectedStoryOptions: any[] = [];

for (let i = 1; i <= 10; i++) {
  selectedStoryOptions.push({
    label: `Option${i}`,
    value: `Option${i}`,
    selected: i === 2,
  });
}

export const multiSelectedStoryOptions: any[] = [];

for (let i = 1; i <= 10; i++) {
  multiSelectedStoryOptions.push({
    label: `Option${i}`,
    value: `Option${i}`,
    selected: i === 2 || i === 7,
  });
}

export const storyOptions = dropdownOptions.slice(0, 10);

export const storySections = { 0: 'subheading', 5: 'subheading' };

export const subInfoItems = [
  {
    label: 'Option1',
    value: 'Option1',
    subInfo: 'subInfo'
  },
  {
    label: 'Option2',
    value: 'Option2',
    subInfo: 'subInfo'
  },
  {
    label: 'Option3',
    value: 'Option3',
    subInfo: 'subInfo',
  },
];

export const iconItems = [
  {
    label: 'Option1',
    value: 'Option1',
    icon: 'events'
  },
  {
    label: 'Option2',
    value: 'Option2',
    icon: 'events',
  },
  {
    label: 'Option3',
    value: 'Option3',
    icon: 'events',
  },
];
