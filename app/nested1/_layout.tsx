import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Nested screen" }} />
      <Stack.Screen
        name="nested"
        options={{ headerTitle: "Other nested screen" }}
      />
    </Stack>
  );
}
