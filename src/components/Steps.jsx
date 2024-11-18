import { AiOutlineUser, AiOutlineLock, AiOutlineLogin } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

import './Steps.css';

export const Steps = ({currentStep}) => {
  return (
    <div className='steps'>
        <div className="step active">
            <AiOutlineUser/>
            <p>Identificação</p>
        </div>
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
            <AiOutlineLock/>
            <p>Senha</p>
        </div>
        <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
            <AiOutlineLogin/>
            <p>Envio</p>
        </div>
    </div>
  )
}
