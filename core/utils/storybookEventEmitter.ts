// @ts-expect-error - Missing type declarations for @storybook/addons
import addons from '@storybook/addons';

const emitter = (type: any, options: any) => addons.getChannel().emit(type, options);

export const updateKnob = (name: any, value: any) => emitter('storybookjs/knobs/change', { name, value });
