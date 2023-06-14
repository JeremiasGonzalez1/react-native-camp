import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

interface Props {
    tittle: string,
    button: string
}

export const SeccionDivider = ({ tittle, button }: Props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28 }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: "white", marginStart: 18 }}>
                {
                    tittle
                }
            </Text>

            <TouchableOpacity>
                <Text style={{ fontSize: 14, fontStyle: 'normal', color: "#EBA352", marginEnd: 39 }}>
                    {
                        button
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

