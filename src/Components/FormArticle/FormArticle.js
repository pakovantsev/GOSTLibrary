import React from 'react'
import Author from '../CommonComponents/Author/Author';
import Field from '../CommonComponents/Field/Field';
import AuthorForm from '../FormBook/AuthorForm/AuthorForm';
import TitleInformation from '../FormBook/TitleInformation/TitleInformation';
import EditorForm from '../FormBook/EditorForm/EditorForm';
import TranslatorForm from '../FormBook/TranslatorForm/TranslatorForm';
import CollectiveForm from '../FormBook/CollectiveForm/CollectiveForm';
import Tom from '../FormBook/TomForm/TomForm';
import ButtonsAddDelete from '../CommonComponents/ButtonsAddDelete/ButtonsAddDelete';
import NumberArticle from './NumberArticle/NumberArticle';

const FormArticle = (props) => {
    let checkAuthorRef = React.createRef()
    let checkTitleRef = React.createRef()
    let checkHouseRef = React.createRef()
    let checkTomRef = React.createRef()
    let checkNumberArticleRef = React.createRef()
    const handleChangeArticleNumber = () => {
        let param = {
            type: 'UPDATE-NUMBER-ARTICLE-CHECK',
            id: props.state.id,
            newElem: checkNumberArticleRef.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeAuthor = () => {
        let param = {
            type: 'UPDATE-CHECK-AUTHOR',
            id: props.state.id,
            newElem: checkAuthorRef.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeTitle = () => {
        let param = {
            type: 'UPDATE-CHECK-TITLE',
            id: props.state.id,
            newElem: checkTitleRef.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeHouse = () => {
        let param = {
            type: 'UPDATE-CHECK-HOUSE',
            id: props.state.id,
            newElem: checkHouseRef.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeTom = () => {
        let param = {
            type: 'UPDATE-CHECK-TOM',
            id: props.state.id,
            newElem: checkTomRef.current.checked
        }
        props.dispatch(param)
    }
    let Source
    if (props.type === 'BOOK') {
        Source = <>
            <AuthorForm state={props.state} dispatch={props.dispatch} check={props.state.authorCheck} />
            <input type="checkbox" ref={checkAuthorRef} onChange={handleChangeAuthor} />Без автора
            <Field elem={props.state.title}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Title' />
            <TitleInformation state={props.state} dispatch={props.dispatch} check={props.state.titleCheck} />
            <input type="checkbox" ref={checkTitleRef} onChange={handleChangeTitle} />Без сведений о книге
            <EditorForm state={props.state} dispatch={props.dispatch} />
            <TranslatorForm state={props.state} dispatch={props.dispatch} />
            <CollectiveForm state={props.state} dispatch={props.dispatch} />
            <Field elem={props.state.place}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Place' />
            <Field elem={props.state.publishingHouse}
                dispatch={props.dispatch}
                index={props.state.id}
                type='House' />
            {/* <input type="checkbox" ref={checkHouseRef} onChange={handleChangeHouse} />Была переиздана */}
            {/* <ReHouseForm state={props.state} dispatch={props.dispatch} check={props.state.houseCheck} /> */}
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Year' />
            <input type="checkbox" ref={checkTomRef} onChange={handleChangeTom} />Добавить том
            <Tom state={props.state} dispatch={props.dispatch} check={props.state.tomCheck} />
        </>
    }
    else if (props.type === 'MAGAZINE') {
        Source = <>
            <Field elem={props.state.title}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Title-Magazine' />
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Year' />
            <Field elem={props.state.numberArticle}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Number' />
        </>
    }
    else if (props.type === 'NEWSPAPER') {
        Source = <>
            <Field elem={props.state.title}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Title-Newspaper' />
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Year' />
            <Field elem={props.state.dateArticle}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Date' />
            <NumberArticle state={props.state} dispatch={props.dispatch} check={props.state.numberArticleCheck} />
            <input type="checkbox" ref={checkNumberArticleRef} onChange={handleChangeArticleNumber} />Без номера газеты
        </>
    }
    return (
        <>
            <Field elem={props.state.titleArticle} dispatch={props.dispatch} index={props.state.id} type='Title-Article' />
            <Author state={props.state.authorArticle} dispatch={props.dispatch} index={props.state.id} typeA='Surname-Article' typeB='IO-Article' />
            <ButtonsAddDelete dispatch={props.dispatch}
                check={props.state.authorArticle.length > 1}
                id={props.state.id}
                type='AUTHOR-ARTICLE' />

            {Source}
            <Field elem={props.state.count}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Count' />
        </>
    )
}

export default FormArticle;