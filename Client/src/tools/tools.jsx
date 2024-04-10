import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const tipoTransacao = (pagamento) => {
    switch (pagamento) {
        case "1":
            return 'Débito';
        case "2":
            return 'Crédito';
        case "3":
            return 'Pix';
        case "4":
            return 'Financiamento';
        default:
            return 'Tipo desconhecido';
    }
}

const formataData = (data) => {
    const ano = data.substring(0, 4);
    const mes = data.substring(4, 6);
    const dia = data.substring(6, 8);

    const dataObj = new Date(`${ano}-${mes}-${dia}`);

    if(dataObj == "Invalid Date"){
        return "Data Inválida"
    }else{
        const dataFormatada = format(dataObj, 'dd MMMM yyyy', { locale: pt });
        return dataFormatada
    }

}

const formataValorTransacao = (valorTransacao) => {
    const valorFloat= parseFloat(valorTransacao) / 100;

    const valorReais = valorFloat.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return valorReais;
}

 

export{
    tipoTransacao,
    formataData,
    formataValorTransacao
}