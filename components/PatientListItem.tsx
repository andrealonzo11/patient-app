import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ComponentStyles } from "@/assets/styles/ComponentStyles";
import { PatientModel } from "patient_lib";
import { ScreenStyles } from "@/assets/styles/ScreenStyles";
import MapPinIcon from "../assets/icons/map-pin.svg";
import { router } from "expo-router";

type PatientListItemProps = {
  patient?: PatientModel;
};

const PatientListItem = ({ patient }: PatientListItemProps) => {
  return (
    <TouchableOpacity
      style={ComponentStyles.addressItemContainer}
      onPress={() => {
        console.log(patient);

        router.push({
          pathname: "patientform",
          params: { ...patient, isEdit: "true" },
        });
      }}
    >
      <Text style={ComponentStyles.addressTitleText}>
        # {patient?.medicalRecordNo}
      </Text>

      <View style={ComponentStyles.addressDetailsContainer}>
        <View style={ScreenStyles.flexJustPadding1}>
          <View style={ScreenStyles.flexDirRow}>
            {/* <UserIcon height={16} width={16} /> */}
            <Text style={ComponentStyles.addressDetailsText}>
              {`${patient?.firstName} ${patient?.middleName} ${patient?.lastName}`}
            </Text>
          </View>

          <View style={ScreenStyles.flexDirRow}>
            {/* <PhoneIcon height={16} width={16} /> */}
            <Text style={ComponentStyles.addressDetailsText}>
              {patient?.gender}
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

        <View style={ScreenStyles.flexJustPadding1}>
          <View style={ScreenStyles.flexDirRow}>
            {/* <UserIcon height={16} width={16} /> */}
            <Text
              style={ComponentStyles.addressDetailsText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {patient?.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PatientListItem;
