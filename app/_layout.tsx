import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Base screen" }} />
      <Stack.Screen
        name="nested1"
        options={{ headerTitle: "Nested Screen 1", headerShown: false }}
      />
    </Stack>
  );
}
