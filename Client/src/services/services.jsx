import axios from "axios";

async function pegaDadosCnab() {
    try {
        let url = 'http://localhost:5000/api/v1/transactions/getTransactions'
        const response = await axios.get(url)
        return response;
    } catch (error) {
        console.log(error);
        return null; // Retorne null em caso de erro
    }
}

export {
    pegaDadosCnab
}