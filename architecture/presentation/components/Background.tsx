import React from 'react'
import { View } from 'react-native';

interface Props {
    backgroundColor: string
}

export const Background = () => {
    return (

        <View style={{
            position: 'absolute',
            backgroundColor: "#161616",
            width: 1000,
            height: 1200,
            top: -510,
            transform: [
                {
                    rotate: "-700deg"
                }
            ]
        }}>
        </View>
    )
}
