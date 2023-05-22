import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { HomeViewModel } from './HomeViewModel'
import { GetPlayNowUseCase } from '../../../domain/usecase/GetPlayNowUseCase'
import { MovieRepositoryImpl } from '../../../data/repositories/MovieRepository';
import { CacheDataSourceImpl } from '../../../data/datasources/CacheDataSourceImpl'
import { FakeMovieDBImpl } from '../../../data/ddbb/InmemoryDb'
import { NetworkDataSourceImpl } from '../../../data/datasources/NetworkDataSourceImpl'
import { SearchFilmUseCase } from '../../../domain/usecase/SearchFilmUseCase';
import { UpComingUseCase } from '../../../domain/usecase/UpComingUseCase';
import { observer } from 'mobx-react-lite';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { Poster } from '../../components/Poster';
import { Search } from '../../components/Search';
import { Profile } from '../../components/Profile';
import { StylePoster } from '../../style/StylePoster';
import { Welcom } from '../../components/Welcom';
import { ItemUpComing } from '../../components/ItemUpComing';
import { Movie } from '../../../domain/entities/Movie';

export const HomeScreen = () => {
    const movieDb = new FakeMovieDBImpl()
    const networkDataSource = new NetworkDataSourceImpl()
    const cacheDataSource = new CacheDataSourceImpl(movieDb)
    const repositoryImpl = new MovieRepositoryImpl(cacheDataSource, networkDataSource)
    const playNowuseCase = new GetPlayNowUseCase(repositoryImpl)
    const searchFilmUseCase = new SearchFilmUseCase(repositoryImpl)
    const upComingUseCase = new UpComingUseCase(repositoryImpl)
    const viewModel = new HomeViewModel(playNowuseCase, searchFilmUseCase, upComingUseCase)

    viewModel.getPlayNow()
    viewModel.getUpComing()
    return (
        <ScrollView>
            <View style={{
                flexDirection: 'row',
            }}>
                <Welcom />
                <Profile />
            </View>

            <View>
                <Search />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28 }}>
                    <Text style={{ fontSize: 18, fontWeight: '300', color: "white", marginStart: 18 }}>
                        Now Playing
                    </Text>

                    <Text style={{ fontSize: 14, fontStyle: 'normal', color: "#EBA352", marginEnd: 39 }}>
                        See all
                    </Text>
                </View>
                <NowPlayingScreen viewModel={viewModel} />
            </View>

            <View>
                <UpComingScreen viewModel={viewModel} />
            </View>


        </ScrollView>
    )
}

interface ViewProps {
    viewModel: HomeViewModel
}

interface RenderList {
    item: Movie
}

const NowPlayingScreen = observer(({ viewModel }: ViewProps) => {
    const movies = viewModel.nowPlaying
    return (
        <View style={{}}>
            <GestureHandlerRootView style={StylePoster.carouselStyle}>
                <Carousel
                    width={220}
                    height={400}
                    data={movies}
                    scrollAnimationDuration={1000}
                    renderItem={({ index }) => (<Poster movie={movies[index]} />
                    )}
                >
                </Carousel>
            </GestureHandlerRootView>
        </View>
    )
})

const UpComingScreen = observer(({ viewModel }: ViewProps) => {
    const upComing = viewModel.upcoming
    return (
        <View>
            {
                upComing.map((item) => <ItemUpComing movieDetail={item} />)
            }
        </View>
    )
})