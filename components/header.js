import { Box, Image, HStack, Heading } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { router } from "expo-router";

const Header = ({ title, withBack = false }) => {
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
          <TouchableOpacity onPress={() => router.replace('/')}>
            <Ionicons name="log-out-outline" size={25} color="white" />
          </TouchableOpacity>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;