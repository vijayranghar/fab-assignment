import React from 'react'

export let App =  (props) => {
  return (
    <div>inside app
    {props.children}</div>
  )
}
export let TextField =  (props) => {
  return (
    <div>inside TextField {props.children}</div>
  )
}

export let Divider =  (props) => {
  return (
    <div>inside divider {props.children}</div>
  )
}
export let Card =  (props) => {
  return (
    <div>inside card {props.children}</div>
  )
}
export let CardHeader =  (props) => {
  return (
    <div>
    <h4>Card header goes here </h4>
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
      <p>{props.avatar}</p>
      {props.children}
    </div>
  )
}
export let CardTitle =  (props) => {
  return (
    <div>
      <h4>inside card title {props.children}</h4>
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </div>
  )
}
export let CardText =  (props) => {
  console.log(props)
  return (
    <div>
      <h4>inside CardText</h4>
      <p>{props.text}</p>
      {props.children}
     </div>
  )
}
export let CardActions =  (props) => {
  return (
    <div>
    <h4>card Actions{props.children}</h4>
    </div>
  )
}
export let FlatButton =  (props) => {
  console.log(props)
  return (
    <div>
      inside FlatButton
      <p>{props.label}</p>
    {props.children}</div>
  )
}
