import React, { useState } from 'react';
import { VStack, Box, Text, Image, Button, ButtonText} from "@gluestack-ui/themed";
import { router } from "expo-router";

const Welcome = () => {
  const [name, setName] = useState('Zidan')
  const validateUser = () => {
    router.replace('/home')
  }
  return (
    <>
      <Box 
      p={"$12"} 
      flexDirection="col"
      justifyContent="center"
      >
        <Image
          source={require("../assets/image_welcome.png")}
          h={300}
          w={"$full"}
          mt={50}
          mb={20}
          alt="Logo"
          role="img"
        />
        <VStack space={2} alignItems="center">
          <Text 
            justifyContent="center"
            size="xl"
            bold={true}
            mb={5}
          >
            Welcome, {name}
          </Text>
          <Text 
          justifyContent="center">
            Gapai Impianmu Bersama Kami,
          </Text>
          <Text 
            justifyContent="center"
            mb={40}
          >
            demi Masa depan
          </Text>
        </VStack>
        <Button
          size="x"
          variant="solid"
          bg="$red800"
          mx={20}
          mt={20}
          isDisabled={false}
          isFocusVisible={false}
          onPress={validateUser}
          sx={{ ":active": { bg: "$error800" } }}
        >
          <ButtonText>Go To Dasboard</ButtonText>
        </Button>
      </Box>
    </>
  );
};

export default Welcome;
