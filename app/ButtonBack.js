import { ArrowLeftIcon, Fab, FabIcon, FabLabel } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";

const BackFAB = () => {
  return (
    <Fab rounded={"$xl"} size="lg" placement="top left" bg="$red800"
    onPress={useNavigation().goBack} mt={"$7"}>
        <FabIcon as={ArrowLeftIcon} mr={"$2"} />
      </Fab>
  );
};

export default BackFAB;