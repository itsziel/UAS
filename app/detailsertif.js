import React, { useState } from "react";
import { TouchableOpacity, } from "react-native";
import { ScrollView, Text, View, Image, Button, ButtonText  } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Detailsertif = () => {
  const [pressedEventCardId, setPressedEventCardId] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15, backgroundColor: pressedEventCardId ? "#8B0000" : "#8B0000", marginTop: 31 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => router.replace("/sertifikat")}>
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          <Text style={{ textTransform: "none", fontSize: 20, marginLeft: 10, color:"white" }}>Detail Sertifikat</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="pencil" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="trash" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', marginTop: -10}}>
        {/* Konten di tengah-tengah */}
        <View style={{ padding: 15, alignItems: 'center' }}>
          <Image
            source={require("../assets/sertif.webp")}  // Gantilah dengan path gambar yang sesuai
            style={{ width: 400, height: 250, marginBottom: 40, marginTop: -50 }}
          />
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10,}}>UI/UX Techcare 2023</Text>
        </View>

        {/* Tombol upload sertifikat */}
        <Button
          size="x"
          variant="solid"
          mx={55}
          mt={-8}
          bg="$red800"
          borderRadius={15}
          width={250}
          sx={{ ":active": { bg: "$error800" } }}
          onPress={() => console.log("succes")}
        >
          <ButtonText>Download</ButtonText>
        </Button>
      </ScrollView>
    </View>
  );
};

export default Detailsertif;
