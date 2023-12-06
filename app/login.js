import React, { useState } from 'react';
import { Box, Image, Input, InputIcon, InputSlot, InputField, Button, ButtonText} from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { router } from "expo-router";

//komponen fungsiononal login didefinisikan, kemudian state show password dideklarasikan menggunakan hookstate untuk mengelola apakah teks sandi harus ditampilkan atau disembunyikan
// fungsi handle state digunakan untuk mengganti nilai showpassword  natara true dan false
const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  const validateUser = () => {
    router.replace('/welcome')
  }
  return (
    <>
      <Box 
      p={"$12"} 
      flexDirection="col"
      justifyContent="center"
      >
        <Image
          source={require("../assets/logoproject.png")}
          h={200}
          w={"$full"}
          mt={30}
          mb={30}
          alt="Logo"
          role="img"
        />
        <Input
        variant="outline"
        size="x"
        mb="$4"
        >
          <InputSlot pl="$3">
            <InputIcon>
              <Ionicons
                name={"person"}
                size={20}
                color={"black"}
              />
            </InputIcon>
          </InputSlot>
          <InputField placeholder="Nomor Induk Mahasiswa" />
        </Input>
        <Input
        variant="outline"
        size="x"
        mb="$4"
        >
          <InputSlot pl="$3">
            <InputIcon>
              <Ionicons
                name={"lock-closed"}
                size={20}
                color={"black"}
              />
            </InputIcon>
          </InputSlot>

          <InputField placeholder="your password" type={showPassword ? "text" : "password"} />
          
          <InputSlot pr="$3" onPress={handleState}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              color="black"
            />
          </InputSlot>
        </Input>
        <Button
          size="x"
          variant="solid"
          mx={20}
          mt={20}
          bg="$red800"
          sx={{ ":active": { bg: "$error800" } }}
          onPress={validateUser}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </Box>
    </>
  );
};

export default Login;


//class component

// import React, { Component } from 'react';
// import { Box, Image, Input, InputIcon, InputSlot, InputField, Button, ButtonText} from "@gluestack-ui/themed";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
// import { router } from "expo-router";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showPassword: false,
//     };
//   }

//   handleState = () => {
//     this.setState((prevState) => ({
//       showPassword: !prevState.showPassword,
//     }));
//   }

//   validateUser = () => {
//     router.replace('/welcome');
//   }

//   render() {
//     const { showPassword } = this.state;

//     return (
//       <>
//         <Box 
//           p={"$12"} 
//           flexDirection="col"
//           justifyContent="center"
//         >
//           <Image
//             source={require("../assets/logoproject.png")}
//             h={200}
//             w={"$full"}
//             mt={30}
//             mb={30}
//             alt="Logo"
//             role="img"
//           />
//           <Input
//             variant="outline"
//             size="x"
//             mb="$4"
//           >
//             <InputSlot pl="$3">
//               <InputIcon>
//                 <Ionicons
//                   name={"person"}
//                   size={20}
//                   color={"black"}
//                 />
//               </InputIcon>
//             </InputSlot>
//             <InputField placeholder="Nomor Induk Mahasiswa" />
//           </Input>
//           <Input
//             variant="outline"
//             size="x"
//             mb="$4"
//           >
//             <InputSlot pl="$3">
//               <InputIcon>
//                 <Ionicons
//                   name={"lock-closed"}
//                   size={20}
//                   color={"black"}
//                 />
//               </InputIcon>
//             </InputSlot>

//             <InputField placeholder="your password" type={showPassword ? "text" : "password"} />
            
//             <InputSlot pr="$3" onPress={this.handleState}>
//               <InputIcon
//                 as={showPassword ? EyeIcon : EyeOffIcon}
//                 color="black"
//               />
//             </InputSlot>
//           </Input>
//           <Button
//             size="x"
//             variant="solid"
//             mx={20}
//             mt={20}
//             bg="$red800"
//             sx={{ ":active": { bg: "$error800" } }}
//             onPress={this.validateUser}
//           >
//             <ButtonText>Login</ButtonText>
//           </Button>
//         </Box>
//       </>
//     );
//   }
// }

// export default Login;
