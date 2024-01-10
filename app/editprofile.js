import React, { useState } from 'react';
import { ScrollView, Text, Box, Image, Input, InputIcon, InputSlot, InputField, Button, ButtonText } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const Editprofile = () => {
  const validateUser = () => {
    router.replace('/profile')
  }

  return (
    <ScrollView flex={1} bg="$white" >
      <Box p={"$12"} flexDirection="col" justifyContent="center" mt={-50}>
        <Image
          source={require("../assets/edit.png")}
          h={200}
          w={"$full"}
          mt={90}
          mb={30}
          alt="Logo"
          role="img"
        />
        {/* Teks di bawah gambar */}
        <Text textAlign="center" color="$black" mb={30} fontWeight="bold" size="xl">
          Complete Your Profile
        </Text>
        <Text textAlign="center" color="$black" mb={30} size="x" mt={-30}>
          It will help us to know more about you!
        </Text>
        <Input variant="outline" size="x" mb="$4">
          <InputSlot pl="$3">
            <InputIcon>
              <Ionicons
                name={"person"}
                size={20}
                color={"black"}
              />
            </InputIcon>
          </InputSlot>
          <InputField placeholder="Deskripsikan Tentangmu" />
        </Input>
        <Input variant="outline" size="x" mb="$4">
          <InputSlot pl="$3">
            <InputIcon>
              <Ionicons
                name={"logo-instagram"}
                size={16}
                color={"black"}
              />
            </InputIcon>
          </InputSlot>
          <InputField placeholder="Link Instagram" />
        </Input>
        <Input variant="outline" size="x" mb="$4">
          <InputSlot pl="$3">
            <InputIcon>
              <Ionicons
                name={"logo-linkedin"}
                size={16}
                color={"black"}
              />
            </InputIcon>
          </InputSlot>
          <InputField placeholder="Link Linkedin" />
        </Input>
        <Input variant="outline" size="x" mb="$4">
          <InputSlot pl="$3">
            <InputIcon>
              <Ionicons
                name={"link"}
                size={16}
                color={"black"}
              />
            </InputIcon>
          </InputSlot>
          <InputField placeholder="Your Linktree" />
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
          <ButtonText>Save</ButtonText>
        </Button>
      </Box>
    </ScrollView>
  );
};

export default Editprofile;
