import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedView } from "./ThemedView";
import PatientListItem from "./PatientListItem";
import { ComponentStyles } from "@/assets/styles/ComponentStyles";
import CButton from "./CButton";
import { ScreenStyles } from "@/assets/styles/ScreenStyles";
import { router } from "expo-router";
import patientData from "@/files/data";

const PatientList = () => {
  const [patients, setPatients] = useState(patientData);

  return (
    <ThemedView style={ScreenStyles.defaultFlexContainer}>
      <FlatList
        data={patients}
        renderItem={({ item }) => <PatientListItem patient={item} />}
      />
      <ThemedView style={ComponentStyles.formButtonBot}>
        <CButton
          label="Add Patient"
          buttonStyle={ComponentStyles.primaryButtonContainer}
          textStyle={ComponentStyles.primaryButtonTextContainer}
          onPress={() => {
            router.push("patientform");
          }}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default PatientList;
