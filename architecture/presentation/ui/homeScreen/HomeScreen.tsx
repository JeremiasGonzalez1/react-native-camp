import React from 'react'
import { Text, View } from 'react-native'
import { HomeViewModel } from './HomeViewModel'
import { GetPlayNowUseCase } from '../../../domain/usecase/GetPlayNowUseCase'
import { MovieRepositoryImpl, NetworkDataSource } from '../../../data/repositories/MovieRepository';
import { CacheDataSourceImpl } from '../../../data/datasources/CacheDataSourceImpl'
import { FakeMovieDBImpl } from '../../../data/ddbb/InmemoryDb'
import { NetworkDataSourceImpl } from '../../../data/datasources/NetworkDataSourceImpl'
import { SearchFilmUseCase } from '../../../domain/usecase/SearchFilmUseCase';
import { UpComingUseCase } from '../../../domain/usecase/UpComingUseCase';

export const HomeScreen = () => {
    const movieDb = new FakeMovieDBImpl()
    const networkDataSource = new NetworkDataSourceImpl()
    const cacheDataSource = new CacheDataSourceImpl(movieDb)
    const repositoryImpl = new MovieRepositoryImpl(cacheDataSource, networkDataSource)
    const playNowuseCase = new GetPlayNowUseCase(repositoryImpl)
    const searchFilmUseCase = new SearchFilmUseCase(repositoryImpl)
    const upComingUseCase = new UpComingUseCase(repositoryImpl)

    const viewModel = new HomeViewModel(playNowuseCase, searchFilmUseCase, upComingUseCase)
    // viewModel.getFilmSearch("spiderman")
    viewModel.getUpComing()
    //console.log(JSON.stringify(viewModel.getPlayNow(), null, 2))
    return (
        <View>
            <Text>
                Home screen
            </Text>
        </View>
    )
}
