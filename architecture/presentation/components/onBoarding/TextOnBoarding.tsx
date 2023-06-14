import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string,
    description: string
}

export const TextOnBoarding = ({ title, description }: Props) => {
    return (
        <View style={{marginHorizontal:16, marginTop:-52}}>
            <Text style={styleTextOnBoarding.title}>
                {title}
            </Text>

            <Text style={styleTextOnBoarding.description}>
                {description}
            </Text>
        </View>
    )
}

const styleTextOnBoarding = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
        marginTop: 50,
        marginBottom: 8,
        textAlign:'center',
    },
    description: {
        fontSize: 15,
        fontWeight: 'normal',
        color: "white",
        justifyContent: 'center',
        marginBottom: 69, 
        opacity:0.5,
        textAlign:'center'
    }
})
