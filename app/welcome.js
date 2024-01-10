import React, { useState, useEffect } from 'react';
import { VStack, Box, Text, Image, Button, ButtonText} from "@gluestack-ui/themed";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = () => {
  const validateUser = () => {
    router.replace('/home')
  }

  const [userName, setUserName] = useState("");
  const [userNIM, setUserNIM] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("user-data");
      if (userData) {
        const { name, nim } = JSON.parse(userData);
        setUserName(name);
        setUserNIM(nim);
      }
    } catch (error) {
      console.error(error);
    }
  };
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
            Welcome {userName}
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


// class component 
// import React, { Component } from 'react';
// import { VStack, Box, Text, Image, Button, ButtonText } from "@gluestack-ui/themed";
// import { router } from "expo-router";

// class Welcome extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Zidan',
//     };
//   }

//   validateUser = () => {
//     router.replace('/home');
//   }

//   render() {
//     const { name } = this.state;

//     return (
//       <>
//         <Box 
//           p={"$12"} 
//           flexDirection="col"
//           justifyContent="center"
//         >
//           <Image
//             source={require("../assets/image_welcome.png")}
//             h={300}
//             w={"$full"}
//             mt={50}
//             mb={20}
//             alt="Logo"
//             role="img"
//           />
//           <VStack space={2} alignItems="center">
//             <Text 
//               justifyContent="center"
//               size="xl"
//               bold={true}
//               mb={5}
//             >
//               Welcome, {name}
//             </Text>
//             <Text 
//               justifyContent="center"
//             >
//               Gapai Impianmu Bersama Kami,
//             </Text>
//             <Text 
//               justifyContent="center"
//               mb={40}
//             >
//               demi Masa depan
//             </Text>
//           </VStack>
//           <Button
//             size="x"
//             variant="solid"
//             bg="$red800"
//             mx={20}
//             mt={20}
//             isDisabled={false}
//             isFocusVisible={false}
//             onPress={this.validateUser}
//             sx={{ ":active": { bg: "$error800" } }}
//           >
//             <ButtonText>Go To Dasboard</ButtonText>
//           </Button>
//         </Box>
//       </>
//     );
//   }
// }

// export default Welcome;