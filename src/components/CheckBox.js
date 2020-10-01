import React from 'react'

/**
* component checkbox shared
* @param handleCheckChieldElement : handle event on check item checkbox
* @param id : props id item checkbox
* @param value : props value item checkbox
* @param isChecked : props state item checkbox (true/false)
*/
export const CheckBox = props => {
  return (
    <li>
      <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
    </li>
  )
}

export default CheckBox