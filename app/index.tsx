import { ThemedView } from "@/components/ThemedView";
import { ScreenStyles } from "@/assets/styles/ScreenStyles";

import PatientList from "@/components/PatientList";
import { ThemedText } from "@/components/ThemedText";
import { ComponentStyles } from "@/assets/styles/ComponentStyles";

export default function HomeScreen() {
  return (
    <ThemedView style={ScreenStyles.defaultContainer}>
      <ThemedView style={ScreenStyles.defaultFlexContainer}>
        <ThemedText
          style={[
            ComponentStyles.title,
            { alignSelf: "center", marginTop: 20 },
          ]}
        >
          Patient List
        </ThemedText>
        <PatientList />
      </ThemedView>
    </ThemedView>
  );
}
