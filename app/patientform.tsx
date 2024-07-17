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
import { patientStore } from "@/stores/patientStore";
import { useStore } from "zustand";
import { router, useLocalSearchParams } from "expo-router";

const PatientForm = () => {
  const selectedPatient: any = useLocalSearchParams();
  const [formData, setFormData] = useState(new PatientModel());
  const { patients, setPatients, deletePatients } = useStore(patientStore);

  const handleAddPatient = async () => {
    try {
      setFormData(formData);
      console.log(formData);

      setPatients([...patients, formData]);
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdatePatient = async () => {
    delete formData.isEdit;
    setFormData(formData);
    // console.log(formData);

    const index = patients.findIndex(
      (patient) => patient.medicalRecordNo === selectedPatient.medicalRecordNo
    );
    console.log(index);

    const updatedPatients = [...patients];
    updatedPatients[index] = { ...updatedPatients[index], ...formData };
    setPatients(updatedPatients);
    router.back();
  };

  const handleDeletePatient = async () => {
    const updatedPatients = patients.filter(
      (patient) => patient.medicalRecordNo !== selectedPatient.medicalRecordNo
    );
    console.log(updatedPatients);

    // setPatients(updatedPatients);
    router.back();
  };

  useEffect(() => {
    if (selectedPatient.isEdit) {
      setFormData({ ...selectedPatient });
    }
  }, []);

  return (
    <ThemedView style={ScreenStyles.defaultContainer}>
      <ThemedView style={ScreenStyles.defaultFlexContainer}>
        <ScrollView>
          <ThemedView style={[ComponentStyles.formMainContainer]}>
            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"Medical Record #"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input medical record #"}
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.medicalRecordNo : ""
                }
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.medicalRecordNo = text;
                }}
              />
            </ThemedView>

            <ThemedView style={ComponentStyles.formContainer}>
              <CLabel
                label={"First Name"}
                textStyle={[ComponentStyles.formLabelText]}
              />

              <CInput
                placeholder={"Input first name"}
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.firstName : ""
                }
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
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.middleName : ""
                }
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
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.lastName : ""
                }
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
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.nationalId : ""
                }
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.nationalId = text;
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
                defaultValue={selectedPatient.isEdit ? selectedPatient.age : ""}
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
                value={selectedPatient.isEdit ? selectedPatient.gender : ""}
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
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.address : ""
                }
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
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.mobile : ""
                }
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
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.email : ""
                }
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
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.education : ""
                }
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
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.height : ""
                }
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
                defaultValue={
                  selectedPatient.isEdit ? selectedPatient.weight : ""
                }
                style={[ComponentStyles.formInputContainer]}
                onChangeText={(text: string) => {
                  formData.weight = text;
                }}
              />
            </ThemedView>
          </ThemedView>
          {selectedPatient.isEdit && (
            <ThemedView style={ComponentStyles.formButtonBot2}>
              <CButton
                label={"Delete Patient"}
                buttonStyle={ComponentStyles.deletePatientButton}
                textStyle={ComponentStyles.primaryButtonTextContainer}
                onPress={handleDeletePatient}
              />
            </ThemedView>
          )}
        </ScrollView>
        <ThemedView style={ComponentStyles.formButtonBot2}>
          <CButton
            label={selectedPatient.isEdit ? "Update Patient" : "Add Patient"}
            buttonStyle={ComponentStyles.primaryButtonContainer}
            textStyle={ComponentStyles.primaryButtonTextContainer}
            onPress={
              selectedPatient.isEdit ? handleUpdatePatient : handleAddPatient
            }
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default PatientForm;
