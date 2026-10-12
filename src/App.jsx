import CardProjeto from './CardProjeto';

function App() {
  return (
    <div>
      <h1>Os Meus Trabalhos</h1>
      <CardProjeto
        titulo="Rotina do Herói"
        descricao="Aplicação móvel gamificada desenvolvida em Flutter para gestão de tarefas e foco"
      />
      <CardProjeto
        titulo="Climapp"
        descricao="App de previsão meteorológica e fases da lua com integração Firebase e consumo de API"
      />
    </div>
  );
}

export default App;

