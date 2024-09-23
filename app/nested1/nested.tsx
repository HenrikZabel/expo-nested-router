import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Nested2Screen() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 21 }}>Nested 2</Text>
      <Text>
        This is another nested screen which is not the index screen of
        "nested1". iOS and Android behave the same on this screen
      </Text>
      <TouchableOpacity style={{ marginTop: 10 }} onPress={() => router.back()}>
        <Text style={{ textDecorationLine: "underline" }}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}
