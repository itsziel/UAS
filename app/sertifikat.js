// -	Mengimpor berbagai komponen dan pustaka yang diperlukan dari React, React Native, dan Firebase.
// -	Mendeklarasikan beberapa variabel state menggunakan useState, termasuk pressedEventCardId, 
//    image, uploading, uploaded Images, dan certificatesCount

import React, { useState, useEffect } from "react";
import { TouchableOpacity, } from "react-native";
import { ScrollView, Text, View, Button, ButtonText  } from "@gluestack-ui/themed";
import {Alert, Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import firebase from "./config/FIREBASE";
import 'firebase/compat/storage';

// 	Deklarasi dan Penggunaan State
const Sertifikat = () => {
  // -	pressedEventCardId, digunakan untuk mengetahui event card mana yang sedang ditekan, 
  //    dan kemudian digunakan dalam pengaturan antarmuka pengguna atau logika lainnya.
  const [pressedEventCardId, setPressedEventCardId] = useState(null);
  // -	Image, digunakan untuk menampilkan gambar yang dipilih di antarmuka pengguna atau untuk mengunggah gambar ke Firebase Storage
  const [image, setImage] = useState(null);
  // -	Uploading, untuk memberikan umpan balik visual kepada pengguna selama proses pengunggahan sedang berlangsung.
  const [uploading, setUploading] = useState(false);
  // -	uploadedImages, digunakan untuk menampilkan daftar gambar sertifikat yang telah diunggah oleh pengguna.
  const [uploadedImages, setUploadedImages] = useState([]);
  //-	certificatesCount, digunakan untuk menampilkan informasi kepada pengguna tentang berapa banyak sertifikat yang telah dikumpulkan.
  const [certificatesCount, setCertificatesCount] = useState([]);

    // Fungsi untuk menghitung jumlah file gambar dalam Firebase Storage (Fungsi countImagesInStorage)
    // -	Membuat fungsi asynchronous countImagesInStorage untuk menghitung jumlah file gambar dalam Firebase Storage.
   // Menggunakan API Firebase Storage untuk mendapatkan daftar file dan melakukan filter berdasarkan ekstensi gambar.
  // Menghitung jumlah file gambar yang valid dan mengembalikan nilai tersebut.

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
    // kemudian membuat Effect Hook untuk Menginisialisasi Jumlah Sertifikat
    // -	Menggunakan useEffect untuk memanggil fungsi countImagesInStorage saat komponen pertama kali dimuat.
   // Mengupdate state certificatesCount dengan nilai jumlah file gambar yang ada di Firebase Storage

    useEffect(() => {
      countImagesInStorage().then((imageCount) => {
        setCertificatesCount(imageCount);
      });
    }, []);


  // membuat fungsi Fungsi pickImage
  // -	Membuat fungsi asynchronous pickImage untuk membuka galeri dan memilih gambar.
  // Menggunakan ImagePicker dari Expo untuk memilih gambar dari galeri perangkat.
   // Mengupdate state image dengan URI gambar yang dipilih.

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

  // membuat function upload media
  // -	Membuat fungsi asynchronous uploadMedia untuk mengunggah gambar ke Firebase Storage
   // -	Menggunakan FileSystem dari Expo untuk mendapatkan informasi tentang file gambar yang akan diunggah.
  // -	Mengonversi file gambar ke bentuk blob dan mengunggahnya ke Firebase Storage
  // -	Menampilkan pesan pemberitahuan setelah berhasil mengunggah dan mengatur ulang state image

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

  // Fungsi untuk mengambil gambar dari Firebase Storage ( membuat Fungsi fetchImagesFromFirebase)
  // -	Membuat fungsi asynchronous fetchImagesFromFirebase untuk mengambil daftar gambar dari Firebase Storage.
  // Menggunakan API Firebase Storage untuk mendapatkan daftar referensi gambar.
  // Mengambil URL download untuk setiap gambar dan mengupdate state uploadedImages dengan daftar URL tersebut.

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
  
  // kemudian membuat Effect Hook untuk Mengambil Gambar dari Firebase Storage
  // -	Menggunakan useEffect untuk memanggil fungsi fetchImagesFromFirebase saat komponen pertama kali dimuat
  useEffect(() => {
    fetchImagesFromFirebase(); // Memanggil fungsi saat komponen dimuat pertama kali
  }, []); // Penambahan dependensi kosong untuk memastikan hanya dipanggil sekali


  // membuat fungsi Fungsi handleDownload
  // -	Membuat fungsi asynchronous handleDownload untuk mengunduh dan menyimpan gambar sertifikat ke galeri perangkat
  // -	Menggunakan FileSystem dan MediaLibrary dari Expo untuk mengelola proses pengunduhan dan penyimpanan
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
