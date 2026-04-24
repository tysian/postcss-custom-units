import type { Plugin, PluginCreator, Root } from 'postcss';
import { parseCSSUnitValue } from './utils/parse-css-unit-value';

export interface PostCSSCustomUnitsOptions {
  units: {
    /**
     * Base unit
     *
     * custom-unit = 1base-unit
     * @example
     * ```css
     * 1rpx = 0.0625rem
     * ```
     */
    base: string;
    unit: string;
    /** Set this to `true` if you are getting weird output when rounding floats */
    fixRounding?: boolean;
  }[];
}

const postcssCustomUnits: PluginCreator<PostCSSCustomUnitsOptions> = (
  opts
): Plugin => {
  const options = { units: [], ...opts };

  return {
    postcssPlugin: 'postcss-custom-units',
    Once(root: Root) {
      for (const { base, unit, fixRounding = false } of options.units) {
        const baseParsed = parseCSSUnitValue(base);
        if (!baseParsed) continue;
        const { value: baseValue, unit: baseUnit } = baseParsed;

        const tester = new RegExp(`((\\d+)?\\.)?\\d+${unit}`, 'g');
        const pf = Number.parseFloat;
        const parse = (str: string): number => {
          if (fixRounding) return pf(pf(`${pf(str) * baseValue}`).toFixed(3));
          return pf(str) * baseValue;
        };

        root.replaceValues(
          tester,
          { fast: unit },
          (str: string) => `${parse(str)}${baseUnit}`
        );
      }
    },
  };
};

postcssCustomUnits.postcss = true;

export default postcssCustomUnits;
