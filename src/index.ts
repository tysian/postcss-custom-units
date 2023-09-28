import type { Root } from 'postcss';
import { parseCSSUnitValue } from './utils/parseCSSUnitValue';

export interface CustomUnit {
  /**
   * Base unit
   *
   * 1customunit = 1baseunit
   * @example
   * ```scss
   * 1rpx = 0.0625rem
   * ```
   */
  base: string;
  unit: string;
}

export interface PostCSSCustomUnitsOptions {
  units: CustomUnit[];
}

function plugin({ units }: PostCSSCustomUnitsOptions) {
  return {
    postcssPlugin: 'postcss-custom-units',
    Once(root: Root) {
      for (const { base, unit } of units) {
        const baseParsed = parseCSSUnitValue(base);
        if (!baseParsed) continue;
        const { value: baseValue, unit: baseUnit } = baseParsed;

        const tester = new RegExp(`((\\d+)?\\.)?\\d+${unit}`, 'g');
        root.replaceValues(
          tester,
          { fast: unit },
          (str: string) => `${parseFloat(str) * baseValue}${baseUnit}`
        );
      }
    },
  };
}

plugin.postcss = true;

export default plugin;
