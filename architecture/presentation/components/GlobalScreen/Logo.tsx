import React from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'

interface Props {
    logoPath: ImageSourcePropType,
    width?: number,
    height?: number,
    top?: number
}

export const Logo = ({ logoPath, width = 237, height = 191, top = 24 }: Props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={logoPath}
                style={{
                    width,
                    height,
                    top
                }}
            />
        </View>
    )
}
