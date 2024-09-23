import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Nested1Screen() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 21 }}>Nested Screen 1</Text>
      <Text>
        On iOS there is no back button in the top left corner. On Android, there
        is a button. (Take a look at the screenshots in the repo)
      </Text>
      <TouchableOpacity style={{ marginTop: 10 }} onPress={() => router.back()}>
        <Text style={{ textDecorationLine: "underline" }}>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => router.navigate("/nested1/nested")}
      >
        <Text style={{ textDecorationLine: "underline" }}>
          Go to other nested
        </Text>
      </TouchableOpacity>
    </View>
  );
}
