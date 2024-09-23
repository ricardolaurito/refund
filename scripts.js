// Seleciona os elementos do formulário

const amount = document.getElementById('amount');

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
