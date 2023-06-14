import { makeAutoObservable } from 'mobx';
import { ImageSourcePropType } from 'react-native';
import { on_boarding_step_1_description, on_boarding_step_1_title, on_boarding_step_2_description, on_boarding_step_2_title, on_boarding_step_3_description, on_boarding_step_3_title } from '../../assets/strings/strings';


export class OnBoardingViewModel {
    constructor() {
        makeAutoObservable(this)
    }

    private _logoPath: ImageSourcePropType = require('../../assets/pngs/logo-cut.png')
    public get logoPath(): ImageSourcePropType {
        return this._logoPath
    }
    private set logoPath(path: ImageSourcePropType) {
        this._logoPath = path
    }

    private _stepIndicator: number = 1
    public get stepIndcator(): number {
        return this._stepIndicator
    }
    private set stepIndicator(step: number) {
        this._stepIndicator = step
    }


    private _textDescription: string = on_boarding_step_1_description
    public get textDescription(): string {
        return this._textDescription
    }
    private set textDescription(text: string) {
        this._textDescription = text
    }

    private _textTitle: string = on_boarding_step_1_title
    public get textTitle(): string {
        return this._textTitle
    }
    private set textTitle(text: string) {
        this._textTitle = text
    }


    public updateData() {
        this._stepIndicator = this.stepIndcator + 1
        switch (this.stepIndcator) {
            case 2: {
                this._textTitle = on_boarding_step_2_title
                this._textDescription = on_boarding_step_2_description
                this.logoPath = require('../../assets/pngs/logo-camera.png')
                break
            }
            case 3: {
                this._textDescription = on_boarding_step_3_description
                this.textTitle = on_boarding_step_3_title
                this._logoPath = require("../../assets/pngs/logo-ticket.png")
                break
            }
        }
    }
}