import React, { useState } from "react";
import { ScrollView, Box, Image, Text, VStack, HStack, Input, IconButton, InputIcon, InputSlot, InputField, Button, ButtonText } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { Ionicons } from "@expo/vector-icons";



const Collab = () => {
  const [newMessage, setNewMessage] = useState("");
  const [chatData, setChatData] = useState([
    {
      user: {
        id: 1,
        name: "Muhammad Zidan - SI 2021",
        avatar: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
      },
      message: "ada yang mau join, untuk lomba innovillage 2024?",
      timestamp: "12:30 PM",
    },
    {
      user: {
        id: 2,
        name: "Hafizh Muhammad - SI 2021",
        avatar: "https://www.shareicon.net/data/256x256/2016/05/24/770136_man_512x512.png",
      },
      message: "butuh orang yg biasa pake tools Figma, apa ada ?",
      timestamp: "12:35 PM",
    },
    {
      user: {
        id: 3,
        name: "Refki Joeta - IF 2022",
        avatar: "https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png",
      },
      message: "Mabar -1 Jungler, retri no indomaret",
      timestamp: "12:35 PM",
    },
    {
      user: {
        id: 4,
        name: "Zahwa - TI 2022",
        avatar: "https://kaksetoschool.sch.id/images/3215488.png",
      },
      message: "butuh 1 org lagi yg mau, untuk lomba UI/UX?!",
      timestamp: "12:35 PM",
    },
    {
      user: {
        id: 5,
        name: "Sri Feliana - RPL 2020",
        avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
      },
      message: "Disini ada yg ambil beasiswa Bakti BCA?, info dong..!",
      timestamp: "12:35 PM",
    },
    {
      user: {
        id: 6,
        name: "Nissa Cahyani - BD 2021",
        avatar: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914838/woman-icon-md.png",
      },
      message: "info TAK ku masih 15, ada yg mau ikut lomba ?",
      timestamp: "12:35 PM",
    },
    {
      user: {
        id: 7,
        name: "Annisa Oktavia - DS 2023",
        avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
      },
      message: "info mabar nderrr...",
      timestamp: "12:35 PM",
    },
    {
      user: {
        id: 8,
        name: "Zaky Naufal - TE 2023",
        avatar: "https://www.shareicon.net/data/512x512/2016/05/24/770140_man_512x512.png",
      },
      message: "ada yg minat ikut lomba Techcomfest 2024 ?",
      timestamp: "12:35 PM",
    },
  ]);

  // const handleSend = () => {
  //   if (newMessage.trim() !== "") {
  //     const newChat = {
  //       user: {
  //         id: 9, // Assuming the user is the same for the new message
  //         name: "Your Name",
  //         avatar: "https://your-avatar-url.com",
  //       },
  //       message: newMessage,
  //       timestamp: "Just now", // You may want to use a timestamp library for more accurate timestamps
  //     };

  //     setChatData([...chatData, newChat]);
  //     setNewMessage("");
  //   }
  // };

  return (
    <>
      <Header title={"Collab"} />
      <Box py={"$1"} 
      bg="#B80000"
      flexDirection="row" // Mengatur tata letak menjadi horizontal
      justifyContent="space-between" // Mengatur jarak antara item
      alignItems="flex-start"
      p={10}
      >
        {/* Teks di atas */}
        <VStack alignItems="center">
          <Text color="#DAA520"  fontWeight="bold" size="xl">
            Selamat datang di Collab Chat!
          </Text>
          <Input variant="outline" size="x" mb="$4" mt="$2" >
          <InputSlot pl="$3">
            <InputIcon>
              <Ionicons
                name={"chatbox"}
                size={16}
                color={"white"}
              />
            </InputIcon>
          </InputSlot >
          <InputField placeholder="Ingin menyampaikan apa ?" />
          <InputSlot pr="$3">
          <InputIcon>
            {/* Ganti "send" dengan ikon yang sesuai */}
            <Ionicons name={"send"} size={16} color={"white"} />
          </InputIcon>
        </InputSlot>
        </Input>
        {/* <Button
          size="x"
          variant="solid"
          mx={20}
          mt={-5}
          bg="$red800"
          sx={{ ":active": { bg: "$error800" } }}
          onPress={() => console.log('Terkirim')}
        >
          <ButtonText> Send </ButtonText>
        </Button> */}
        </VStack>
      </Box>

      <ScrollView flex={1} bg="$white">
        <VStack space={4} p={4}>
          {/* Chat Bubbles */}
          {chatData.map((chat, index) => (
            <ChatBubble key={index} user={chat.user} message={chat.message} timestamp={chat.timestamp} />
          ))}
        </VStack>
      </ScrollView>
    </>
  );
};

const ChatBubble = ({ user, message, timestamp }) => (
  <Box borderWidth={1} borderColor="$black" borderRadius={15} overflow="hidden" p={2} mb={1} mt={10}>
    <HStack space={2} alignItems="flex-start">
      <Image source={{ uri: user.avatar }} size={30} borderRadius={15} />
      <VStack space={1} flex={1}>
        <Text fontWeight="bold">{user.name}</Text>
        <Box bg="$cyan" borderRadius={10} p={3}>
          <Text>{message}</Text>
        </Box>
        <HStack space={2} alignItems="center">
          <Text color="$black" mt={1} mr={15}>
            {timestamp}
          </Text>
          <Ionicons name="thumbs-up" size={16} color="$black"/>
          <Text color="$black" ml={1}>
            10 
          </Text>
          <Ionicons name="chatbubble-ellipses-outline" size={16} color="$black" style={{ marginHorizontal: 4 }} />
          <Text color="$black">
            5
          </Text>
        </HStack>
      </VStack>
    </HStack>
  </Box>
);

export default Collab;
