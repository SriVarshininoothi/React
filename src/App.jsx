import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Props from './JSX_Props/Props'
import Rendering from './JSX_Props/Rendering'
import Counter from './useState - ReactHook/counter'
import ObjectState from './useState - ReactHook/ObjectState'
import ArrayState from './useState - ReactHook/ArrayState'
import FormInput from './useState - ReactHook/FormInput'
import Product from './JSX_Props/Product'
import Rendering_list from './Rendering_Lists/Rendering_list'
import FormValidation from './Events&FormHandling/FormValidation'
import FetchAPI from './UseEffect/FetchAPI'
import ProductCards from './UseEffect/ProductCards'
import RandomuserGenerator from './UseEffect/RandomuserGenertor'
import EmployeeDashboard from './Rendering_Lists/EmployeeDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

       {/* <Props /> 
       <Rendering/> */}
      {/* <Counter/>  */}
      {/* <ObjectState/> */}
      {/* <ArrayState/> */}
      {/* <FormInput/> */}
      {/* <Product/> */}
      {/* <Rendering_list/> */}
      {/* <FormValidation/> */}
      {/* <FetchAPI/> */}
      {/* <ProductCards/> */}

      {/* <RandomuserGenerator/> */}
      <EmployeeDashboard/>
      
    </>
  )
}

export default App
