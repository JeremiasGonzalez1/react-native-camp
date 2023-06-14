import React from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
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
import Carousel from 'react-native-snap-carousel';
import { Poster } from '../../components/GlobalScreen/Poster';
import { Search } from '../../components/home/Search';
import { Profile } from '../../components/home/Profile';
import { StylePoster } from '../../style/StylePoster';
import { Welcom } from '../../components/home/Welcom';
import { ItemUpComing } from '../../components/home/ItemUpComing';
import { SeccionDivider } from '../../components/onBoarding/SeccionDivider';
import { Style } from '../../style/style';

const windowWidth = Dimensions.get('window').width

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
        <ScrollView style={Style.globalStyle}>
            <View style={{
                flexDirection: 'row',
            }}>
                <Welcom />
                <Profile />
            </View>

            <View>
                <Search />
                <SeccionDivider tittle={"Now Playing"} button={"See all"} />
                <NowPlayingScreen viewModel={viewModel} />
            </View>

            <View>
                <SeccionDivider tittle={"Up Coming"} button={"See all"} />
                <UpComingScreen viewModel={viewModel} />
            </View>

        </ScrollView>
    )
}

interface ViewProps {
    viewModel: HomeViewModel
}

const NowPlayingScreen = observer(({ viewModel }: ViewProps) => {
    const movies = viewModel.nowPlaying
    return (
        <View style={{}}>
            <GestureHandlerRootView style={StylePoster.carouselStyle}>
                <Carousel
                    itemWidth={300}
                    sliderWidth={windowWidth}
                    data={movies}
                    inactiveSlideOpacity={0.9}
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