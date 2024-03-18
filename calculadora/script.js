

//aqui to pegando o seletor da div 7 e guardando em uma variável
const div7 = document.querySelector('.div7');


//div7.addEventListener('click', testandoClick)

let lastCharOnDisplay;

const operadoresAritmeticos = ['*', '/', '-', '.', '+'];


const displayText = document.querySelector('#display');
displayText.value = "";

document.querySelectorAll('.painel > div').forEach(function (div) { //aqui peguei com o queryselectorall todas as divs dentro do 'parent'
    div.addEventListener('click', function (e) {                       //e para cada adicionei esta função com o parametro 'e' de event
        const actionButton = e.target.attributes['action'].value;
        const displayText = document.querySelector('#display');

        function equalResult() {
            if (displayText.value != "") {
                displayText.value = displayText.value.replace(/÷/g, '/');
                displayText.value = displayText.value.replace(/x/g, '*');
                displayText.value = displayText.value.replace(/,/g, '.');

                if (operadoresAritmeticos.includes(lastCharOnDisplay) && displayText.value.length == 4) {
                    displayText.value = ""
                }


                if (operadoresAritmeticos.includes(lastCharOnDisplay)) {
                    if (displayText.value.length > 1) {
                        displayText.value = displayText.value.substring(0, displayText.value.length - 1);
                        let result = eval(displayText.value);
                        displayText.value = result;
                    } else {
                        displayText.value = "";
                    }
                } else {
                    let result = eval(displayText.value);
                    displayText.value = result;
                    if (displayText.value.length == 1 && displayText.value == 0) {
                        displayText.value = "0";
                    }
                };

                if (displayText.value.split(".").length > 1) {
                    displayText.value = Number(displayText.value).toFixed(2);
                }


                displayText.value = displayText.value.replace(/\./g, ',');
            }
        }


        let isNumber = !operadoresAritmeticos.includes(actionButton);

        if (isNumber ||
            (!isNumber && lastCharOnDisplay &&
                !operadoresAritmeticos.includes(lastCharOnDisplay))
            ||
            (actionButton == 'equal')
        ) {
            console.log(actionButton, 'action')

            switch (actionButton) {
                case '*':
                    displayText.value += 'x'
                    break;
                case '1':
                    displayText.value += '1'
                    break;
                case 'clear':
                    displayText.value = ''
                    break;
                case '2':
                    displayText.value += '2'
                    break;
                case '3':
                    displayText.value += '3'
                    break;
                case '4':
                    displayText.value += '4'
                    break;
                case '5':
                    displayText.value += '5'
                    break;
                case '6':
                    displayText.value += '6'
                    break;
                case '7':
                    displayText.value += '7'
                    break;
                case '8':
                    displayText.value += '8'
                    break;
                case '9':
                    displayText.value += '9'
                    break;
                case '0':
                    displayText.value += '0'
                    break;
                case '+':
                    displayText.value += '+'
                    break;
                case '-':
                    displayText.value += '-'
                    break;
                case '/':
                    displayText.value += '÷';
                    break;
                case 'equal':
                    equalResult()
                    break;
                case 'delete':
                    displayText.value = displayText.value.substring(0, displayText.value.length - 1)
                    break;
                case '.':
                    if (displayText.value == '') {
                        displayText.value = '0,'
                    } else {
                        displayText.value += ','
                    }

                    break;
                default:

                    break;
            }
        }

        displayText.scrollLeft = displayText.scrollWidth

        lastCharOnDisplay = actionButton;
    });
})
