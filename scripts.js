// Seleciona os elementos do formulário

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

// Seleciona os elementos da lista
const expenseList = document.querySelector('ul');

// Capura o valor do input e formata para o padrão brasileiro
amount.oninput = () => {
    // Obtém o valor do input e remove os caracteres não numéricos
   let value = amount.value.replace(/\D/g, '');
    // Transforma o valor em centavos
   value = Number(value) / 100;
    // Atualiza o valor do input com a formatação aplicada
   amount.value = formatValueBRL(value);
}

function formatValueBRL(value) {
    // Formata o valor para o padrão brasileiro
    value = value.toLocaleString("pt-BR", {
     style: "currency",
     currency: "BRL"
    });
    // Retorna o valor formatado
    return value; 
}

// Captura o evento de submit do formulário para obter os valores
form.onsubmit = (event) => {
    // Previne o comportamento padrão de recarregar a página
   event.preventDefault();

   // Cria um novo objeto com os dados da despesa

   const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date()
   }

   // Chama a função para adicionar o item na lista
   expenseAdd(newExpense);
}


function expenseAdd(newExpense) {
    try{
        // Cria o elemento para adicionar na lista
        const newExpenseItem = document.createElement('li');
        newExpenseItem.classList.add('expense');

        // Cria o icone da categoria

        const expenseIcon = document.createElement('img');
        expenseIcon.setAttribute('src', `img/${newExpense.category_id}.svg`);
        expenseIcon.setAttribute('alt', newExpense.category_name);

        // Cria a informação da despesa

        const expenseInfo = document.createElement('div');
        expenseInfo.classList.add('expense-info');

        // Cria o nome da despesa
        const expenseName = document.createElement('strong');
        expenseName.textContent = newExpense.expense;

        // Cria a categoria da despesa
        const expenseCategory = document.createElement('span');
        expenseCategory.textContent = newExpense.category_name;

        // Adiciona nome e categoria na div das informações da despesa
        expenseInfo.append(expenseName, expenseCategory);

        // Adiciona as informações no item
        newExpenseItem.append(expenseIcon, expenseInfo);

        // Adiciona o item na lista
        expenseList.append(newExpenseItem);
        
    } catch(error) {
        alert('Não foi possível atualizar a lista de despesas');
        console.log(error);
    }
}