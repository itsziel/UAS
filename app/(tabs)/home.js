import React, { useEffect, useState } from "react";
import { Heading, FlatList, Box, Text, Image } from "@gluestack-ui/themed";
import { Header } from "../../components";
import datas from "../../datas";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import firebase from "../config/FIREBASE";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataRef = firebase.database().ref("events");
      dataRef.once("value").then((snapshot) => {
        const dataValue = snapshot.val();
        if (dataValue != null) {
          const snapshotArr = Object.entries(dataValue).map((item) => {
            return {
              id: item[0],
              ...item[1],
            };
          });
          setEvents(snapshotArr);
        }
        // setIsLoading(false); // Set isLoading to false when data fetching is complete
      }).catch((e) => {
        console.error(e);
      });
  };
  const renderitem = ({ item }) => {
    return (
      <Link
        href={{
          pathname: "/news-detail",
          params: item,
        }}
        asChild
      >
        <TouchableOpacity activeOpacity={0.5}>
          <Box
            p={"$4"}
            borderBottomColor={"$coolGray300"}
            borderBottomWidth={1}
            flexDirection="row"
            flex={1}
          >
            <Box flex={1} mr={"$4"}>
              <Image
                source={{ uri: item.image }}
                w="$full"
                h="$full"
                alt="Image Data"
                role="img"
              />
            </Box>
            <Box flex={1.8}>
              <Text fontSize={"$sm"}>{item.date}</Text>
              <Heading lineHeight={"$md"} fontSize={"$md"}>
                {item.title}
              </Heading>
            </Box>
          </Box>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <>
      <Header title={"Dashboard"} />
      <Box py={"$8"} 
      bg="#B80000"
      borderBottomLeftRadius={40} // Atur radius di ujung kiri bawah
      borderBottomRightRadius={40} // Atur radius di ujung kanan bawah
      flexDirection="row" // Mengatur tata letak menjadi horizontal
      justifyContent="space-between" // Mengatur jarak antara item
      >
                {[
            { label: "Event", route: "/event" },
            { label: "Certificate", route: "/sertifikat" },
            { label: "Beasiswa", route: "/beasiswa" },
          ].map((item, index) => {
            return (
              <Link
                href={{
                  pathname: item.route,
                  params: item,
                }}
                key={index}
                asChild
              >
                <TouchableOpacity activeOpacity={0.5}>
                  <Box w={"40"} mr={"$10"} mb={-40} ml={index === 0 ? "$5" : "0"}>
                    <Box
                      w="$full"
                      h="30px" // Sesuaikan tinggi sesuai kebutuhan Anda
                      bg="#F0635A" // Ganti warna latar belakang sesuai keinginan Anda
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="$sm"
                      mx="$3"
                      my="$4"
                    >
                      <Text fontSize={"$sm"} color="$textLight50">
                        {item.label}
                      </Text>
                    </Box>
                  </Box>
                </TouchableOpacity>
              </Link>
            );
          })}
      </Box>
      {/* Teks "Event Tranding" dengan ikon api */}
      <Box flexDirection="row" alignItems="center" mt={20} ml={15} mb={10}>
        <Text fontSize={"$lg"} color="$black" ml={2}>
          Event Trending
        </Text>
        <Ionicons name="flame" size={24} color="$textLight50" />
      </Box>

      <FlatList
        data={events}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: -2 }}
      />

      <Box flexDirection="row" alignItems="center" mt={20} ml={15} mb={10}>
        <Text fontSize={"$lg"} color="$black" ml={2}>
          Beasiswa Populer
        </Text>
        <Ionicons name="flame" size={24} color="$textLight50" />
      </Box>

      <FlatList
        data={datas.slice(9, 17)}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: -2 }}
      />
      
    </>
  );
};

export default Home;