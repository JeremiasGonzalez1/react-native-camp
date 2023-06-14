import React from 'react'
import { Text, View } from 'react-native'

export const Welcom = () => {
    return (
        <View style={{
            flexDirection: 'column',
            flex: 1
        }}>
            <Text style={{
                fontSize: 12,
                fontWeight: '600',
                color: "gray",
                marginStart: 20,
                marginTop: 25,
                marginBottom: 16
            }}>
                Welcom Name
            </Text>

            <Text style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "white",
                marginStart: 20,
            }}>
                Let's relax and watch movie
            </Text>
        </View>
    )
}
