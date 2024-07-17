import React from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableNativeFeedback,
  View,
} from "react-native";
import {
  Border,
  FlexDirection,
  Gap,
  TouchableFeedback,
} from "./../assets/styles/GlobalStyles";
import CLabel from "./CLabel";
import { ComponentStyles } from "./../assets/styles/ComponentStyles";

type CButtonProps = {
  Icon?: React.ReactNode;
  IconRight?: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textContainerStyle?: StyleProp<TextStyle>;
  label?: string;
  ellipsisMode?: boolean | false;
  onPress?: () => void;
};

const CButton = ({
  Icon,
  IconRight,
  buttonStyle,
  textStyle,
  label,
  textContainerStyle,
  ellipsisMode,
  onPress,
}: CButtonProps) => {
  return (
    <TouchableNativeFeedback
      background={TouchableFeedback.background}
      onPress={onPress}
    >
      <View style={[ComponentStyles.cButton, buttonStyle]}>
        {Icon && Icon}
        {label && (
          <CLabel
            label={label}
            textStyle={textStyle}
            containerStyle={textContainerStyle}
            ellipsisMode={ellipsisMode}
          />
        )}
        {IconRight && IconRight}
      </View>
    </TouchableNativeFeedback>
  );
};

export default CButton;
