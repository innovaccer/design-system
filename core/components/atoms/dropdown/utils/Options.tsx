export let dropdownOptions: any[] = [];
export const group1: any[] = [];
const group2: any[] = [];

for (let i = 1; i <= 40; i++) {
  group1.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
  });
}

for (let i = 41; i <= 50; i++) {
  group2.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
  });
}

dropdownOptions.push({
  group: true,
  label: 'Group 1',
  items: group1,
});

dropdownOptions.push({
  group: true,
  label: 'Group 2',
  items: group2,
});

export const selectedStoryOptions: any[] = [];

for (let i = 1; i <= 10; i++) {
  selectedStoryOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    selected: i === 2,
  });
}

export const multiSelectedStoryOptions: any[] = [];

for (let i = 1; i <= 10; i++) {
  multiSelectedStoryOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    selected: i === 2 || i === 7,
  });
}

export const storyOptions = group1.slice(0, 10);

export const storyWrapOptions = [
  {
    label: 'Design System Dropdown',
    value: 'Design System Dropdown'
  },
  {
    label: 'UI Kit Dropdown',
    value: 'UI Kit Dropdown',
  },
  {
    label: 'Innovaccer Analytics',
    value: 'Innovaccer Analytics'
  }
];

export const subInfoItems = [
  {
    label: 'Option 1',
    value: 'Option 1',
    subInfo: 'subInfo'
  },
  {
    label: 'Option 2',
    value: 'Option 2',
    subInfo: 'subInfo'
  },
  {
    label: 'Option 3',
    value: 'Option 3',
    subInfo: 'subInfo',
  },
];

export const iconItems = [
  {
    label: 'Option 1',
    value: 'Option 1',
    icon: 'events'
  },
  {
    label: 'Option 2',
    value: 'Option 2',
    icon: 'events',
  },
  {
    label: 'Option 3',
    value: 'Option 3',
    icon: 'events',
  },
];
