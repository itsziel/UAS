import React, { useState } from 'react';
import { Box, Image, Text, Input, InputIcon, InputSlot, InputField, Button, ButtonText, Alert, AlertText, Modal, ModalBackdrop} from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { loginUser } from "../app/AuthAuction";
import { router } from 'expo-router';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false);;

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };


  const login = () => {
    if (email && password) {
      loginUser(email, password)
        .then((user) => {
          router.replace('/welcome')
        })
        .catch((error) => {
          console.log("Error", error.message);
          toggleAlert(error.message);
        });
    }
  };

  // const handleState = () => {
  //   setShowPassword((showState) => {
  //     return !showState
  //   })



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
          <InputField 
          placeholder="Nomor Induk Mahasiswa"
          onChangeText={(text) => setEmail(text)} // Set email ke dalam state
          value={email} />
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

          <InputField placeholder="your password" 
          // type={showPassword ? "text" : "password"} 
          secureTextEntry={false}
          onChangeText={(text) => setPassword(text)}
          value={password}
          />
          
          {/* <InputSlot pr="$3" onPress={handleState}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              color="black"
            />
          </InputSlot> */}
        </Input>
        <Button
          size="x"
          variant="solid"
          mx={20}
          mt={20}
          bg="$red800"
          sx={{ ":active": { bg: "$error800" } }}
          onPress={() => login()}
        >
          <ButtonText>Login</ButtonText>
        </Button>
          <Text size="sm" color="$black" mt={"$4"}>
            Don't have an account?
          </Text>
          <Button
            title="Register"
            type="text"
            padding={"$3"}
            onPress={() => {
              router.replace('/Register');
            }}
          />
      </Box>

      {}
      {showAlert && (
        <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
          <ModalBackdrop />
          <Alert mx="$4" action="error" variant="solid">
            <AlertText fontWeight="$bold">Buset!</AlertText>
            <AlertText>{alertMessage}</AlertText>
          </Alert>
        </Modal>
      )}
     
    </>
  );
};

export default Login;

