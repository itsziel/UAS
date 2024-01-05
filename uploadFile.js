import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './config'; // pastikan untuk mengganti dengan lokasi yang tepat dari konfigurasi Firebase Anda

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
