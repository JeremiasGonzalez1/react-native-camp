import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"

export const Profile = () => {
    return (
        <View style={{
            flex:1,
            alignItems:'flex-end',
        }}>
            <TouchableOpacity style={{
                height: 50,
                width: 50,
                marginTop: 43,
                marginEnd: 20,
                backgroundColor: "white",
                borderRadius: 5,
            }} >
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <Icon name='person' size={50} color={"black"} />

                </View>
            </TouchableOpacity>
        </View>
    )
}
