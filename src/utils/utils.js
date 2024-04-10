//Data normalisation
export const normalizeValue = (value, minValue, maxValue) => {
  if (maxValue === minValue) return 0;
  return ((value - minValue) / (maxValue - minValue)) * 100;
};
