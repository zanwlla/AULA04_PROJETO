
// //while = enquanto
// var x = 0;
// document.write('<br>Testando o loop com while');
// while(x<10){
//     document.write('O valor de x é: '+x);
//     //incremento de x
//     // x=x+1
//     x++;
// }

// //for = para

// var valor = 13;

// document.write('<br><br>Testando o loop com for');
// for(a=0;a<=valor;a++){
//     document.write('<br>O valor de a é: '+a);
//     console.log(a*3);
// }

//switch = trocar escolha

function pedir(){
    var valor = prompt('Digite uma opção de 1 a 4');

    console.log(valor);
    console.log(typeof valor);
    console.log(typeof Number(valor));
    console.log(valor);

    switch(Number(valor)){
        case 1:
            alert('Você escolheu suco');
            break;
        case 2:
            alert('Você escolheu água gelada');
            break;
        case 3:
            alert('Você escolheu sorvete');
            break;
        case 4:
            alert('Você chamou o garçom');
            break;
        default:
        alert('Escolha de 1 até 4');
        break;
    }
    
}