import mobx, { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types=[
            { id:1, name:"Холодильники" },
            { id:2, name:"Смартфоны" }
        ]
        this._brands=[
            { id:1, name:"Samsung" },
            { id:2, name:"Apple" }
        ]
        makeAutoObservable(this)
    }
}