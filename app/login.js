import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Input, InputIcon, InputSlot, InputField, Button, ButtonText, Alert, AlertText, Modal, ModalBackdrop} from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { loginUser } from "../app/AuthAuction";
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from "./config/FIREBASE";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const auth = getAuth();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      // Ambil data dari AsyncStorage
      const userData = await AsyncStorage.getItem("user-data");
      if (userData !== null) {
        router.replace("/welcome");
      } else {
       
      }
    } catch (e) {
      console.error(e);
    }
  };
  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((nama, nim) => {
      // const user = userCredential.user
      saveUserData(email, password, nama, nim);
    })
    .catch((error) => {
      console.error(error);
    });
  };
  const saveUserData = async (email, password, credential) => {
    const userData = { email, password, credential };
    try {
      // Menyimpan data ke AsyncStorage
      await AsyncStorage.setItem("user-data", JSON.stringify(userData));
      // Diarahkan ke Home
      router.replace("/welcome")
    } catch (error) {
      console.error(error);
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
          placeholder="Email"
          onChangeText={(email) => setEmail(email)} // Set email ke dalam state
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
          onChangeText={(password) => setPassword(password)}
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
        <TouchableOpacity
            type="text"
            padding={"$3"}
            onPress={() => {
              router.push('/Register');
            }}> 
          <Text size="sm"  mt={"$4"} px={"$2"}>
            Don't have an account?
            <Text color={"$primary300"} pl={"$4"} >
               Register
            </Text>
          </Text>
        </TouchableOpacity>
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