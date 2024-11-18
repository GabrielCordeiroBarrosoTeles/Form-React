import React, { useState } from 'react';

export const UserPassword = ({data,updateFieldHandler}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (pass, confirmPass) => {
    if (pass !== confirmPass) {
      setError('As senhas estão diferentes.');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <div className="form-control">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Digite sua senha"
          required
          value={data.senha || ""}
          onChange={(e) => {
            updateFieldHandler("senha", e.target.value);  
            handlePasswordChange(e);  
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="confSenha">Confirmar Senha:</label>
        <input
          type="password"
          name="confSenha"
          id="confSenha"
          placeholder="Confirme sua senha"
          required
          value={data.confSenha || ""}
          onChange={(e) => {
            updateFieldHandler("confSenha", e.target.value);  
            handlePasswordChange(e);  
          }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};
