import axios from "axios";
import { useEffect, useState } from 'react';
import { tipoTransacao, formataData, formataValorTransacao} from './tools/tools.jsx'

import './App.css'
function App() { 
  const [dados, setDados] = useState([]);
  const [tipo, setTipo] = useState([]);


  useEffect(() => {
    const axiosCNABData = async () => {
      try {
        
        const response = await axios.get('http://localhost:5000/api/v1/transactions/getTransactions');
        const transacoes = response.data.obj;
        setDados(transacoes)

      } catch (error) {
        console.error('Erro ao obter os dados CNAB:', error.message);
      }
    };
    
    axiosCNABData();
    
  }, []);

  useEffect(() => {
    const trataDadosTransacoes = () => {
      const array = dados.map(dado => {
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

    if (dados.length > 0) {
      trataDadosTransacoes();
    }
  }, [dados]); 

 

  return (
    <>
    <div className="container">
    <h1>Teste Técnico - Gabriel Barbosa</h1>
    {
      tipo.map((transacao) =>{
        
        return(
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






