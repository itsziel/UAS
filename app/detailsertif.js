import React from "react";
import { View, TouchableOpacity, Alert, Image } from "react-native";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

// -	Komponen ini menerima properti route dari navigasi. Properti ini mengandung parameter yang dikirimkan dari 
//    komponen lain, seperti imageUri
const Detailsertif = ({ route }) => {
  const { imageUri } = route.params;

// -	Membuat objek downloadResumable menggunakan File System.createDownloadResumable dengan URL gambar yang akan diunduh (imageUri) dan path tempat penyimpanan lokal (FileSystem.documentDirectory + 'sertifikat.jpg').
// -	Melakukan proses unduhan dengan downloadResumable. Download Async().
// -	Meminta izin akses ke galeri foto perangkat menggunakan MediaLibrary.requestPermissionsAsync().
// -	Jika izin diberikan (status === 'granted'), menyimpan gambar ke galeri foto perangkat menggunakan MediaLibrary. saveTo LibraryAsync(uri).
// -	Memberikan umpan balik ke pengguna melalui Alert tergantung pada hasil operasi unduhan dan penyimpanan.

  const handleDownload = async () => {
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      {/* Tombol download */}
      <TouchableOpacity onPress={handleDownload}>
        <View style={{ backgroundColor: 'blue', padding: 10, marginTop: 10 }}>
          <Text style={{ color: 'white' }}>Download</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Detailsertif;
