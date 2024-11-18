// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { UserName } from './components/UserName';
import { UserPassword } from './components/UserPassword';
import { Finish } from './components/Finish';
import { Steps } from './components/Steps';

// Hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';


import './App.css'


  const formTemplate = {
    name: "",
    email: "",
    senha: "",
    confSenha: "",
  };

function App() {

  const [ data, setData ] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev)=> {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <UserName     data={data} updateFieldHandler={updateFieldHandler}/>,
    <UserPassword data={data} updateFieldHandler={updateFieldHandler}/>,
    <Finish       data={data} />
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
      <div className="app">
        <div className="header">
          <h2>Crie sua conta gratuita</h2>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep}/>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">

            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>
              )}
              

              {!isLastStep ? (
              <button type="button" onClick={() => changeStep(currentStep + 1)}>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
            </div>
          </form>
        </div>
      </div>
  )
}

export default App
