import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center gap-2">
            <Image
                source = {icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs className="bg-gradient-to-r ">
            <Tabs.Screen 
            name="MainScreen"
            options={
                {
                    title: '',
                    headerShown: false,
                    headerLeft:null,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.home}
                            color = {color}
                            name = "Home"
                            focused={focused}
                        />
                    )
                }
            }
            />
            <Tabs.Screen 
            name="Schedule"
            options={
                {
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.calendar}
                            color = {color}
                            name = "Home"
                            focused={focused}
                        />
                    )
                }
            }
            />
            <Tabs.Screen 
            name="ChatScreen"
            options={
                {
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.messages}
                            color = {color}
                            name = "Home"
                            focused={focused}
                        />
                    )
                }
            }
            />
            <Tabs.Screen 
            name="PersonalInfoScreen"
            options={
                {
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.profile}
                            color = {color}
                            name = "profile"
                            focused={focused}
                        />
                    )
                }
            }
            />
            <Tabs.Screen 
            name="HomeScreen"
            options={
                {
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.bookmark}
                            color = {color}
                            name = "Home"
                            focused={focused}
                        />
                    )
                }
            }
            />
        </Tabs>
    </>
  )
}

export default TabsLayout