import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button, ButtonText, Image, Divider, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../components";
import  Ionicons  from "@expo/vector-icons/Ionicons";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Firebase from "./config/FIREBASE/index";
import {router, useLocalSearchParams} from "expo-router"

const NewsDetail = ({ event }) => {
  const params = useLocalSearchParams();
  const [test, setTest] = useState();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Added isLoading state
  console.log(params)


  return (
    <>
      <Header title={"Event"} withBack={true} />
      <ScrollView>
        <Image
          source={{ uri: params.image }}
          w={"$full"}
          h={"$48"}
          alt="News Image"
          role="img"
        />
        <Box p={"$4"}>
          <Text mb={"$1"}>{params.procurement}</Text>
          <Heading lineHeight={"$xl"} fontSize={"$2xl"}>
            {params.title}
          </Heading>
          <Divider my={"$4"} />
          <Box flexDirection="row" alignItems="center">
            <Ionicons name="time" size={32} color="#B80000" />
            <Box flexDirection="column" marginLeft={10}>
              <Text fontWeight="normal">{params.date}</Text>
              <Text fontWeight="normal">{params.time}</Text>
            </Box>
          </Box>


          <Box flexDirection="row" marginTop={20} alignItems="center">
            <Ionicons name="cash" size={32} color="#B80000" />
            <Text fontWeight="normal" marginLeft={10}>{params.fee}</Text>
          </Box>



          <Text mt={"$7"} fontWeight="bold" fontSize={18}>
            Persyaratan
          </Text>
          <Text fontWeight="normal">{params.content}</Text>
          <Button
            size="xl"
            variant="solid"
            bg="#B80000"
            mx={20}
            mt={40}
            onPress={() => router.push({ pathname: "/web", params: { link: params.link } })}
            isDisabled={false}
            isFocusVisible={false}
            sx={{ ":active": { bg: "$error800" } }}
          >
            <ButtonText>Register</ButtonText>
          </Button>

        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;