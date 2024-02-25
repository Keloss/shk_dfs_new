import {makeAutoObservable} from "mobx";

export default class Paths {
    constructor(){
        this._path = []
        this._section = []
        this._spk = []
        this._managers = []
        this._subSection = []

        this._selectedPath = {}
        this._selectedSection = {}
        this._selectedSpk = {}
        this._selectedManagers = {}
        this._selectedSubSection = {}
        makeAutoObservable(this)
    }

    setPath(path){
        this._path = path
    }
    
    setSection(section){
        this._section = section
    }

    setSpk(spk){
        this._spk = spk
    }

    setManagers(managers){
        this._managers = managers
    }

    setSubSection(subSection){
        this._subSection = subSection
    }

    setSelectedSubSection(selectedSubSection){
        this._selectedSubSection = selectedSubSection
    }

    setSelectedPath(selectedPath){
        this._selectedPath = selectedPath
    }

    setSelectedSection(selectedSection){
        this._selectedSection = selectedSection
    }

    setSelectedSpk(selectedSpk){
        this._selectedSpk = selectedSpk
    }

    setSelectedManagers(selectedManagers){
        this._selectedManagers = selectedManagers
    }

    get path(){
        return this._path
    }

    get section(){
        return this._section
    }

    get spk(){
        return this._spk
    }

    get managers(){
        return this._managers
    }

    get subSection(){
        return this._subSection
    }

    get selectedSubSection(){
        return this._selectedSubSection
    }

    get selectedPath(){
        return this._selectedPath
    }

    get selectedSection(){
        return this._selectedSection
    }

    get selectedSpk(){
        return this._selectedSpk
    }

    get selectedManagers(){
        return this._selectedManagers
    }
}