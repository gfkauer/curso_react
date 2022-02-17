import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import Primeiro from './componets/basic/Primero'
import ComParamatro from './componets/basic/ComParamatro'

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParamatro
      titulo="Primeiro titulo"
      aluno="Pedro Silva"
      nota={9.5}
    />
  </div>,
  document.getElementById('root')
);
