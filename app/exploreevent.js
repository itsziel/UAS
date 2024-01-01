import React, { useState } from "react";
import { TouchableOpacity, } from "react-native";
import { Heading, ScrollView, Text, View, Image, Button, ButtonText,FlatList, Box  } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import { router, Link } from "expo-router";
import datas from "../datas";

const Explore = () => {
  const [pressedEventCardId] = useState(null);
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
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20, backgroundColor: pressedEventCardId ? "#B80000" : "#B80000", marginTop: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => router.replace("/event")}>
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          <Text style={{ textTransform: "none", fontSize: 20, marginLeft: 10, color:"white" }}>Explore Event</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="search" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={datas.slice(0, 8)}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: -2 }}
      />
    </View>
  );
};

export default Explore;
