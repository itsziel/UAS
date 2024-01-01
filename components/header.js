import { Box, Image, HStack, Heading } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { router } from "expo-router";
import firebase from "../app/config/FIREBASE";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = ({ title, withBack = false }) => {
  const logout = async () => {
    firebase.auth().signOut().then(() => {
        clearUserData();
      }).catch((error) => {
        console.error(error);
      });
  };
  const clearUserData = async () => {
    try {
      await AsyncStorage.clear();
      router.replace("login");
    } catch (e) {
      console.error(e);
    }
  };
  const trueGray900 = "#B80000";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor="#B80000" />
      <Box bg="#B80000" p="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                <Image
                  source={require("../assets/log.png")}
                  w="$20"
                  h="$10"
                  alt="KampusXpert"
                  role="img"
                  mr={"$5"}
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"$3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
            <Heading color={"$white"}>{title}</Heading>
          </HStack>
          <TouchableOpacity onPress={() => logout() }>
            <Ionicons name="log-out-outline" size={25} color="white" />
          </TouchableOpacity>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;