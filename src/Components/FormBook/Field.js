import React from 'react'

const Field = (props) => {
  let newElement = React.createRef()
  const onChange = () => {
    let param = {
      type: t,
      newElem: newElement.current.value,
      i: props.id
    }
    props.dispatch(param)
  }
  let placeholder
  let t
  if (props.type === 'IO-A') {
    placeholder = 'Инициалы автора'
    t = 'UPDATE-AUTHOR-IO'
  }
  else if (props.type === 'Surname-A') {
    placeholder = 'Фамилия  автора'
    t = 'UPDATE-AUTHOR-SURNAME'
  }
  else if (props.type === 'IO-E') {
    placeholder = 'Инициалы редактора'
    t = 'UPDATE-EDITOR-IO'
  }
  else if (props.type === 'Surname-E') {
    placeholder = 'Фамилия редактора'
    t = 'UPDATE-EDITOR-SURNAME'
  }
  else if (props.type === 'IO-T') {
    placeholder = 'Инициалы переводчика'
    t = 'UPDATE-TRANSLATOR-IO'
  }
  else if (props.type === 'Surname-T') {
    placeholder = 'Фамилия  переводчика'
    t = 'UPDATE-TRANSLATOR-SURNAME'
  }
  else if (props.type === 'Collective') {
    placeholder = 'Коллектив'
    t = 'UPDATE-COLLECTIVE'
  }
  else if (props.type === 'Title') {
    placeholder = 'Заглавие'
    t = 'UPDATE-TITLE'
  }
  else if (props.type === 'Title-Information') {
    placeholder = 'Сведения о заглавии'
    t = 'UPDATE-INFORMATION'
  }
  else if (props.type === 'Place') {
    placeholder = 'Место издания'
    t = 'UPDATE-PLACE'
  }
  else if (props.type === 'RePlace') {
    placeholder = 'Место переиздания'
    t = 'UPDATE-REPLACE'
  }
  else if (props.type === 'House') {
    placeholder = 'Издательство'
    t = 'UPDATE-PUBLISHING'
  }
  else if (props.type === 'ReHouse') {
    placeholder = 'Издательство переиздания'
    t = 'UPDATE-REPUBLISHING'
  }
  else if (props.type === 'Year') {
    placeholder = 'Год издания'
    t = 'UPDATE-YEAR'
  }
  else if (props.type === 'Count') {
    placeholder = 'Обьем'
    t = 'UPDATE-COUNT'
  }
  return (
    <input type="text" placeholder={placeholder}
    value={props.elem} 
    onChange={ onChange } 
    ref={ newElement } />
  )
}

export default Field;