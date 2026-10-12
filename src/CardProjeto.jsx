import { useState } from 'react';

function CardProjeto({ titulo, descricao }) {
  // Estado booleano inicializado como false
  const [selecionado, setSelecionado] = useState(false);

  // Alterna o estado entre true e false
  const alternarSelecao = () => {
    setSelecionado((prev) => !prev);
  };

  // Estilos básicos em linha (inline styles) com foco nas bordas
  const estiloCard = {
    border: selecionado ? '2px solid #007bff' : '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px 0',
  };

  return (
    <div style={estiloCard}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>

      {/* Renderização condicional do parágrafo quando selecionado for true */}
      {selecionado && <p>Projeto selecionado</p>}

      {/* Botão para alternar o estado com texto condicional */}
      <button onClick={alternarSelecao}>
        {selecionado ? 'Remover seleção' : 'Selecionar'}
      </button>
    </div>
  );
}

export default CardProjeto;

