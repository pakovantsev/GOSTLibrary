export let store = {
    callback() {
        console.log("state changed")
    },
    observerApp(subscribe) {
        this.callback = subscribe
    },
    state : [{
        id: 0,
        type: 'book',
        authorCheck: false,
        titleCheck: false,
        houseCheck: false,
        author: [
            {
                id: 0,
                authorIO: '',
                authorSurname: ''
            }
        ],
        title: '',
        titleInformation: '',
        place: '',
        replace: '',
        publishingHouse: '',
        republishingHouse: '',
        year: '',
        editor: [],
        translator: [],
        collectives: [],
        count: ''
    }],

    _updateAuthorSurname(newElem, i, id) {
        this.state[id].author[i].authorSurname = newElem
        this.callback()
    },
    _updateAuthorIO(newElem, i, id) {
        this.state[id].author[i].authorIO = newElem
        this.callback()
    },
    _updateAuthorCheck(newElem, id) {
        this.state[id].authorCheck = newElem
        this.callback()
    }, 
    _updateTitle(newElem, id) {
        this.state[id].title = newElem
        this.callback()
    },
    _updateTitleCheck(newElem, id) {
        this.state[id].titleCheck = newElem
        this.callback()
    },
    _updateInformation(newElem, id){
        this.state[id].titleInformation = newElem
        this.callback()
    },
    _updateEditorSurname(newElem, i, id) {
        this.state[id].editor[i].editorSurname = newElem
        this.callback()
    },
    _updateEditorIO(newElem, i, id) {
        this.state[id].editor[i].editorIO = newElem
        this.callback()
    },
    _updateTranslatorSurname(newElem, i, id) {
        this.state[id].translator[i].translatorSurname = newElem
        this.callback()
    },
    _updateTranslatorIO(newElem, i, id) {
        this.state[id].translator[i].translatorIO = newElem
        this.callback()
    },
    _updateCollective(newElem, i, id) {
        this.state[id].collectives[i].collective = newElem
        this.callback()
    },
    _updatePlace(newElem, id) {
        this.state[id].place = newElem
        this.callback()
    },
    _updateRePlace(newElem, id) {
        this.state[id].replace = newElem
        this.callback()
    },
    _updatePublishingHouse(newElem, id) {
        this.state[id].publishingHouse = newElem
        this.callback()
    },
    _updateRePublishingHouse(newElem, id) {
        this.state[id].republishingHouse = newElem
        this.callback()
    },
    _updateHouseCheck(newElem, id) {
        this.state[id].houseCheck = newElem
        this.callback()
    },
    _updateYear(newElem, id) {
        this.state[id].year = newElem
        this.callback()
    },
    _updateCount(newElem, id) {
        this.state[id].count = newElem
        this.callback()
    },
    _updateType(newElem, id) {
        this.state[id].type = newElem
        this.callback()
    },

    _addAuthor(id) {
        let newId
        if (store.state[id].author.length === 0){
            newId = 0
        }
        else {
            newId = store.state[id].author[store.state[id].author.length - 1].id + 1
        }
        let newElem = {
            id: newId,
            authorIO: '',
            authorSurname: ''
        }
        store.state[id].author.push(newElem)
        store.callback()
    },
    _addEditor(id) {
        let newId
        if (store.state[id].editor.length === 0){
            newId = 0
        }
        else {
            newId = store.state[id].editor[store.state[id].editor.length - 1].id + 1
        }
        let newElem = {
            id: newId,
            editorIO: '',
            editorSurname: ''
        }
        store.state[id].editor.push(newElem)
        store.callback()
    },
    _addTranslator(id) {
        let newId
        if (store.state[id].translator.length === 0){
            newId = 0
        }
        else {
            newId = store.state[id].translator[store.state[id].translator.length - 1].id + 1
        }
        let newElem = {
            id: newId,
            translatorIO: '',
            translatorSurname: ''
        }
        store.state[id].translator.push(newElem)
        store.callback()
    },
    _addCollective(id) {
        let newId
        if (store.state[id].collectives.length === 0){
            newId = 0
        }
        else {
            newId = store.state[id].collectives[store.state[id].collectives.length - 1].id + 1
        }
        let newElem = {
            id: newId,
            collective: ''
        }
        store.state[id].collectives.push(newElem)
        store.callback()
    },

    _deleteAuthor(id) {
        if (store.state[id].author.length > 1) {
            store.state[id].author.pop()
            store.callback()
        }
    },
    _deleteEditor(id) {
        store.state[id].editor.pop()
        store.callback()
    },
    _deleteTranslator(id) {
        store.state[id].translator.pop()
        store.callback()
    },
    _deleteCollective(id) {
        store.state[id].collectives.pop()
        store.callback()
    },

    dispatch(param) {
        if (param.type === 'UPDATE-AUTHOR-SURNAME') {
            this._updateAuthorSurname(param.newElem, param.i, param.id)
        }
        else if (param.type === 'UPDATE-AUTHOR-IO') {
            this._updateAuthorIO(param.newElem, param.i, param.id)            
        }
        else if (param.type === 'UPDATE-CHECK-AUTHOR') {
            this._updateAuthorCheck(param.newElem, param.id)            
        }
        else if (param.type === 'UPDATE-EDITOR-SURNAME') {
            this._updateEditorSurname(param.newElem, param.i, param.id)
        }
        else if (param.type === 'UPDATE-EDITOR-IO') {
           this._updateEditorIO(param.newElem, param.i, param.id)            
        }
        else if (param.type === 'UPDATE-TRANSLATOR-SURNAME') {
            this._updateTranslatorSurname(param.newElem, param.i, param.id) 
        }
        else if (param.type === 'UPDATE-TRANSLATOR-IO') {
            this._updateTranslatorIO(param.newElem, param.i, param.id)            
        }
        else if (param.type === 'UPDATE-COLLECTIVE') {
            this._updateCollective(param.newElem, param.i, param.id)
        }
        else if (param.type === 'UPDATE-TITLE') {
            this._updateTitle(param.newElem, param.id)
        }
        else if (param.type === 'UPDATE-CHECK-TITLE') {
            this._updateTitleCheck(param.newElem, param.id)            
        }
        else if (param.type === 'UPDATE-INFORMATION') {
            this._updateInformation(param.newElem, param.id)
        }
        else if (param.type === 'UPDATE-PLACE') {
            this._updatePlace(param.newElem, param.id)
        }
        else if (param.type === 'UPDATE-REPLACE') {
            this._updateRePlace(param.newElem, param.id)
        }
        else if (param.type === 'UPDATE-CHECK-HOUSE') {
            this._updateHouseCheck(param.newElem, param.id)            
        }
        else if (param.type === 'UPDATE-YEAR') {
            this._updateYear(param.newElem, param.id)
        }
        else if (param.type === 'UPDATE-COUNT') {
            this._updateCount(param.newElem, param.id)
        }
        else if (param.type === 'UPDATE-PUBLISHING') {
            this._updatePublishingHouse(param.newElem, param.id)
        }
        else if (param.type === 'UPDATE-REPUBLISHING') {
            this._updateRePublishingHouse(param.newElem, param.id)
        }
        else if (param.type === 'UPDATE-TYPE') {
            this._updateType(param.newElem, param.id)
        }
        else if (param.type === 'ADD-AUTHOR') {
            this._addAuthor(param.id)
        }
        else if (param.type === 'ADD-EDITOR') {
            this._addEditor(param.id)
        }
        else if (param.type === 'ADD-TRANSLATOR') {
            this._addTranslator(param.id)
        }
        else if (param.type === 'ADD-COLLECTIVE') {
            this._addCollective(param.id)
        }
        else if (param.type === 'DELETE-AUTHOR') {
            this._deleteAuthor(param.id)
        }
        else if (param.type === 'DELETE-EDITOR') {
            this._deleteEditor(param.id)
        }
        else if (param.type === 'DELETE-TRANSLATOR') {
            this._deleteTranslator(param.id)
        }
        else if (param.type === 'DELETE-COLLECTIVE') {
            this._deleteCollective(param.id)
        }
        else if (param.type === 'CALLBACK') {
            this.callback()
        }
    }
}