import { InputMaskProps } from '@/index.type';
import { Utils } from '@/index';

export const isEditable = (mask: InputMaskProps['mask'], pos: number) => typeof mask[pos] === 'object';

export const getDefaultValue = (mask: InputMaskProps['mask'], placeholderChar: InputMaskProps['placeholderChar']) => {
  let val = '';
  for (let i = 0; i < mask.length; i++) {
    val += isEditable(mask, i) ? placeholderChar : mask[i];
  }

  return val;
};

export const getDefaultValidator = (value: InputMaskProps['value']) => {
  const val = value ? value : '';

  return Utils.validators.date(val, 'mm/dd/yyyy');
}
