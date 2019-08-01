import React from 'react'
import StepZilla from 'react-stepzilla'

import ProductForm from './productAdmin/productForm'
import SpecificationGeneralForm from './productAdmin/genSpecForm'
import SpecificationDimForm from './productAdmin/dimSpecForm'
import SpecificationDisForm from './productAdmin/disSpecForm'
import SpecificationPerForm from './productAdmin/perSpecForm'
import SpecificationCamBatForm from './productAdmin/camBatSpecForm'
import SpecificationConForm from './productAdmin/conSpecForm'
import SpecificationMulForm from './productAdmin/mulSpecForm'

const steps =
    [
      {name: 'Product Add',component: <ProductForm />},
      {name: 'General Specification',component: <SpecificationGeneralForm />},
      {name: 'Dimension Specification',component: <SpecificationDimForm />},
      {name: 'Display Specification',component: <SpecificationDisForm />},
      {name: 'Performance Specification',component: <SpecificationPerForm />},
      {name: 'Camera Battery',component: <SpecificationCamBatForm />},
      {name: 'Connectivity',component: <SpecificationConForm />},
      {name: 'Multimedia, Features', component: <SpecificationMulForm />}
    ]

class Steps extends React.Component {
    render(){
        return(
            <div>
                <br />
                <StepZilla steps={steps} />
            </div>
        )
    }
}

export default Steps