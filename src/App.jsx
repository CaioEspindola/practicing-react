import '../src/App.css'
import React from 'react'

import PrimeiroComponente from './components/NewComponent.jsx'
import ComponentsParameters from './components/ComponentsParameters.jsx'
import ChildComponents from './components/ChildComponents'

import Card from './components/layout/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
  <div className="App">
    <Card titulo="#03 - Componente com Filhos">
      <ChildComponents>
        <ul>
          <li>Filho 1</li>
          <li>Filho 1</li>
          <li>Filho 1</li>
          <li>Filho 1</li>
        </ul>
      </ChildComponents>
    </Card>

    <Card titulo="#02 - Componente com Parameters">
      <ComponentsParameters
        titulo="Titulo Passado como Parâmetro"
        subtitulo="Subtitulo passado com parâmetros"
      />
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <PrimeiroComponente />
    </Card>
  </div>
)
