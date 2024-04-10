import { useEffect, useState } from 'react';
import { tipoTransacao, formataData, formataValorTransacao } from './tools/tools.jsx'
import { axiosCNABData } from './services/services.jsx';

import './App.css'

function App() {
  const [tipo, setTipo] = useState([]);

  useEffect(() => {
    const trataDadosTransacoes = async () => {
      const valoresTransacoes = await axiosCNABData()


      const array = valoresTransacoes.map(dado => {
        return {
          cnab: dado.transactionData,
          tipo: dado.transactionData.slice(0, 1),
          data: dado.transactionData.slice(1, 9),
          valor: dado.transactionData.slice(9, 19),
          cpf: dado.transactionData.slice(19, 30),
          cartao: dado.transactionData.slice(30, 42),
          dono: dado.transactionData.slice(42, 56),
          loja: dado.transactionData.slice(56),
        };
      });
      setTipo(array);
    };

    trataDadosTransacoes();

  }, []);



  return (
    <>
      <div className="container">
        <h1>Teste Técnico - Gabriel Barbosa</h1>
        {
          tipo.map((transacao) => {

            return (
              <div key={transacao.cnab} className="transacoes">
                <h2>CNAB:<span>{transacao.cnab}</span></h2>
                <div className="formulario">
                  <li>
                    Tipo de Transação: {tipoTransacao(transacao.tipo)}
                  </li>
                  <li>
                    Data da Ocorrência: {formataData(transacao.data)}
                  </li>
                  <li>
                    Valor da Transação: {formataValorTransacao(transacao.valor)}
                  </li>
                  <li>
                    CPF: {transacao.cpf}
                  </li>
                  <li>
                    Número do Cartão: {transacao.cartao}
                  </li>
                  <li>
                    Dono da Loja: {transacao.dono}
                  </li>
                  <li>
                    Nome da Loja: {transacao.loja}
                  </li>

                </div>

              </div>
            )
          })
        }

      </div>


    </>


  )
}

export default App






