import React from 'react'
import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native';
import { Movie } from '../../../domain/entities/Movie'

interface ItemDetail {
    movieDetail: Movie
}


export const ItemUpComing = ({ movieDetail }: ItemDetail) => {
    const baseUrl = "https://image.tmdb.org/t/p/w500"
    return (
        <TouchableOpacity style={{ height: 100, width: "100%", borderRadius: 10, marginVertical: 8 }}>
            <View style={{ backgroundColor: "#404040", flex: 1, borderRadius:15, marginHorizontal:12 }}>

                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>

                    {/* Image render */}

                    <View style={{

                        borderRadius: 18,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 3,
                    }} >
                        <Image style={{ flex: 1, borderRadius: 18, height: 100, width: 90 }} source={{ uri: baseUrl + movieDetail.poster_path }} />

                    </View>

                    {/* Tittle and genres */}
                    <View style={{ justifyContent: 'space-evenly', alignContent: 'flex-start', marginStart: 22 }}>
                        <Text style={{ fontSize: 16, color: "white", fontWeight: "900" }} numberOfLines={1}>
                            {
                                movieDetail.title
                            }
                        </Text>

                        <Text style={{ fontSize: 14, fontWeight: "300", color: "grey" }}>
                            Aventura, Drama, Suspenso
                        </Text>

                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}

