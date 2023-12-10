import { useState, React } from 'react';
import { ImageBackground } from 'react-native';
import { Box, View, Center, Image, Heading, Text, Button, HStack, Divider, ChevronLeftIcon, ChevronRightIcon, NativeBaseProvider} from 'native-base';
import { router } from "expo-router";
import slides from '../slides';

const Beasiswa = () => {
  const [IsPressed, setIsPressed] = useState(false);

  const validateUser = () => {
    setIsPressed(true); 
    router.push('/login')
  };

  const handleBack = () => {
   router.push('/Certificate')
  };
const item = slides[2];
  
  return (
    <NativeBaseProvider>
        <Box safeAreaTop flex={1}> 
        <ImageBackground
        source={require('../assets/Images/Red3.png')}
        w='100%'
        h='100%'
        >
            <View>
                <Image
                    resizeMode="contain"
                    source={item.image}
                    alt="KampusXpert"
                    w={400}
                    h={350}
                />
                <Heading size="lg" mt={2} px={10}>
                {item.title}
                </Heading>
                <Text px={10} mt={3} mb={3}>
                {item.description}
                </Text>

                <Center>
                <HStack space={3} p={4} mt={22} mb={20}>
                <Button
                    bg={'muted.400'}
                    w='40%'
                    h={60} 
                    onPress={handleBack}
                    borderColor={'white.500'}
                    >
                    <HStack space={2}>
                        <ChevronLeftIcon size={5} color={'black'} mt={1} pl={4}/>
                        <Text fontSize={'lg'} pr={3}> Back</Text>
                    </HStack>
                    </Button>
                    <Divider orientation="vertical" bg="gray.200"/>
                    <Button 
                    bg={IsPressed? 'grey.400' : 'red.700'} 
                    w='40%'
                    h={60}
                    onPress={validateUser} >
                        <HStack space={2}>
                        <Text fontSize={'lg'} bold pl={3}>Next</Text>
                        <ChevronRightIcon size={5} color={'black'} mt={1} pr={4}/>
                        </HStack>
                    </Button>
                </HStack>
                </Center>
            </View>
        </ImageBackground>
        </Box>
    </NativeBaseProvider>
  );
};

export default Beasiswa;