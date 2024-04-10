import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const tipoTransacao = (pagamento) => {
    //Tipo de Transação

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
    console.log(data)
    const ano = data.substring(0, 4);
    const mes = data.substring(4, 6);
    const dia = data.substring(6, 8);

    const dateObj = new Date(`${ano}-${mes}-${dia}`);

    if(dateObj == "Invalid Date"){
        return "Data Inválida"
    }else{
        const formattedDate = format(dateObj, 'dd MMMM yyyy', { locale: pt });
        return formattedDate
    }

    
  
    
}

export{
    tipoTransacao,
    formataData
}