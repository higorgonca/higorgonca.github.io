/*document.querySelectorAll('.parent > div').forEach(function (div) {
       div.addEventListener('click', function (e) {
           
           console.log(e.target.attributes.value.value, 'e')
           if (e.target.attributes['data-action'].value == 'multiply') {
               console.log("chamar função de multiplicação")
           }
       
       });
   });*/

//aqui to pegando o seletor da div 7 e guardando em uma variável
const div7 = document.querySelector('.div7');


//div7.addEventListener('click', testandoClick)



document.querySelectorAll('.painel > div').forEach(function (div) { //aqui peguei com o queryselectorall todas as divs dentro do 'parent'
    div.addEventListener('click', function (e) {                       //e para cada adicionei esta função com o parametro 'e' de event
        const actionButton = e.target.attributes['action'].value;
        const displayText = document.querySelector('#display');



        function equalResult() {
            let result = eval(displayText.value);
            displayText.value = result;
            if (displayText.value.length == 1 && displayText.value == 0) {
                displayText.value = "0"
            }
        }






        switch (actionButton) {
            case 'multiply':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '0'
                } else displayText.value += '*'
                break;
            case '1':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '1'
                } else displayText.value += '1'

                break;
            case 'clear':
                displayText.value = '0'
                break;
            case '2':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '2'
                } else displayText.value += '2'
                break;
            case '3':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '3'
                } else displayText.value += '3'
                break;
            case '4':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '4'
                } else displayText.value += '4'
                break;
            case '5':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '5'
                } else displayText.value += '5'
                break;
            case '6':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '6'
                } else displayText.value += '6'
                break;
            case '7':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '7'
                } else displayText.value += '7'
                break;
            case '8':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '8'
                } else displayText.value += '8'
                break;
            case '9':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '9'
                } else displayText.value += '9'
                break;
            case '0':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '0'
                } else displayText.value += '0'
                break;
            case 'sum':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '+'
                } else displayText.value += '+'
                break;
            case 'subtraction':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '-'
                } else displayText.value += '-'
                break;
            case 'division':
                if (displayText.value.length == 1 && displayText.value == 0) {
                    displayText.value = '0'
                } else displayText.value += '/'
                break;
            case 'equal':
                equalResult()

                break;
            case 'delete':
                displayText.value = displayText.value.substring(0, displayText.value.length - 1)
                if (displayText.value.length == 0) {
                    displayText.value = '0'
                }

                break;
            case '.':
                displayText.value += '.'
                break;
            default:

                break;
        }

    });
})


