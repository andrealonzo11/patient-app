import React, { useState } from "react";
import { View } from "react-native";
import { Color, Padding } from "./../assets/styles/GlobalStyles";
import { ComponentStyles } from "./../assets/styles/ComponentStyles";
import { Dropdown } from "react-native-element-dropdown";
import CDropdownList from "./CDropdownList";
import ChevronDown from "../../assets/icons/down.svg";
import CLabel from "./CLabel";

type CDropdownInputProps = {
  data: any;
  value?: any;
  placeholder?: string;
  labelField: string;
  valueField: string;
  onChange: (item: any) => void;
  disable?: boolean;
  errorMessage?: string;
};

const CDropdownInput = ({
  data,
  value,
  placeholder,
  labelField,
  valueField,
  onChange,
  disable = false,
  errorMessage,
}: CDropdownInputProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <View>
      <Dropdown
        style={[
          ComponentStyles.dropDownStyle,
          {
            borderColor: focus ? Color.primary : Color.lightgrey,
            backgroundColor: disable ? Color.grey3 : Color.white,
          },
        ]}
        placeholderStyle={{
          color: Color.placeholder,
        }}
        containerStyle={{
          marginTop: 5,
        }}
        selectedTextStyle={ComponentStyles.dropDownSelectedStyle}
        data={data}
        disable={disable}
        maxHeight={300}
        placeholder={!focus ? placeholder : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
        onChange={onChange}
        renderItem={(item: any) => {
          return <CDropdownList name={item[labelField]} />;
        }}
        renderRightIcon={() => (
          <View style={{ paddingRight: Padding.p5 }}>
            {/* <ChevronDown /> */}
          </View>
        )}
        labelField={labelField}
        valueField={valueField}
      />
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

export default CDropdownInput;
