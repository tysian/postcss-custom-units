const numberWithUnitRE =
  /^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i;

export interface CSSUnitValueLike {
  value: number;
  unit: string;
}

export function parseCSSUnitValue(string: string): CSSUnitValueLike | null {
  const [, value = null, unit = null] = string.match(numberWithUnitRE) ?? [];

  if (value === null || unit === null) {
    return null;
  }

  return {
    value: parseFloat(value),
    unit: unit.toString(),
  };
}
