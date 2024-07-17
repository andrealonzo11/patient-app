import React from "react";
import { View } from "react-native";
import CLabel from "./CLabel";
import { ComponentStyles } from "./../assets/styles/ComponentStyles";

type CDropdownListProps = {
  onPress?: () => void;
  name: string;
};

const CDropdownList = ({ name }: CDropdownListProps) => {
  return (
    <View style={ComponentStyles.dropdownList}>
      <CLabel
        label={name?.toString()}
        textStyle={ComponentStyles.selectItemText}
      />
    </View>
  );
};

export default CDropdownList;
