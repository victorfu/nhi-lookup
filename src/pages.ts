const DAILY_DOC_V1_JSON = {
  MSH: 6,
  A00: 6,
  A01: 6,
  MB: 7,
  MB1: 7,
  A16: 7,
  A11: 7,
  A12: 7,
  A13: 7,
  A20: 7,
  A21: 7,
  A23: 7,
  A24: 8,
  A17: 8,
  A19: 8,
  A18: 8,
  A14: 9,
  A15: 9,
  A22: 9,
  A25: 9,
  A26: 9,
  A27: 9,
  A28: 9,
  A29: 10,
  A30: 10,
  A31: 10,
  A32: 10,
  A33: 10,
  A34: 10,
  A35: 10,
  A41: 10,
  A42: 11,
  A43: 11,
  A44: 11,
  A51: 12,
  A52: 12,
  A53: 12,
  A54: 13,
  A55: 13,
  A56: 13,
  A57: 13,
  A58: 13,
  A59: 13,
  A71: 14,
  MB2: 14,
  A72: 14,
  A73: 14,
  A74: 15,
  A75: 15,
  A76: 15,
  A77: 15,
  A78: 16,
  A79: 16,
  A80: 16,
  A81: 16,
  A91: 17,
};

// page number needs to add one because of page number on document
// is different from page number on pdf
const DAILY_DOC_V2_JSON = {
  MSH: 27,
  H00: 27,
  H01: 27,
  MB: 27,
  MB1: 27,
  M01: 27,
  M02: 27,
  M03: 27,
  M04: 27,
  M05: 27,
  M06: 27,
  M07: 27,
  M08: 28,
  M09: 28,
  M10: 28,
  M11: 28,
  M12: 28,
  M13: 29,
  M14: 29,
  M15: 29,
  M16: 29,
  M17: 29,
  M18: 29,
  M19: 29,
  M20: 29,
  M21: 29,
  M22: 29,
  M23: 30,
  M24: 30,
  M25: 30,
  M26: 30,
  M27: 30,
  M28: 30,
  M29: 31,
  M30: 31,
  M31: 31,
  M32: 31,
  M33: 31,
  M34: 31,
  M35: 31,
  M36: 31,
  M37: 31,
  M38: 31,
  M39: 31,
  M40: 31,
  M41: 31,
  M42: 31,
  M43: 31,
  M44: 31,
  M45: 31,
  M46: 31,
  M47: 32,
  M48: 32,
  M49: 32,
  M50: 32,
  M51: 32,
  M52: 32,
  M53: 32,
  M54: 32,
  M55: 32,
  MB2: 33,
  D01: 33,
  D02: 33,
  D03: 33,
  D04: 34,
  D05: 34,
  D06: 35,
  D07: 35,
  D08: 35,
  D09: 35,
  D10: 35,
  D11: 35,
  D12: 36,
  D13: 36,
  D14: 36,
  D15: 36,
};

const MONTHLY_DOC_JSON = {
  t1: 1,
  t2: 1,
  t3: 1,
  t4: 1,
  t5: 1,
  t6: 1,
  t7: 1,
  t8: 1,
  t9: 1,
  t10: 1,
  t11: 1,
  t12: 1,
  t13: 1,
  t14: 1,
  t15: 2,
  t16: 2,
  t17: 2,
  t18: 2,
  t19: 2,
  t20: 2,
  t21: 2,
  t22: 2,
  t23: 2,
  t24: 2,
  t25: 2,
  t26: 2,
  t27: 2,
  t28: 2,
  t29: 2,
  t30: 2,
  t31: 2,
  t32: 2,
  t33: 2,
  t34: 3,
  t35: 3,
  t36: 3,
  t37: 3,
  t38: 3,
  t39: 3,
  t40: 3,
  t41: 3,
  t42: 3,
  d1: 4,
  d2: 5,
  d4: 6,
  d5: 6,
  d6: 6,
  d7: 6,
  d8: 6,
  d9: 6,
  d10: 6,
  d11: 7,
  d12: 7,
  d13: 7,
  d14: 8,
  d15: 8,
  d16: 9,
  d17: 9,
  d18: 10,
  d19: 10,
  d20: 10,
  d21: 10,
  d22: 10,
  d23: 10,
  d24: 10,
  d25: 10,
  d26: 10,
  d27: 11,
  d28: 11,
  d29: 11,
  d30: 12,
  d31: 12,
  d32: 12,
  d33: 12,
  d34: 12,
  d35: 13,
  d36: 13,
  d37: 13,
  d38: 13,
  d39: 13,
  d40: 13,
  d41: 13,
  d42: 13,
  d43: 14,
  d44: 14,
  d45: 14,
  d48: 14,
  d49: 14,
  d50: 14,
  d51: 14,
  d52: 15,
  d53: 15,
  d54: 16,
  d55: 16,
  d56: 16,
  d57: 16,
  d58: 16,
  d59: 16,
  p1: 17,
  p2: 17,
  p3: 17,
  p4: 18,
  p5: 19,
  p6: 19,
  p7: 20,
  p8: 20,
  p9: 20,
  p10: 20,
  p11: 20,
  p12: 20,
  p13: 21,
  p14: 21,
  p15: 22,
  p16: 23,
  p17: 23,
  p18: 23,
  p19: 24,
  p20: 24,
  p21: 24,
  p22: 24,
  p23: 24,
  p24: 25,
  p25: 25,
};

export const TYPE_DAILY_DOC_V1 = "TYPE_DAILY_DOC_V1";
export const TYPE_DAILY_DOC_V2 = "TYPE_DAILY_DOC_V2";
export const TYPE_MONTHLY_DOC = "TYPE_MONTHLY_DOC";
export const TYPE_NONE = "TYPE_NONE";

const containsUpperCase = (str: string): boolean => str !== str.toLowerCase();

export const findTagPage = (tag: string): [number, string] => {
  const dailyDocV1Keys = Object.keys(DAILY_DOC_V1_JSON);
  const dailyDocV2Keys = Object.keys(DAILY_DOC_V2_JSON);
  const monthlyDocKeys = Object.keys(MONTHLY_DOC_JSON);

  const hasUpperCase = containsUpperCase(tag);
  if (hasUpperCase) {
    const upperTag = tag.toUpperCase();
    if (dailyDocV1Keys.includes(upperTag)) {
      return [DAILY_DOC_V1_JSON[upperTag], TYPE_DAILY_DOC_V1];
    }
    if (dailyDocV2Keys.includes(upperTag)) {
      return [DAILY_DOC_V2_JSON[upperTag] + 1, TYPE_DAILY_DOC_V2];
    }
  } else {
    const lowerTag = tag.toLowerCase();
    if (monthlyDocKeys.includes(lowerTag)) {
      return [MONTHLY_DOC_JSON[lowerTag], TYPE_MONTHLY_DOC];
    }
  }

  return [-1, TYPE_NONE];
};

export const findTagPageInDailyDocV1 = (tag: string): [number, string] => {
  const dailyDocV1Keys = Object.keys(DAILY_DOC_V1_JSON);
  const upperTag = tag.toUpperCase();
  if (dailyDocV1Keys.includes(upperTag)) {
    return [DAILY_DOC_V1_JSON[upperTag], TYPE_DAILY_DOC_V1];
  }
  return [-1, TYPE_NONE];
};

export const findTagPageInDailyDocV2 = (tag: string): [number, string] => {
  const dailyDocV2Keys = Object.keys(DAILY_DOC_V2_JSON);
  const upperTag = tag.toUpperCase();
  if (dailyDocV2Keys.includes(upperTag)) {
    return [DAILY_DOC_V1_JSON[upperTag] + 1, TYPE_DAILY_DOC_V1];
  }
  return [-1, TYPE_NONE];
};

export const findTagPageInMonthlyDoc = (tag: string): [number, string] => {
  const monthlyDocKeys = Object.keys(MONTHLY_DOC_JSON);
  const lowerTag = tag.toLowerCase();
  if (monthlyDocKeys.includes(lowerTag)) {
    return [MONTHLY_DOC_JSON[lowerTag], TYPE_MONTHLY_DOC];
  }
  return [-1, TYPE_NONE];
};
