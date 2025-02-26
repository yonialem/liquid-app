import { Tabs } from "expo-router";
import { Image, View } from "react-native";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: (props) => (
            <View
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#94C4EC",
                borderRadius: 25,
                borderWidth: 1,
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  height: 30,
                  width: 30,
                  resizeMode: "contain",
                }}
                source={require("../../assets/images/logo.png")}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
