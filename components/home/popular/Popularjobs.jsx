import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "@/constants";
import PopularJobCard from "./../../common/cards/popular/PopularJobCard";
import { useRouter } from "expo-router";
import useFetch from "../../../hook/useFetch"

export default function Popularjobs() {
  const router = useRouter();
 const {data, isLoading, error} = useFetch('search',{
  query : "React developer",
  num_pages : "1"
 })

 const [selectedJob, setSelectedJob] = useState();

 const handleCardPress = (item) => {
  router.push(`/job-details/${item.job_id}`);
  setSelectedJob(item.job_id);
};



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity
        
        >
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary}/>
          ) : error ? (
            <Text >Something went wrong</Text>
          ) : (
            <FlatList 
            data={data}
            renderItem={({item})=>(
             <PopularJobCard 
             item={item}
             handleCardPress={handleCardPress}
             selectedJob={selectedJob}
             />
            )}
            keyExtractor={(item)=>item?.job_id}
            contentContainerStyle = {{columnGap : SIZES.medium}}
            horizontal
            />
          )
        }
      </View>
    </View>
  );
}
