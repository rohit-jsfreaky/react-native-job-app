import { Text, View , ScrollView , SafeAreaView} from "react-native";
import { useState } from "react";
import {Stack,useRouter} from "expo-router"
import { COLORS,FONT,SHADOWS,SIZES,icons,images} from "../constants"
import {Nearbyjobs , Popularjobs , ScreenHeaderBtn, Welcome} from "../components"

export default function Index() {

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <SafeAreaView
      style={{
        flex: 1,
       backgroundColor : COLORS.lightWhite
      }}
    >
      <Stack.Screen options={{
        headerStyle : {
          backgroundColor : COLORS.lightWhite,
        },
        headerShadowVisible : false,
        headerLeft : ()=>(
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
        ),
        headerRight : ()=>(
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
        ),
        headerTitle : ""
      }}/>


      <ScrollView showsVerticalScrollIndicator={false}>

      <View
      style={{
        flex : 1,
        padding : SIZES.medium
      }}
      >
        <Welcome 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleClick = {()=>{
          if(searchTerm){
            router.push(`/search/${searchTerm}`)
          }
        }}
        />
        <Popularjobs />
        <Nearbyjobs />
      </View>
      </ScrollView>

    </SafeAreaView>
  );
}
