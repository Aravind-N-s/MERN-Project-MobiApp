import React from 'react'
import StepZilla from 'react-stepzilla'

import InitialForm from "./product/initial";
import GeneralForm from "./specification/general";
import DesignForm from "./specification/design";
import DisplayForm from "./specification/display";
import PerformanceForm from "./specification/performance";
import StorageForm from "./specification/storage";
import CameraForm from "./specification/camera";
import BatteryForm from "./specification/battery";
import NetworkForm from "./specification/network";
import MultimediaForm from "./specification/multimedia";
import SprecialForm from "./specification/special";

const steps = [
  { name: "Inital", component: <InitialForm /> },
  { name: "General", component: <GeneralForm /> },
  { name: "Design", component: <DesignForm /> },
  { name: "Display", component: <DisplayForm /> },
  { name: "Performance", component: <PerformanceForm /> },
  { name: "Storage", component: <StorageForm /> },
  { name: "Camera", component: <CameraForm /> },
  { name: "Battery", component: <BatteryForm /> },

  { name: "Network", component: <NetworkForm /> },
  { name: "Multimedia", component: <MultimediaForm /> },
  { name: "special", component: <SprecialForm /> }
];

class Steps extends React.Component {
	render(){
		return (
      <div className="step-progress">
        <StepZilla steps={steps} />
      </div>
    );
	}
}

export default Steps