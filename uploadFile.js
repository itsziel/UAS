// -	Mengimport fungsi ref, uploadBytesResumable, dan getDownloadURL dari modul firebase/storage.
//-	Mengimport objek storage dari modul konfigurasi Firebase (diasumsikan berada di dalam file config.js).

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './config'; // pastikan untuk mengganti dengan lokasi yang tepat dari konfigurasi Firebase Anda

// -	Membuat fungsi UploadFile yang menerima tiga parameter: blobFile, fileName, dan isUploadCompleted.
// -	Memeriksa apakah blobFile tidak bernilai null atau undefined. Jika null, maka fungsi dihentikan.
// -	Membuat referensi ke storage Firebase menggunakan ref(storage, 'myDocs/' + fileName).
// -	Memulai proses upload dengan uploadBytesResumable yang mengambil referensi storage dan file blob yang akan diunggah
//-	Menggunakan on untuk memantau perubahan status pengunggahan (misalnya, 'state_changed').
//-	Jika terjadi kesalahan, log pesan kesalahan dan memberikan umpan balik ke isUploadCompleted(false).
//-	ika pengunggahan berhasil, mendapatkan URL unduhan dengan getDownloadURL dan memberikan umpan balik ke isUploadCompleted(true).

const UploadFile = async (blobFile, fileName, isUploadCompleted) => {
  if (!blobFile) return;

  try {
    // Mengambil referensi storage
    const storageRef = ref(storage, `myDocs/${fileName}`);

    // Memulai proses upload
    const uploadTask = uploadBytesResumable(storageRef, blobFile);

    // Menangani perubahan state pengunggahan
    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        console.log(error);
        isUploadCompleted(false);
      },
      () => {
        // Jika pengunggahan berhasil
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          isUploadCompleted(true);
          return downloadURL;
        });
      }
    );
  } catch (error) {
    console.error(error);
    isUploadCompleted(false);
  }
};

export default UploadFile;
