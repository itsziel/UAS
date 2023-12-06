import React from 'react';
import { Button, Heading, Image, Flex, Center, View, Box, NativeBaseProvider } from 'native-base';
import { router } from "expo-router";

const LandingPage = () =>  {
    const validateUser = () => {
        router.replace('/Event')
    };

  return (
    <NativeBaseProvider>
        <Box flex={1} safeAreaTop >
        <Flex direction="column" flex={1} >
            <View flex={1} justifyContent="center">
            <Center>
                <Image
                source={require('../assets/Images/KampusXpert.png')}
                alt="KampusXpert"
                resizeMode="contain"
                size={280}
                p={5}
                />
                <Button
                bg="red.700"
                mt={120} 
                width={320}
                height={55}
                borderRadius={50}
                onPress={validateUser}
                >
                <Heading size="md" color="white" textAlign="center">
                    Get Started
                </Heading>
                </Button>
            </Center>
            </View>
        </Flex>
        </Box>
    </NativeBaseProvider>
  );
};

export default LandingPage;
