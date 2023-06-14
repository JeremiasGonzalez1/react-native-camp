import React from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
    opacity?: number
}

export const StepIndicator = ({ opacity = 0.3 }: Props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', top:-65 }}>
            <View style={{
                ...styleStepIndicator.ballStyle,
                opacity
            }}>
            </View>
        </View>
    )
}

const styleStepIndicator = StyleSheet.create({
    ballStyle: {
        height: 8,
        width: 8,
        borderRadius: 50,
        marginHorizontal: 8,
        backgroundColor: "white",
    }
})
