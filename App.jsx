import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard.jsx';

ReactDOM.render(
  <Dashboard classes={{
    tableContainer: '',
    appBarSpacer: '',
    container: '',
    drawerPaper: '',
    title: '',
    toolbar: '',
    root: ''
  }} />,
  mountNode);
  
 const elemento = document.getElementById('container');
/*const boton1 = React.createElement('button', {"data-id":123}, 'tócame');
const boton2 = React.createElement('button', {"data-id":456}, 'tócame');

const group = React.createElement(React.Fragment, null, boton1, boton2);*/

const group= (<React.Fragment>
  <button id='123'>toca</button>
  <button id='456'>toca</button>
</React.Fragment>)

ReactDOM.render(group, elemento);
