import type { Plugin, PluginCreator, Root } from 'postcss';
import { parseCSSUnitValue } from './utils/parseCSSUnitValue';

export interface PostCSSCustomUnitsOptions {
  units: {
    /**
     * Base unit
     *
     * 1custom-unit = 1base-unit
     * @example
     * ```css
     * 1rpx = 0.0625rem
     * ```
     */
    base: string;
    unit: string;
  }[];
}

const postcssCustomUnits: PluginCreator<PostCSSCustomUnitsOptions> = (
  opts,
): Plugin => {
  const options = { units: [], ...opts };

  return {
    postcssPlugin: 'postcss-custom-units',
    Once(root: Root) {
      for (const { base, unit } of options.units) {
        const baseParsed = parseCSSUnitValue(base);
        if (!baseParsed) continue;
        const { value: baseValue, unit: baseUnit } = baseParsed;

        const tester = new RegExp(`((\\d+)?\\.)?\\d+${unit}`, 'g');
        root.replaceValues(
          tester,
          { fast: unit },
          (str: string) => `${parseFloat(str) * baseValue}${baseUnit}`,
        );
      }
    },
  };
};

postcssCustomUnits.postcss = true;

export default postcssCustomUnits;
