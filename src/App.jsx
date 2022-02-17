import React from 'react';

import './App.css'

import Primeiro from './componets/basic/Primero';
import ComParametro from './componets/basic/ComParamatro';
import Fragmento from './componets/basic/Framento';
import Random from './componets/basic/Random';
import Card from './componets/layout/Card'

// TODO: remover este trecho
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#04 Desafio Aleatório">
                <Random max={100} min={5} />
            </Card>
            <Card titulo="#03 Desafio Aleatório">
                <Fragmento />

            </Card>
            <Card titulo="#02 Desafio Aleatório">
                <ComParametro
                    titulo="Primeiro titulo"
                    aluno="Pedro Silva"
                    nota={9.5}
                />
            </Card>
            <Card titulo="#01 Desafio Aleatório">

                <Primeiro />
            </Card>
        </div>
    </div>
);
