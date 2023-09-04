import { FontVariationType } from './Icon';

const getOpticalSize = (size?: number) => {
  if (size && size <= 20) {
    return 20;
  } else if (size && size >= 48) {
    return 48;
  }

  return size;
};

const iconVariantMapper: Record<string, object> = {
  more_horiz: {
    weight: 600,
    opticalSize: 24,
  },
  delete: {
    fill: 0,
  },
  radio_button_checked: {
    fill: 0,
  },
  radio_button_unchecked: {
    fill: 0,
  },
  schedule: {
    fill: 0,
  },
  help_outline: {
    fill: 0,
  },
  check_circle_outline: {
    fill: 0,
  },
  highlight_of: {
    fill: 0,
  },
  credit_card: {
    fill: 0,
  },
  delete_outline: {
    fill: 0,
  },
  bookmark_border: {
    fill: 0,
  },
  work_outline: {
    fill: 0,
  },
  alarm: {
    fill: 0,
  },
  arrow_circle_up: {
    fill: 0,
  },
  copyright: {
    fill: 0,
  },
  query_builder: {
    fill: 0,
  },
  card_membership: {
    fill: 0,
  },
  arrow_circle_down: {
    fill: 0,
  },
  change_history: {
    fill: 0,
  },
  aspect_ratio: {
    fill: 0,
  },
  calendar_view_month: {
    fill: 0,
  },
  alarm_on: {
    fill: 0,
  },
  thumb_down_off_alt: {
    fill: 0,
  },
  important_devices: {
    fill: 0,
  },
  turned_in_not: {
    fill: 0,
  },
  add_circle_outline: {
    fill: 0,
  },
  speed: {
    fill: 0,
  },
  content_copy: {
    fill: 0,
  },
  timelapse: {
    fill: 0,
  },
};

export const getFontVariation = (iconName: string, variations?: FontVariationType, type?: string, size?: number) => {
  const defaultVariant = {
    fill: type === 'outlined' ? 0 : 1,
    weight: 400,
    grade: 0,
    opticalSize: getOpticalSize(size),
  };

  return { ...defaultVariant, ...iconVariantMapper[iconName], ...variations };
};
