import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button, ButtonText, Image, Divider, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../components";
import { Ionicons } from "@expo/vector-icons/Ionicons";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Firebase from "./config/FIREBASE";
import {useLocalSearchParams} from "expo-router"

const NewsDetail = ({ event }) => {
  const params = useLocalSearchParams();
  const [test, setTest] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Added isLoading state
  console.log(params)

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem("user-data");
      if (value !== null) {
        const valueObject = JSON.parse(value);
        setUserData(valueObject);
        // Placeholder for fetchDataTask
        // fetchDataTask(valueObject);
        // fetchDataNote(valueObject);
        fetchDataTest();
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Placeholder for fetchDataTask
  const fetchDataTask = (userData) => {
    // Implement your logic to fetch task data using userData
    console.log("Fetching task data:", userData);
  };

  const fetchDataNote = (userData) => {
    // Implement your logic to fetch note data using userData
    console.log("Fetching note data:", userData);
  };

  const fetchDataTest = () => {
    try {
      const dataRef = Firebase.database().ref("events/" + params.id);
      dataRef.once("value").then((snapshot) => {
        const dataValue = snapshot.val();
        if (dataValue != null) {
          const snapshotArr = Object.entries(dataValue).map((item) => {
            return {
              id: item[0],
              ...item[1],
            };
          });
          setTest(snapshotArr);
        }
        setIsLoading(false); // Set isLoading to false when data fetching is complete
      }).catch((e) => {
        console.error(e);
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header title={"Event"} withBack={true} />
      {isLoading ? ( // Render loading indicator when isLoading is true
      <ActivityIndicator size="large" color="#B80000" />
    ) : (
      <Box flex={1} justifyContent="center" alignItems="center">
        {test.map((index) => (
          <Box key={index.id}>
            <Text>
              dan ini id: {index.title}
            </Text>
            <Text mb={"$1"}>{index.date}</Text>
          </Box>
        ))}
      </Box>

    )}
    </>
  );
};

export default NewsDetail;
