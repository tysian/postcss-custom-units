import postcss from 'postcss';
import { expect, test } from 'vitest';
import postcssCustomUnits from '../dist/index.mjs';

test('transform 16rpx to 1rem', () => {
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
    .process(RAW_CSS, {
      from: undefined,
    })
    .then((res) => {
      expect(res.css).toBe(EXPECTED_CSS);
    });
});
