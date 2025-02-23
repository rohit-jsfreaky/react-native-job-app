import React, { useEffect } from 'react'
import { View, Text ,TouchableOpacity , Image , Linking} from 'react-native'

import styles from './footer.style'
import { icons } from '@/constants'


const Footer = ({url}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.likeBtn}
      >

        <Image 
        source={icons.heart}
        resizeMode='contain'
        style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn}
      onPress={()=>Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply For Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer