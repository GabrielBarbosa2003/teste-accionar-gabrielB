import dateFormat from 'dateformat';

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
    dateFormat("2019-04-30T08:59:00.000Z", "mmmm dS, yyyy")
}

export{
    tipoTransacao,
    formataData
}