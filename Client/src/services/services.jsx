import axios from "axios";

const axiosCNABData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/transactions/getTransactions');
      const transacoes = response.data.obj;
      return transacoes;

    } catch (error) {
      console.error('Erro ao obter os dados CNAB:', error.message);
    }
  };

export {
    axiosCNABData
}