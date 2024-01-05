import React, { useState, useEffect } from "react";
import { TouchableOpacity, } from "react-native";
import { ScrollView, Text, View, Button, ButtonText  } from "@gluestack-ui/themed";
import {Alert, Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { firebase } from '../config';
import 'firebase/compat/storage';

const Sertifikat = () => {
  const [pressedEventCardId, setPressedEventCardId] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [certificatesCount, setCertificatesCount] = useState(9);

    // Fungsi untuk menghitung jumlah file gambar dalam Firebase Storage
    const countImagesInStorage = async () => {
      try {
        const storageRef = firebase.storage().ref();
        const listRef = storageRef.root;
  
        const listResult = await listRef.listAll();
        const images = listResult.items.filter((item) =>
          item.name.toLowerCase().endsWith('.jpg') ||
          item.name.toLowerCase().endsWith('.jpeg') ||
          item.name.toLowerCase().endsWith('.png') ||
          item.name.toLowerCase().endsWith('.gif') ||
          item.name.toLowerCase().endsWith('.bmp')
        );
  
        const imageCount = images.length;
        console.log(`Jumlah file gambar dalam storage: ${imageCount}`);
  
        return imageCount;
      } catch (error) {
        console.error('Error counting images:', error);
        return 0;
      }
  };
  
    useEffect(() => {
      countImagesInStorage().then((imageCount) => {
        setCertificatesCount(imageCount);
      });
    }, []);

  const pickImage = async () => {
    // no permission
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  // Function to upload media files
  const uploadMedia = async () => {
    setUploading(true);

    try {
      const { uri } = await FileSystem.getInfoAsync(image);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = (e) => {
          reject(new TypeError('Network Request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      });

      const filename = image.substring(image.lastIndexOf('/') + 1);
      const ref = firebase.storage().ref().child(filename);

      await ref.put(blob);
      setUploading(false);
      Alert.alert('Sertifikat Berhasil diupload!!!');
      setImage(null);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  // Fungsi untuk mengambil gambar dari Firebase Storage
  const fetchImagesFromFirebase = async () => {
    try {
      const imageRefs = await firebase.storage().ref().listAll();
      const urls = await Promise.all(imageRefs.items.map(async (imageRef) => {
        const url = await imageRef.getDownloadURL();
        return url;
      }));
      setUploadedImages(urls);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImagesFromFirebase(); // Memanggil fungsi saat komponen dimuat pertama kali
  }, []); // Penambahan dependensi kosong untuk memastikan hanya dipanggil sekali

  const handleDownload = async (imageUri) => {
    try {
      const downloadResumable = FileSystem.createDownloadResumable(
        imageUri, // URL gambar yang akan diunduh
        FileSystem.documentDirectory + 'sertifikat.jpg' // Path tempat penyimpanan lokal
      );
  
      const { uri } = await downloadResumable.downloadAsync(); // Melakukan proses unduhan
  
      // Meminta izin untuk mengakses galeri foto
      const { status } = await MediaLibrary.requestPermissionsAsync();
  
      if (status === 'granted') {
        // Menyimpan gambar ke galeri foto perangkat
        await MediaLibrary.saveToLibraryAsync(uri);
        Alert.alert('Sertifikat berhasil diunduh dan disimpan di galeri.');
      } else {
        Alert.alert('Izin akses ke galeri diperlukan untuk menyimpan gambar.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Gagal mengunduh sertifikat.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15, backgroundColor: pressedEventCardId ? "#8B0000" : "#8B0000", marginTop: 31 }}>
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
            alt="certif img"
            style={{ width: 200, height: 150, marginBottom: 20, marginTop: 20 }}
          />
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>Ruang Sertifikat</Text>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 15 }}>Tempat penyimpanan sertifikat personal kamu. Upload dan simpan di sini, biar ga ribet & kececer lagi</Text>
          {/* Display the selected image */}
          {image && <Image source={{ uri: image }} style={{ width: 300, height: 200 ,borderColor: '#000', borderWidth:2 }} />}
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
          onPress={pickImage}
        >
          <ButtonText>Pilih Sertifikat</ButtonText>
        </Button>

          {/* Tombol upload sertifikat */}
          <Button 
          size="x"
          variant="solid"
          mx={55}
          mt={8}
          bg="$green"
          borderRadius={15}
          width={250}
          sx={{ ":active": { bg: "$error800" } }}
          onPress={uploadMedia}
        >
          <ButtonText>Upload Sertifikat</ButtonText>
        </Button>

        {/* Teks "sertifikat saya" di bawah tombol */}
        <Text style={{ fontSize: 16, color: '$black', marginTop: 30, marginRight: 10, marginLeft: 15, fontWeight: 'bold' }}>Sertifikat Saya</Text>
        <Text style={{ fontSize: 14, color: '$black', marginTop: 1, marginRight: 10, marginLeft: 15,}}>Wah keren. kamu sudah berhasil mengumpulkan {certificatesCount} sertifikat. Tingkatkan terus ya</Text>

        {/* 3 Box di bawah teks "Sertifikat Saya" */}
        <ScrollView contentContainerStyle={{ flexDirection: 'row', padding:15, paddingBottom: 50 }} horizontal>
        {uploadedImages.map((imageUri, index) => (
  <View key={index} style={{ marginRight: 10, position: 'relative' }}>
    <Image source={{ uri: imageUri }} style={{ width: 300, height: 200, borderColor: 'black', borderWidth: 2, borderRadius: 10 }} />
    {/* Tombol download */}
    <TouchableOpacity
      onPress={() => handleDownload(imageUri)}
      style={{
        bottom: '-10%', // Tempatkan di tengah vertikal
        left: '50%', // Tempatkan di tengah horizontal
        transform: [{ translateX: -125 }, { translateY: -15 }], // Sesuaikan posisi tombol
        backgroundColor: 'green',
        borderRadius: 15,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>Download</Text>
    </TouchableOpacity>
  </View>
))}

          
      </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Sertifikat;
