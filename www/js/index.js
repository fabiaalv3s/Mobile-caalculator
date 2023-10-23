document.getElementById('display').value = '0';
var currentNumber = 0; // Variável de controle para armazenar o número atual

function appendToDisplay(value) {
    // Verifica se o valor é zero e substitui pelo novo valor
    if (document.getElementById('display').value === '0' || document.getElementById('display').value === 'Erro') {
        document.getElementById('display').value = value;
        currentNumber = parseFloat(value); // Atualiza o número atual
    } else {
        document.getElementById('display').value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
    currentNumber = 0; // Reinicia o número atual ao limpar o display
}

function toggleSign() {
    // Inverte o sinal do número atual
    currentNumber *= -1;
    document.getElementById('display').value = currentNumber;
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        // Substitua % por /100 para calcular a porcentagem
        expression = expression.replace(/%/g, '/100');
        
        // Use uma expressão regular para encontrar números na expressão
        var numbers = expression.match(/[-+]?[0-9]*\.?[0-9]+/g) || [];
        numbers = numbers.map(function(num) {
            return parseFloat(num);
        });

        // Substitua os números na expressão pelo seu valor
        for (var i = 0; i < numbers.length; i++) {
            expression = expression.replace(numbers[i], numbers[i].toString());
        }

        var result = eval(expression);
        document.getElementById('display').value = result;
        currentNumber = result; // Atualiza o número atual com o resultado
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        currentNumber = 0; // Reinicia o número atual em caso de erro
    }
}
