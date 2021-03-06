/**
 * Created by Uncle Charlie, 2017/01/31
 */

import React from 'react'

export default function TitleInput({title, placeHolder, type}) {
  return (
    <div style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
      <span>{title}</span>
      <input type='text' placeholder={placeHolder} type={!type ? '' : type} />
    </div>
  )
}