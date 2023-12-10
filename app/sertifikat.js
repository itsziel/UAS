import React, { useState } from "react";
import { TouchableOpacity, } from "react-native";
import { ScrollView, Text, View, Image, Button, ButtonText  } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Sertifikat = () => {
  const [pressedEventCardId, setPressedEventCardId] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 25, backgroundColor: pressedEventCardId ? "#B80000" : "#B80000", marginTop: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => router.replace("/home")}>
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          <Text style={{ textTransform: "none", fontSize: 20, marginLeft: 10, color:"white" }}>Kamar Sertifikat</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="menu" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', marginTop: 10}}>
        {/* Konten di tengah-tengah */}
        <View style={{ padding: 15, alignItems: 'center' }}>
          <Image
            source={require("../assets/certif.png")}  // Gantilah dengan path gambar yang sesuai
            style={{ width: 200, height: 150, marginBottom: 20, marginTop: 20 }}
          />
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>Ruang Sertifikat</Text>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 15 }}>Tempat penyimpanan sertifikat personal kamu. Upload dan simpan di sini, biar ga ribet & kececer lagi</Text>
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
          <ButtonText>Upload Sertifikat</ButtonText>
        </Button>

        {/* Teks "sertifikat saya" di bawah tombol */}
        <Text style={{ fontSize: 16, color: '$black', marginTop: 30, marginRight: 10, marginLeft: 15, fontWeight: 'bold' }}>Sertifikat Saya</Text>
        <Text style={{ fontSize: 14, color: '$black', marginTop: 1, marginRight: 10, marginLeft: 15,}}>Wah keren. kamu sudah berhasil mengumpulkan 5 sertifikat. Tingkatkan terus ya</Text>

        {/* 3 Box di bawah teks "Sertifikat Saya" */}
        <ScrollView
          contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ width: 150, height: 150, backgroundColor: '$red900', borderWidth: 1, borderColor: '$black', marginLeft: 20 }}>
            {/* Isi Box 1 */}
            <TouchableOpacity
              onPress={() => router.replace('/detailsertif', { sertifikatId: 'sertifikat1' })}
            >
              {/* Isi Box 1 */}
              <Image source={require("../assets/sertif.webp")} style={{ width: '100%', height: '70%' }} />
              <Text style={{ textAlign: 'center', color: '$black', fontWeight: 'bold' }}>UI/UX Techcare 2023</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 150, height: 150, backgroundColor: '$red900', borderWidth: 1, borderColor: '$black', marginLeft: 10 }}>
            {/* Isi Box 2 */}
            <Image source={require("../assets/sertif2.webp")} style={{ width: '100%', height: '70%' }} />
            <Text style={{ textAlign: 'center', color: '$black', fontWeight: 'bold' }}>IT Competition INVOFEST 2023 </Text>
          </View>
          <View style={{ width: 150, height: 150, backgroundColor: '$red900', borderWidth: 1, borderColor: '$black', marginLeft: 10 }}>
            {/* Isi Box 3 */}
            <Image source={require("../assets/sertif3.webp")} style={{ width: '100%', height: '70%' }} />
            <Text style={{ textAlign: 'center', color: '$black', fontWeight: 'bold' }}>BIOS Hackathon</Text>
          </View>
          <View style={{ width: 150, height: 150, backgroundColor: '$red900', borderWidth: 1, borderColor: '$black', marginLeft: 10 }}>
            {/* Isi Box 3 */}
            <Image source={require("../assets/sertif6.webp")} style={{ width: '100%', height: '70%' }} />
            <Text style={{ textAlign: 'center', color: '$black',fontWeight: 'bold' }}>Hackathon Cybertech 2023</Text>
          </View>
          <View style={{ width: 150, height: 150, backgroundColor: '$red900', borderWidth: 1, borderColor: '$black', marginLeft: 10, marginRight: 20 }}>
            {/* Isi Box 3 */}
            <Image source={require("../assets/sertif5.webp")} style={{ width: '100%', height: '70%' }} />
            <Text style={{ textAlign: 'center', color: '$black', fontWeight: 'bold'}}>UI/UX Techcare 2022</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Sertifikat;
