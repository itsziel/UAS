import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Bookmark = () => {
  const navigation = useNavigation();

  const events = [
    {
      id: 1,
      title: "EVENT 1",
      description: "This is the description for Event 1.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDpet-RwLSaLXEh-pwc_APyX-zCK9OVokJmdqUXSis2wwevSRnZqjMpn2rL38YeGNbvuQzV3OwvHF2jpHirvl4jVc-49BbnCU-5I82tCXWyI7mpm4cskV2e898wTFR6jlfJRJCcNZjJO-xDn3HpxFNA4xzAL2h_nNX6AjSb8qHB96hABeNj3dd4bCs/s2048/Lomba-Poster-Hari-Pancasila-2048x2048.jpg",
    },
    {
      id: 2,
      title: "EVENT 2",
      description: "This is the description for Event 2.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-9jIKU3RfxL_eMLiJrvtN4ID0_hEKjhirIZM-YTefI-Peflt3aL-ap01PM6Ld4DB8OmHPlilIXMOkF5umjWIAHW3T7NYb8ZsBZE7tADpQkh_i8RESv5l7s0YgOXifqBIfjKuNHpqEGKvYCyLe-W7ErUe-Ie6_nju_yw6ZqpK7iwz6mRU3VR7zx7Th/s617/Screenshot_349.png",
    },
    {
      id: 3,
      title: "EVENT 3",
      description: "This is the description for Event 3.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUDzTO0lM_6c94tdW4kKhXrIKvexEtSpYGtpPRASq6c7OFL_ANfZV8aAf9AKe0a_06LLrrhgooz9jj2dQj0X-rj-X0PGRd0hiaUKKxJrHtm8jYEmcdSvbeexegzwLQwunNEcNM3AT30sYUxgm3495axhwnIoBt5Q6osgcQaVcJDUJMsakfeLEJjtKb/s803/Screenshot_312.png",
    },
    {
      id: 4,
      title: "EVENT 4",
      description: "This is the description for Event 4.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkTaNSERfJBBxpCKt1tlfhEyV-xJqewbvPa8CLaAjWfPxGKTXhLSX8Vq688VuJ4AxrW17-fHuSEeFkKKJrq71o8PmayroRg-WURpyZIZxiL-QR0HpddKSi1ckZvFbN3uKPgH1OdWBy_8V_s2NRAsLOwpAEembVQs8z-NC5n5ApT7SUklFhVzlKkMtDRQUd/w480-h640/Pamflet%20Lomba%20Techcomfest%202024%20-%202.jpg",
    },

    {
      id: 5,
      title: "EVENT 5",
      description: "This is the description for Event 4.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkTaNSERfJBBxpCKt1tlfhEyV-xJqewbvPa8CLaAjWfPxGKTXhLSX8Vq688VuJ4AxrW17-fHuSEeFkKKJrq71o8PmayroRg-WURpyZIZxiL-QR0HpddKSi1ckZvFbN3uKPgH1OdWBy_8V_s2NRAsLOwpAEembVQs8z-NC5n5ApT7SUklFhVzlKkMtDRQUd/w480-h640/Pamflet%20Lomba%20Techcomfest%202024%20-%202.jpg",
    },
  ];

  const [pressedEventCardId, setPressedEventCardId] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 15,
          backgroundColor: pressedEventCardId ? "#ccc" : "#8B0000",
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center"}}>
          <TouchableOpacity onPress={() => router.replace('/profile')}>
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          <Text style={{ textTransform: 'none', fontSize: 20, marginLeft: 10, color:"white"}}>Bookmark</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
            <Ionicons name="search" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="menu" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={{ padding: 10 }}>
          {events.map((event) => (
            <TouchableOpacity
              key={event.id}
              style={{
                padding: 20,
                borderBottomWidth: 5,
                borderBottomColor: "#ccc",
                flexDirection: "row",
                justifyContent: 'flex-start',
                backgroundColor: pressedEventCardId === event.id ? "#ccc" : "#fff",
              }}
              onPress={() => setPressedEventCardId(event.id)}
              onRelease={() => setPressedEventCardId(null)}
            >
              <Image source={{ uri: event.image }} style={{ width: 100, height: 100 }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{event.title}</Text>
                <Text>{event.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Bookmark;
