import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function IndexScreen() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 21 }}>Base Screen</Text>
      <Text>
        This is the base screen. iOS and Android behave the same on this screen
      </Text>
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => router.navigate("/nested1")}
      >
        <Text style={{ textDecorationLine: "underline" }}>Go to nested 1</Text>
      </TouchableOpacity>
    </View>
  );
}
