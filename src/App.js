import React from "react";
import './App.css'
import { Form } from './components/FormFunc/Form';

// export class App extends Component{
//   render(){
//     return <Form/>
//   }
// }

export const App = () => {
  return <>
    <div className='form'>test div</div>
    <Form/>
  </>
}