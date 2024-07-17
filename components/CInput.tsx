import React, { useRef, useState } from "react";
import {
  TouchableNativeFeedback,
  View,
  StyleProp,
  ViewStyle,
  TextInput,
  ReturnKeyType,
  KeyboardType,
} from "react-native";
import {
  Border,
  Color,
  Font,
  FontFamily,
  Icon,
  Margin,
  TouchableFeedback,
} from "../assets/styles/GlobalStyles";
import { IconNode, Icon as Icons } from "@rneui/base";
import { ComponentStyles } from "../assets/styles/ComponentStyles";
import CLabel from "./CLabel";
// import Secure from '../../assets/icons/eye.svg';
// import Unsecure from '../../assets/icons/eye-off.svg';

type CInputProps = {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder: string;
  onChangeText?: (val: string) => void;
  onBlur?: (val: string) => void;
  onSubmitEditing?: () => void;
  isSecure?: boolean | false;
  icon?: string;
  iconType?: string;
  returnKeyType?: ReturnKeyType;
  keyboardType?: KeyboardType;
  leftIcon?: IconNode;
  rightIcon?: IconNode;
  disabled?: boolean | false;
  editable?: boolean | false;
  style?: any;
  errorMessage?: string;
};
const CInput = ({
  id,
  name,
  label,
  icon,
  iconType,
  value,
  defaultValue,
  placeholder,
  onChangeText,
  onBlur,
  onSubmitEditing,
  isSecure,
  disabled,
  style,
  editable,
  returnKeyType,
  keyboardType,
  errorMessage,
}: CInputProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [secure, setSecure] = useState(isSecure);
  const textInput = useRef<TextInput>(null);
  return (
    <View>
      <View
        style={[
          ComponentStyles.cInputContainer,
          {
            borderWidth: Border.width.w1,
            borderRadius: Border.b5,
            borderColor: focus ? Color.primary : Color.lightgrey,
          },
          style,
        ]}
      >
        {icon && (
          <Icons
            name={icon}
            color={focus ? Color.primary : Color.lightgrey}
            size={Icon.size20}
            type={iconType}
          ></Icons>
        )}
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => {
            onBlur;
            setFocus(false);
          }}
          style={[
            ComponentStyles.cInputInput,
            {
              marginLeft: icon ? 5 : 0,
            },
          ]}
          secureTextEntry={secure}
          placeholder={placeholder}
          placeholderTextColor={Color.placeholder}
          onChangeText={onChangeText}
          ref={textInput}
          value={value}
          editable={editable}
          defaultValue={defaultValue}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          id={id}
          onSubmitEditing={onSubmitEditing}
        />
        {isSecure && (
          <TouchableNativeFeedback
            background={TouchableFeedback.background}
            disabled={disabled}
            onPress={() => setSecure(!secure)}
          >
            {/* <Icons
              name={secure ? IconName.SECURED : IconName.UNSECURED}
              color={Color.primary}
              size={Icon.size20}
              type={IconType.MATERIAL_COMMUNITY}></Icons> */}
            {secure ? (
              <View>{/* <Secure height={16} width={16} /> */}</View>
            ) : (
              <View>{/* <Unsecure height={16} width={16} /> */}</View>
            )}
          </TouchableNativeFeedback>
        )}
      </View>
      {errorMessage && (
        <CLabel
          label={errorMessage}
          textStyle={ComponentStyles.errorLabelText}
          containerStyle={ComponentStyles.errorLabelContainer}
        />
      )}
    </View>
  );
};

export default CInput;
