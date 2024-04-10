import axios from "axios";
import { useEffect, useState } from 'react';
import { tipoTransacao, formataData } from './tools/tools.jsx'

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
    <h1>Teste Técnico</h1>
    <div className="container">
    {
      tipo.map((trans) =>{
        
        return(
          <div key={trans.cnab} className="transacoes">
            <h2>CNAB:<span>{trans.cnab}</span></h2>
            <div className="formulario">
              <li>
              Tipo de Transação:{tipoTransacao(trans.tipo)}
              </li>
              <li>
              Data da Ocorrência:{formataData(trans.data)}
              </li>
              <li>
              Valor da Transação:
              </li>
              <li>
              Data da Ocorrência:
              </li>
              <li>
              CPF:
              </li>
              <li>
              Número do Cartão:
              </li>
              <li>
              Dono da Loja:
              </li>
              <li>
              Nome da Loja:
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






