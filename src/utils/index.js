import React from 'react'
import { App, TextField, Divider, Card, CardHeader, CardTitle, CardText, CardActions, FlatButton } from '../components/index.js'

let renderJSONToElements = (json, key) => {
  key=key+1
  let childNodes = json.children ? json.children.map((item) =>{
    return renderJSONToElements(item,key*Math.random())
  }) : ''
  switch(json.baseType) {
    case 'App':
      return (<App key={key} {...json.props} >{childNodes}</App>)
    case 'TextField':
      return (<TextField key={key} {...json.props} >{childNodes}</TextField>)
    case 'Divider':
      return (<Divider key={key} {...json.props} >{childNodes}</Divider>)
    case 'Card':
      return (<Card key={key} {...json.props} >{childNodes}</Card>)
    case 'CardHeader':
      return (<CardHeader key={key} {...json.props}>{childNodes}</CardHeader>)
    case 'CardTitle':
      return (<CardTitle key={key} {...json.props}>{childNodes}</CardTitle>)
    case 'CardText':
      return (<CardText key={key} {...json.props}>{childNodes}</CardText>)
    case 'CardActions':
      return (<CardActions key={key} {...json.props}>{childNodes}</CardActions>)
    case "FlatButton":
      return (<FlatButton key={key} {...json.props}>{childNodes}</FlatButton>)
    default:
      return (<h1 key={key}></h1>)

  }
}

export default renderJSONToElements
