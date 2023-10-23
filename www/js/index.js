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
        
        // Substitua vírgulas por pontos para garantir que o JavaScript interprete os números corretamente
        expression = expression.replace(/,/g, '.');
        
        // Avalie a expressão diretamente usando eval()
        var result = eval(expression);
        
        // Atualize o valor no display, mantendo o formato decimal
        document.getElementById('display').value = parseFloat(result).toLocaleString('en-US', { maximumFractionDigits: 10 });
        currentNumber = result; // Atualiza o número atual com o resultado
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        currentNumber = 0; // Reinicia o número atual em caso de erro
    }
}

