import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Ex1 from './components/NewComponent.jsx'
import ComponentsParameters from './components/ComponentsParameters.jsx'

ReactDOM.render(
  <div>
    <Ex1 />
    <ComponentsParameters
      titulo="Titulo Passado como Parâmetro"
      subtitulo="Subtitulo passado com parâmetros"
    />
    <ComponentsParameters
      titulo="Reaproveitando o Parâmetro"
      subtitulo="Subtitulo com reaproveitamento de parâmetros"
    />
  </div>,
  document.getElementById('root')
)
