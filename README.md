# Teste técnico dev front-end

# Descrição
Neste teste técnico o candidato irá trabalhar com dados de transação no padrão CNAB, consumindo uma API construída no back-end disponível. Abaixo terão instruções
para executar o back-end corretamente consumir a API para trabalhar com seus dados no front-end.

# Orientações
- Tenha em mente que será necessário instalar em seu computador o NodeJs na versão 20.11.0+ para o back-end.
- O candidato precisa obrigatoriamente utilizar o React com um empacatador, podendo usar o Vite, Webpack ou similar
- Deixe o projeto React dentro da pasta Client para manter o desacoplamento das pasta e arquivos entre back-end e front-end
- Back-end está sendo executado na porta 5000. O candidato tem liberdade total para alterar a porta no qual o servidor vai escutar.
- O candidato deve fazer um fork ou um clone deste repositório e disponibiliar o link do mesmo como resposta ao desafio.
- Este projeto não possui nenhuma conexão com um banco de dados, sendo assim, não haverá a necessidade de instalar nenhum previamente.

# Sobre o desafio
O Candidato precisa fazer o uso da API disponibilizada, fazer o parse/tratamento dos dados para que seja exibído em uma rota de view, tendo liberdade total para atender essa tarefa.
Note que abaixo mostra o payload da API e uma documentação sobre o que a sequência de números de transactionData representa.

# Como executar o back-end
Acesse o terminal e navegue até o diretório Server de dentro do seu clone do projeto, rode o comando npm install e em seguida npm start para executar o servidor.

# API
## GET /api/v1/transactions/getTransactions

Retorna todas as transações.

**Resposta**

| Código | Descrição                    |
|--------|------------------------------|
| 200    | Success.|
| 500    | Internal server error.|

**Exemplo de resposta**

```json
{
"type": "Sucess",
    "statusCode": 200,
    "obj": [
        {
            "transactionId": 1,
            "transactionData": "3202301020000015100195514960781753****3153AFONSO PEREIRAADEGA PEREIRA"
        },
        {
            "transactionId": 2,
            "transactionData": "4202301020000014100199550980912123****7687PRISCILA COSTALOJAS MÁGICO DE OZ"
        },
        {
            "transactionId": 3,
            "transactionData": "3202301020000014400348637540783777****1313JOSÉ ALENCAR FSUPERMERCADO ARAUJ"
        },
    ]
}
```

# CNAB

Para processar os dados de transação, segue uma documentação abaixo:

| Tipos de transação | Descrição    |
|--------------------|--------------|
| 1                  | Débito       |
| 2                  | Crédito      |
| 3                  | Pix          |
| 4                  | Financiamento|


| Posição | Descrição                    |
|---------|------------------------------|
| 0 a 1   | Tipo da transação.           |
| 1 a 9   | Data da ocorrência.          |
| 9 a 19  | Valor da transação.          |
| 19 a 30 | CPF                          |
| 30 a 42 | Cartão(Parcialmente visível).|
| 42 a 56 | Dono da loja.                |
| 56      | Nome da loja.                |

## Exemplo
CNAB: 3202301020000015100195514960781753****3153AFONSO PEREIRAADEGA PEREIRA

- Tipo de Transação (posição 0 a 1): 3 (Pix)
- Data da Ocorrência (posições 1 a 9): 20230102 (02 de janeiro de 2023)
- Valor da Transação (posições 9 a 19): 0000001510 (R$ 15,10)
- CPF (posições 19 a 30): 19551496078
- Número do Cartão (posições 30 a 42): 1753****3153 (cartão parcialmente oculto)
- Dono da Loja (posições 42 a 56): AFONSO PEREIRA
- Nome da Loja (posições 56): ADEGA PEREIRA



