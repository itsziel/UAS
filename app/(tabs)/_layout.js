import { Tabs } from "expo-router/tabs";
import { Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const noHead = { headerShown: false };

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "home":
              iconName = "home-outline";
              break;
            case "event":
              iconName = "calendar-outline";
              break;
            case "collaboration":
              iconName = "chatbox-outline";
              break;
            case "notifikasi":
              iconName = "notifications-outline";
              break;
            case "profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "red" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text mb="$2" color={focused ? "$black" : color} fontSize="$sm">
              {children}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home", ...noHead }} />
      <Tabs.Screen name="event" options={{ title: "Event", ...noHead }} />
      <Tabs.Screen name="collaboration" options={{ title: "Collab", ...noHead }} />
      <Tabs.Screen name="notifikasi" options={{ title: "Notifikasi", ...noHead }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", ...noHead }} />
    </Tabs>
  );
};

export default TabsLayout;