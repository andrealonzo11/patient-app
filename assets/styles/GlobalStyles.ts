import { TouchableNativeFeedback } from 'react-native';
import { ShadowProps } from 'react-native-shadow-2';

/* fonts */
export const FontFamily = {
  defaultFont: 'Arial',
  defaultFontBold: 'Arial_Bold',
  defaultFontMediumBold: 'Arial_Medium',
};
/* font sizes */
export const Font = {
  fontExtraSmall: 12,
  fontSmall: 14,
  fontNormal: 16,
  fontMediumLarge: 18,
  fontLarge: 20,
  fontHuge: 24,
  fontSubTitle: 28,
  fontTitle: 32,
};

export const LineHeight = {
  lineHeight1: 32,
  lineHeight2: 24,
  lineHeight3: 16,
  lineHeight4: 18.4
};

/* font variations */
export const FontVariation = {
  fontExtraSmallDefault: {
    fontSize: Font.fontExtraSmall,
    fontFamily: FontFamily.defaultFont,
  },
  fontExtraSmallBold: {
    fontSize: Font.fontExtraSmall,
    fontFamily: FontFamily.defaultFontBold,
  },
  fontSmallDefault: {
    fontSize: Font.fontSmall,
    fontFamily: FontFamily.defaultFont,
  },
  fontSmallBold: {
    fontSize: Font.fontSmall,
    fontFamily: FontFamily.defaultFontBold,
  },
  fontNormalDefault: {
    fontSize: Font.fontNormal,
    fontFamily: FontFamily.defaultFont,
  },
  fontNormalBold: {
    fontSize: Font.fontNormal,
    fontFamily: FontFamily.defaultFontBold,
  },
  fontMediumLargeDefault: {
    fontSize: Font.fontMediumLarge,
    fontFamily: FontFamily.defaultFont,
  },
  fontMediumLargeBold: {
    fontSize: Font.fontMediumLarge,
    fontFamily: FontFamily.defaultFontBold,
  },
  fontLargeDefault: {
    fontSize: Font.fontLarge,
    fontFamily: FontFamily.defaultFont,
  },
  fontLargeBold: {
    fontSize: Font.fontLarge,
    fontFamily: FontFamily.defaultFontBold,
  },
  fontHugeDefault: {
    fontSize: Font.fontHuge,
    fontFamily: FontFamily.defaultFont,
  },
  fontHugeBold: {
    fontSize: Font.fontHuge,
    fontFamily: FontFamily.defaultFontBold,
  },
  fontTitleDefault: {
    fontSize: Font.fontTitle,
    fontFamily: FontFamily.defaultFont,
  },
  fontTitleBold: {
    fontSize: Font.fontTitle,
    fontFamily: FontFamily.defaultFontBold,
  },
};

/* Colors */
export const Color = {
  primary: '#2D7171',
  primaryText: '#323232',
  secondary: '#2E7171',
  secondaryButton: '#EBEBEB',
  disabled: '#858585',
  lightgrey: '#E4E4E4',
  grey: '#BBBBBB',
  black: '#4D545E',
  black2: '#565E69',
  white: '#FFFFFF',
  red: '#DD331D',
  red2: '#AB2816',
  red3: '#FF0000',
  placeholder: '#AEB3BC',
  grey2: '#D0D4D9',
  grey3: '#EBEBEB',
  grey4: '#7B8493',
  grey5: '#F2F2F2',
  grey6: '#E0E2E5',
  grey7: '#D7E5E1',
  grey8: '#808080',
  grey9: '#EBF0EF',
  grey10: '626365',
  yellow1: '#F3FFD6',
  yellow2: '#98C729',
  yellow3: '#58790C',
  solidBlack: '#000000',
};

export const HeadingFont = {
  heading4: {
    fontSize: Font.fontSubTitle,
    lineHeight: LineHeight.lineHeight1,
    fontFamily: FontFamily.defaultFont,
  },
  heading5: {
    fontSize: Font.fontHuge,
    lineHeight: LineHeight.lineHeight1,
    fontFamily: FontFamily.defaultFont,
    color: Color.black,
  },
  heading6: {
    fontSize: Font.fontLarge,
    lineHeight: LineHeight.lineHeight2,
    fontFamily: FontFamily.defaultFont,
  },
};

/* border radiuses */
export const Border = {
  b1: 1,
  b2: 2,
  b3: 3,
  b4: 4,
  b5: 5,
  b8: 8,
  b10: 10,
  b12: 12,
  width: {
    w1: 1,
  },
};

export const Margin = {
  mn15: -15,
  mn23: -23,
  v5: 5,
  m8: 8,
  m10: 10,
  m12: 12,
  m14: 14,
  m16: 16,
  m19: 19,
  m20: 20,
  m24: 24,
  m25: 25,
  m48: 48,
  m75: 75,
  m84: 84,
  m100: 100,
  m120: 120
};

export const Padding = {
  p0: 0,
  p4: 4,
  p5: 5,
  p8: 8,
  p10: 10,
  p12: 12,
  p14: 14,
  p16: 16,
  p20: 20,
  p24: 24,
  p30: 30,
  p40: 40,
  p50: 50
};

/* Align */
export const Align = {
  center: 'center' as const,
  left: 'left' as const,
  right: 'right' as const,
  spaceBetween: 'space-between' as const,
  flexEnd: 'flex-end' as const,
  absolute: 'absolute' as const
};

export const FlexDirection = {
  row: 'row' as const,
}

export const Icon = {
  size15: 15,
  size20: 20,
  size30: 30,
  width: 35,
  size16: 16,
};

export const ZIndex = {
  level0: 0,
  level1: 1,
  level2: 2,
  level3: 3,
  level4: 4,
  level5: 5,
  level7: 7,
  level100: 100
};

export const Shadow = {
  color: '#03153D',
  offset: { width: 0, height: 8 },
  opacity: 0.5,
  radius: 5,
  elevation: 10,
};

export const ShadowTopStyle = {
  shadow: {
    startColor: 'rgba(0, 0, 0, 0.06)',
    offset: [0, -4], 
    distance: 8,
    stretch: true,
    sides: {
      top: true,
    }, 

  } as ShadowProps
}

export const ShadowBottomStyle = {
  shadow: {
    startColor: 'rgba(0, 0, 0, 0.1)',
    offset: [0, 4], 
    distance: 8 ,
    stretch: true,
    sides: {
      top: true,
    }, 

  } as ShadowProps
}

export const Gap = {
  gap4: 4,
  gap6: 6,
  gap8: 8,
  gap10: 10,
  gap12: 12,
  gap14: 14,
  gap16: 16,
  gap20: 20,
  gap24: 24,
  gap32: 32
};

export const Flex = {
  flex3: 3,
  flex1: 1,
  undefined: undefined
}

export const Height = {
  height48: 48,
  height16: 16,
  height24: 24,
  height64: 64,
  height60: '60%' as const,
  height100: '100%' as const
}

export const Width = {
  width40: 40,
  width90: 90,
  width95: 95,
  width100: '100%' as const
}

export const TouchableFeedback = {
  background: TouchableNativeFeedback.Ripple(Color.grey9, false)
};

// OrderDetailScreenStyles.itemHeader
export const HeadingText = {};

//CItemListStyles.name
export const ContentText = {};

//CAddress styles.addressDeets
export const SubHeadingText = {};
