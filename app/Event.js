import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Box, View, Center, Image, Heading, Text, 
         Button, HStack, Divider, ChevronLeftIcon, ChevronRightIcon, NativeBaseProvider, VStack } from 'native-base';
import { router } from "expo-router";
import slides from '../slides';

const Event = () => {

  const [IsPressed, setIsPressed] = useState(false);

    const validateUser = () => {
        setIsPressed(true); 
        router.replace('/Certificate')
      };

      const handleBack = () => {
       router.replace('/LandingPage')
      };

  const item = slides[0];

  return (
    <NativeBaseProvider>
        <Box safeAreaTop flex={1}>
        <ImageBackground source={require('../assets/Images/Red1.png')} flex={1}  resizeMode="cover">
            <Image
                resizeMode="contain"
                source={item.image}
                alt="Calendar"
                w={400}
                h={350}
            />
            <Heading size="lg" mt={2} px={10}>
            {item.title}
            </Heading>
            <Text px={10} mt={5} mb={3}>
            {item.description}
            </Text>

            <Center>
                <HStack space={3} p={4} mt={35} mb={20}>
                <Button
                    bg={'muted.400'}
                    w='40%'
                    h={60}
                    onPress={handleBack}
                    borderColor={'white.500'}>
                    <HStack space={2}>
                    <ChevronLeftIcon size={5} color={'black'} mt={1} pl={4} />
                    <Text fontSize={'lg'} pr={3}> Back</Text>
                    </HStack>
                </Button>
                <Divider orientation="vertical" bg="gray.200" />
                <Button
                    bg={IsPressed ? 'gray.500' : 'red.700'}
                    w='40%'
                    h={60}
                    onPress={validateUser}>
                    <HStack space={2}>
                    <Text fontSize={'lg'} bold pl={3}>Next</Text>
                    <ChevronRightIcon size={5} color={'black'} mt={1} pr={4} />
                    </HStack>
                </Button>
                </HStack>
            </Center>
        </ImageBackground>
        </Box>
    </NativeBaseProvider>
  );
};

export default Event;
