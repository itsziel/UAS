import { Heading, FlatList, Box, Text, Image } from "@gluestack-ui/themed";
import { Header } from "../components";
import datas from "../datas";
import { Link, router, useLocalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native";

const Home = () => {
  const renderitem = ({ item }) => {
    return (
    <>
      <Link
        href={{
          pathname: "/news-detail",
          params: item,
        }}
        asChild
      >
        <TouchableOpacity activeOpacity={0.5}>
          <Box
            p={"$4"}
            borderBottomColor={"$coolGray300"}
            borderBottomWidth={1}
            flexDirection="row"
            flex={1}
          >
            <Box flex={1} mr={"$4"}>
              <Image
                source={{ uri: item.image }}
                w="$full"
                h="$full"
                alt="Image Data"
                role="img"
              />
            </Box>
            <Box flex={1.8}>
              <Text fontSize={"$sm"}>{item.date}</Text>
              <Heading lineHeight={"$md"} fontSize={"$md"}>
                {item.title}
              </Heading>
            </Box>
          </Box>
        </TouchableOpacity>
      </Link>
    </>
    );
  };

  return (
    <>

      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 30 }}
      />
    </>
  );
};

export default Home;