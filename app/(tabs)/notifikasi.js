import { VStack, Image, Text, Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";

const Notifikasi = () => {
  return (
    <>
      <Header title={"Notifikasi"} />
      <Center flex={1}>
        <VStack space={2} alignItems="center">
          <Image
            source={{ uri: "https://w7.pngwing.com/pngs/224/910/png-transparent-red-bell-notification.png" }} // Gantilah URL gambar sesuai kebutuhan Anda
            size={100} // Sesuaikan ukuran gambar sesuai keinginan Anda
            borderRadius={50} // Bisa disesuaikan sesuai kebutuhan
          />
          <Text textAlign="center">Belum ada notifikasi</Text>
        </VStack>
      </Center>
    </>
  );
};

export default Notifikasi;
