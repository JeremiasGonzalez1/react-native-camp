import React from 'react'
import { TextInput, View } from 'react-native'
import { StyleSearch } from '../../style/StyleSearch'

export const Search = () => {
    return (
        <View style={StyleSearch.searchContainer}>
            <TextInput style={{ ...StyleSearch.searchStyle, }}
                placeholder='Search Movie'
                placeholderTextColor={"white"}
            >
            </TextInput>
        </View>
    )
} 
