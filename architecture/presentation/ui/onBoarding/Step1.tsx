import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Logo } from '../../components/GlobalScreen/Logo'
import { StepIndicator } from '../../components/onBoarding/StepIndicator'
import { TextOnBoarding } from '../../components/onBoarding/TextOnBoarding'
import { OnBoardingViewModel } from './OnBoardingviewModel'
import { observer } from 'mobx-react-lite'

interface Props extends StackScreenProps<any, any> { }

export const Step1 = (navigation: Props) => {

    useEffect(() => {
        navigation.navigation.setOptions({ headerShown: false })
    },)

    const viewModel = new OnBoardingViewModel()

    return (
        <CreateOnboarding navigation={navigation} viewModel={viewModel} />
    )
}

interface PropsView {
    viewModel: OnBoardingViewModel,
    navigation: StackScreenProps<any, any>
}

const CreateOnboarding = observer(({ viewModel, navigation }: PropsView) => {

    const renderSteps: number[] = [1, 2, 3]

    const path = viewModel.logoPath

    return (
        <View style={{ backgroundColor: "#121212", flex: 1 }}>

            {/* Background logo*/}
            <Logo logoPath={require('../../assets/pngs/background-brick.png')} width={300} height={250} top={56} />

            {/* Logo */}
            <Logo logoPath={path} top={-125} />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {
                    renderSteps.map((item) => <StepIndicator opacity={(item === viewModel.stepIndcator) ? 1 : 0.3} />)
                }
            </View>

            <TextOnBoarding title={viewModel.textTitle} description={viewModel.textDescription} />

            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} activeOpacity={0.6} onPress={() => viewModel.updateData()}>
                <View style={{ borderRadius: 10, height: 50, width: 343, backgroundColor: "#EBA352", alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: '400', color: "black" }}>
                        Next step
                    </Text>
                </View>
            </TouchableOpacity>
            {
                (viewModel.stepIndcator===3)? <TouchableOpacity style={{}}/> : null
            }

            
        </View>
    )
})

