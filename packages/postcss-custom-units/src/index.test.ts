import postcss from 'postcss';
import { expect, it } from 'vitest';
import postcssCustomUnits from './index';

it('transform 16rpx to 1rem', () => {
  const RAW_CSS = 'body {font-size: 16rpx}';
  const EXPECTED_CSS = 'body {font-size: 1rem}';
  postcss([
    postcssCustomUnits({
      units: [
        {
          base: '0.0625rem',
          unit: 'rpx',
        },
      ],
    }),
  ])
    .process(RAW_CSS, { from: undefined })
    .then((res) => {
      expect(res.css).toBe(EXPECTED_CSS);
    });
});

it('transform 24rpx to 2.4rem', () => {
  const RAW_CSS = 'body {font-size: 24rpx}';
  const EXPECTED_CSS = 'body {font-size: 2.4rem}';
  postcss([
    postcssCustomUnits({
      units: [
        {
          base: '0.1rem',
          unit: 'rpx',
          fixRounding: true,
        },
      ],
    }),
  ])
    .process(RAW_CSS, { from: undefined })
    .then((res) => {
      expect(res.css).toBe(EXPECTED_CSS);
    });
});
