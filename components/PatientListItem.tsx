import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ComponentStyles } from "@/assets/styles/ComponentStyles";
import { PatientModel } from "patient_lib";
import { ScreenStyles } from "@/assets/styles/ScreenStyles";
import MapPinIcon from "../assets/icons/map-pin.svg";

type PatientListItemProps = {
  patient?: PatientModel;
};

const PatientListItem = ({ patient }: PatientListItemProps) => {
  console.log(patient);

  return (
    <TouchableOpacity
      style={ComponentStyles.addressItemContainer}
      onPress={() => {}}
    >
      <Text style={ComponentStyles.addressTitleText}>
        # {patient?.medicalRecordNo}
      </Text>

      <View style={ComponentStyles.addressDetailsContainer}>
        <View>
          <View style={ScreenStyles.flexDirRow}>
            {/* <MapPinIcon height={16} width={16} /> */}
            <Text
              style={ComponentStyles.addressDetailsText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {`${patient?.firstName} ${patient?.middleName} ${patient?.lastName}`}
            </Text>
          </View>
        </View>

        <View style={ScreenStyles.flexJustPadding1}>
          <View style={ScreenStyles.flexDirRow}>
            {/* <UserIcon height={16} width={16} /> */}
            <Text style={ComponentStyles.addressDetailsText}>
              {patient?.address}
            </Text>
          </View>
        </View>

        <View style={ScreenStyles.flexJustPadding1}>
          <View style={ScreenStyles.flexDirRow}>
            {/* <UserIcon height={16} width={16} /> */}
            <Text style={ComponentStyles.addressDetailsText}>
              {patient?.email}
            </Text>
          </View>

          <View style={ScreenStyles.flexDirRow}>
            {/* <PhoneIcon height={16} width={16} /> */}
            <Text style={ComponentStyles.addressDetailsText}>
              {patient?.mobile}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PatientListItem;
