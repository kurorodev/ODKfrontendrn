import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyle, isLoading }) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-orange-500 rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
    >
      <Text style={styles.text}>Продолжить</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles=StyleSheet.create({
  text: {
    color: 'white'
  }
})