import { ThemedView } from "@/components/ThemedView";
import { ScreenStyles } from "@/assets/styles/ScreenStyles";

import PatientList from "@/components/PatientList";

export default function HomeScreen() {
  return (
    <ThemedView style={ScreenStyles.defaultContainer}>
      <ThemedView style={ScreenStyles.defaultFlexContainer}>
        <PatientList />
      </ThemedView>
    </ThemedView>
  );
}
