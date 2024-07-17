import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ComponentStyles } from "@/assets/styles/ComponentStyles";
import CLabel from "@/components/CLabel";
import CInput from "@/components/CInput";
import CButton from "@/components/CButton";
import { ScreenStyles } from "@/assets/styles/ScreenStyles";
import * as FileSystem from "expo-file-system";
import { PatientModel } from "patient_lib";
import CDropdownInput from "@/components/CDropdownInput";

const PatientForm = () => {
  const [formData, setFormData] = useState(new PatientModel());

  const handleAddPatient = async () => {
    try {
      setFormData(formData);
      console.log(formData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ThemedView style={ScreenStyles.defaultContainer}>
      <ThemedView style={ScreenStyles.defaultFlexContainer}>
        <ScrollView>
          <ThemedView style={[ComponentStyles.formMainContainer]}>
            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"First Name"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input first name"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.firstName = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Middle Name"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input middle name"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.middleName = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Last Name"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input last name"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.lastName = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"National ID"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"1111-2222-3333-4444"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.nationalId = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Medical Record #"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input medical record #"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.medicalRecordNo = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Age"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input age"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.age = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Gender"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CDropdownInput
                data={[{ gender: "Male" }, { gender: "Female" }]}
                labelField="gender"
                valueField="gender"
                onChange={(item) => (formData.gender = item.gender)}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Address"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Address"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.address = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Mobile Number"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input mobile #"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.mobile = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Email"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input Email"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.email = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Education"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input education"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.education = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Height"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Height"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.height = text;
                }}
              />
            </ThemedView>
            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Weight"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Weight"}
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.weight = text;
                }}
              />
            </ThemedView>
          </ThemedView>
        </ScrollView>
        <ThemedView style={ComponentStyles.formButtonBot2}>
          <CButton
            label="Register Patient"
            buttonStyle={ComponentStyles.primaryButtonContainer}
            textStyle={ComponentStyles.primaryButtonTextContainer}
            onPress={handleAddPatient}
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default PatientForm;
