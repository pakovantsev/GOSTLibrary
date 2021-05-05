import React from 'react'
import Field from '../Field'

const TitleInformation = (props) => {
    if (!props.check) {
        return (
            <>
                <Field elem={props.state.titleInformation}
                    dispatch={props.dispatch}
                    type='Title-Information' />
            </>
        )
    }
    else return <></>
}

export default TitleInformation