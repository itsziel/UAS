import { Box, Heading, Text,Button, ButtonText, Image, Divider,ScrollView, } from "@gluestack-ui/themed";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"Event"} withBack={true} />
      <ScrollView>
        <Image
          source={{ uri: params.image }}
          w={"$full"}
          h={"$48"}
          alt="News Image"
          role="img"
        />
        <Box p={"$4"}>
          <Text mb={"$1"}>{params.procurement}</Text>
          <Heading lineHeight={"$xl"} fontSize={"$2xl"}>
            {params.title}
          </Heading>
          <Divider my={"$4"} />
          <Box flexDirection="row">
            <Ionicons name="time" size={32} color="#B80000" marginRight={10} />
            <Text fontWeight="normal">{params.date}{'\n'}{params.time}</Text>
          </Box>
  
          <Box flexDirection="row">
            <Ionicons name="cash" size={32} color="#B80000" marginRight={10}/>
            <Text fontWeight="normal">{params.fee}</Text>
          </Box>


          <Text mt={"$7"} fontWeight="bold" fontSize={18}>
            Persyaratan Lomba
          </Text>
          <Text fontWeight="normal">{params.content}</Text>
          <Button
            size="xl"
            variant="solid"
            bg="#B80000"
            mx={20}
            mt={60}
            mb={10} // Menambahkan margin bawah sebesar 10 unit
            isDisabled={false}
            isFocusVisible={false}
            sx={{ ":active": { bg: "$error800" } }}
          >
            <ButtonText>{params.button}</ButtonText>
          </Button>

        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;