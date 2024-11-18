import React from 'react';

export const Finish = ({data}) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎉 Conta criada com sucesso! 🎉</h2>
      <p style={styles.message}>
        Parabéns {data.name}! Sua conta foi criada com sucesso. Você já pode acessar todos os recursos disponíveis.
      </p>

      <button style={styles.button} onClick={() => alert(`Bem-vindo, ${data.name}!`)}>
        Ir para a página inicial
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#2c3e50',
    fontSize: '24px',
    marginBottom: '10px',
  },
  message: {
    color: '#7f8c8d',
    fontSize: '16px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};
