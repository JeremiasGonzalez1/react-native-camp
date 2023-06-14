import React from 'react'
import { Image, View, Button, Text, TouchableOpacity } from 'react-native'
import { Movie } from '../../../domain/entities/Movie'
import { StylePoster } from '../../style/StylePoster'

interface Props {
    movie: Movie
}
export const Poster = ({ movie }: Props) => {
    const baseUrl = "https://image.tmdb.org/t/p/w500"
    return (

        <TouchableOpacity
            activeOpacity={0.8}

            style={{
                flex: 1,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
                height:420, 
                width:300
            }}>
            <View style={{
                flex: 1
            }}>
                <Image style={{
                    flex: 1
                }} source={{
                    uri: baseUrl + movie.poster_path
                }}
                />

                <Text style={StylePoster.titleStyle} numberOfLines={1}>{movie.title}</Text>
                <Text style={StylePoster.subTittleStyle}>{movie.genre_ids[0] > 2 ? "aventura" : "horror"}</Text>
            </View>
        </TouchableOpacity>
    )
}
