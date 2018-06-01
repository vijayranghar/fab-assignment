import React, { Component } from 'react';
import renderJSONToElements from './utils'
let data = {
 "UI": {
    "baseType": "App",
   "children": [
     {
       "baseType": "TextField",
       "props": {
       }
     },
     {
       "baseType": "Divider",
       "props": {
       }
     },
     {
       "baseType": "Card",
       "children": [
         {
           "baseType": "CardHeader",
           "props": {
             "title": "URL Avatar",
             "subtitle": "Subtitle",
             "avatar": "Sample Avatar"
           }
         },
         {
           "baseType": "CardTitle",
           "props": {
             "title": "card title",
             "subtitle": "sub title"
           }
         },
         {
           "baseType": "CardText",
           "props": {
             "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat."
           }
         },
         {
           "baseType": "CardActions",
           "children": [
             {
               "baseType": "FlatButton",
               "props": {
                 "label": "Action 1"
               }
             },
             {
               "baseType": "FlatButton",
               "props": {
                 "label": "Action 1"
               }
             }
           ]
         }
       ]
     }
   ]
 }
}
class Wrapper extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {renderJSONToElements(data.UI,99999)}
        </div>
      </div>
    );
  }
}

export default Wrapper;
