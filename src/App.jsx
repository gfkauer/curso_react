import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basic/Familia";
import FamiliaMembro from "./components/basic/FamiliaMembro";
import Aleatorio from "./components/basic/Random";
import Fragmento from "./components/basic/Fragmento";
import ComParametro from "./components/basic/ComParametro";
import Primeiro from "./components/basic/Primeiro";

export default () => (
    <div className="App">
        <h1>Fundamentos React!</h1>

        <div className="Cards">

            <Card titulo="#07 Desafio de Repeticao" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);