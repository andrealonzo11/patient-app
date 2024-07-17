
import { Text } from "@rneui/base";
import React from "react";
import { View, StyleProp, ViewStyle, TextStyle, TextInput } from "react-native";

type CLabelProps = {
    label?: string;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    ellipsisMode?: boolean
}
const CLabel = ({
    label, containerStyle, textStyle, ellipsisMode
}: CLabelProps) => {
   return (
    <View style={[containerStyle]}>
        <Text
            style={[textStyle]}
            ellipsizeMode={ellipsisMode ? 'tail' : undefined}
            numberOfLines={ellipsisMode ? 1 : undefined}
        >{label}</Text>
    </View>
   )
}

export default CLabel;