//-	Mengimpor React dan beberapa hooks dan komponen dari berbagai pustaka
//-	Mengimpor komponen-komponen dari Gluestack UI, React Native, Expo Vector Icons, dan AsyncStorage
import React, { useState, useEffect } from "react";
import {
  toggleAboutMe,
  showFullAboutMe,
  ScrollView,
  Divider,
  Box,
  View,
  Image,
  Text,
  Center,
  Heading,
} from "@gluestack-ui/themed";
import { Header } from "../../components";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


//-	Menginisialisasi state menggunakan hook useState untuk menyimpan informasi seperti jumlah acara, jumlah sertifikat, tentang saya, media sosial, nama pengguna, dan NIM pengguna
const Profile = () => {
  const [eventsCount, setEventsCount] = useState(7);
  const [certificatesCount, setCertificatesCount] = useState(6);
  const [aboutMe, setAboutMe] = useState(
    "Hai! Saya adalah [Nama Anda], seorang penggemar teknologi yang bersemangat dan pencinta inovasi di dunia IT. 🚀💻🌐 Berbasis di [Lokasi Anda], saya adalah seorang [Jabatan atau Spesialisasi IT Anda] dengan pengalaman yang luas dalam [Aplikasi Pengembangan Perangkat Lunak, Keamanan Jaringan, dll.]. Dengan setiap proyek yang saya hadapi, tujuan saya adalah tidak hanya memecahkan masalah, tetapi juga menciptakan solusi yang efisien dan relevan.🔍 Saya senang menjelajahi tren terkini dalam dunia teknologi, dari kecerdasan buatan (AI) hingga pengembangan aplikasi berbasis blockchain. Saya percaya bahwa teknologi memiliki potensi luar biasa untuk membawa perubahan positif, dan saya berkomitmen untuk terus berkontribusi pada evolusi IT.💡 Selain itu, saya suka berbagi pengetahuan dan pengalaman saya melalui platform edukasi dan sosial. Mendidik dan menginspirasi generasi berikutnya dari para penggiat IT adalah sesuatu yang saya anggap penting."
  );
  const [socialMedia, setSocialMedia] = useState([
    { platform: "Instagram", icon: "logo-instagram", link: "https://www.instagram.com/your_instagram" },
    { platform: "LinkedIn", icon: "logo-linkedin", link: "https://www.linkedin.com/in/your_linkedin" },
    { platform: "Linktree", icon: "link", link: "https://linktr.ee/your_linktree" },
  ]);

  const [userName, setUserName] = useState("");
  const [userNIM, setUserNIM] = useState("");


  //-	Menggunakan useEffect untuk memanggil fungsi getUserData saat komponen pertama kali dimuat
  useEffect(() => {
    getUserData();
  }, []);

  //-	Fungsi asinkron untuk mengambil data pengguna dari penyimpanan lokal dan mengupdate state userName dan userNIM dengan nilai yang ditemukan
  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("user-data");
      if (userData) {
        const { name, nim } = JSON.parse(userData);
        setUserName(name);
        setUserNIM(nim);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //-	Mengembalikan JSX yang mewakili tata letak UI dari halaman profil
  return (
    <ScrollView flex={1} bg="#B80000">
      <Header title={"Profile"} />
      <Center p={4}>
        {/* Profile Photo */}
    //-	Menampilkan gambar profil pengguna menggunakan komponen Image
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
          }}
          size={100}
          borderRadius={50}
          mb={5}
          mt={30}
        />
        {/* User Name */}
            //-	Menampilkan nama pengguna dan NIM pengguna menggunakan komponen Heading dan Text
        <Heading level={2} mt={10} mb={10} fontWeight="bold" color="$white">
          {userName}
        </Heading>
        <Text color="$cyan" fontWeight="bold" mt={-15} mb={15}>
          {userNIM}
        </Text>
        {/* Events and Certificates */}
        <Box mt={1} ml={20} flexDirection="row" justifyContent="center">
          <Box alignItems="center" mr={10}>
            <Text color="$white" fontWeight="bold">
              {eventsCount}
            </Text>
            <Text color="$white">Events</Text>
          </Box>
          <Divider orientation="vertical" bg="$white" h={40} mr={5} ml={5} />
          
          //-	Menampilkan jumlah sertifikat menggunakan komponen Box dan Text
          <Box alignItems="center" ml={10}>
            <Text color="$white" fontWeight="bold">
              {certificatesCount}
            </Text>
            <Text color="$white">Certificates</Text>
          </Box>
        </Box>
        {/* Icons (Bookmark, Edit Profile, Calendar) */}
        <Box flexDirection="row" mt={30} justifyContent="center">
          <TouchableOpacity onPress={() => router.replace("/Bookmark")} mr={4}>
            <Box alignItems="center">
              <Ionicons name="bookmark" size={30} color="#DAA520" />
              <Text color="$white">Bookmark</Text>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/editprofile")} mr={4}>
            <Box alignItems="center">
              <Ionicons name="create" size={30} color="#DAA520" />
              <Text ml={50} mr={10} color="$white">
                Edit Profile
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>

        {/* About Me */}
        <Box mt={30} textAlign="center">
          <Text fontWeight="bold" color="$white" mb={10}>
            About Me
          </Text>
          {showFullAboutMe ? (
            <Text color="$white">{aboutMe}</Text>
          ) : (
            <>
              <Text color="$white">{aboutMe.slice(0, 233)}</Text>
              <TouchableOpacity onPress={toggleAboutMe}>
                <Text color="$cyan" mt={2}>
                  Baca Selengkapnya
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Box>
        {/* Interests */}
        <Box mt={20} textAlign="center">
          <Box flexDirection="row" justifyContent="center" mt={2}>
            {socialMedia.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => console.log('Open ${item.platform}')}>
                <Box alignItems="center" mx={10}>
                  <Ionicons name={item.icon} size={30} color="#FFFFFF" />
                </Box>
              </TouchableOpacity>
            ))}
          </Box>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default Profile;
