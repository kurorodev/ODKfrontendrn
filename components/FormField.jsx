import { View, Text, TextInput } from 'react-native'
import React ,{ useState } from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setshowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100"t>{title}</Text>
      <View className="rounded-xl min-h-[62px] justify-center items-center  mr-3 bg-blue-500">
        <TextInput 
            className="flex-1 text-white" 
            value={value}
            placeholder={placeholder}
            placeholderTextColor="7b7b8b"
            onChangeText={handleChangeText}    
            secureTextEntry={title === 'Password' && !showPassword}   
        />
      </View>
    </View>
  )
}

export default FormField