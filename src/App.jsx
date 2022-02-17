import React from "react"

import Primeiro from "./componets/basic/Primero"
import ComParametro from "./componets/basic/ComParamatro"
import Fragmento from "./componets/basic/Framento"
import Random from "./componets/basic/Random"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <Random max={100} min={5} />
        <Fragmento />
        <ComParametro
            titulo="Primeiro titulo"
            aluno="Pedro Silva"
            nota={9.5} />
        <Primeiro />
    </div>
)