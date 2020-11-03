import { InputMaskProps } from '@/index.type';

export const isEditable = (mask: InputMaskProps['mask'], pos: number) => typeof mask[pos] === 'object';

export const getDefaultValue = (mask: InputMaskProps['mask'], placeholderChar: InputMaskProps['placeholderChar']) => {
  let val = '';
  for (let i = 0; i < mask.length; i++) {
    val += isEditable(mask, i) ? placeholderChar : mask[i];
  }

  return val;
};
