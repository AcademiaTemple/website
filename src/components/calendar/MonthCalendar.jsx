const mes = new Date()
const mes1 = mes.getMonth()

const mes2 = mes1 + 1
export let mes3 
    
switch (mes2) {
    
    case 1:
       mes3 =  'ENERO';
       break;
    case 2:
        mes3 =  'FEBRERO';
        break;
    case 3:
        mes3 =  'MARZO';
        break;
    case 4:
        mes3 =  'ABRIL';
        break;
    case 5:
        mes3 =  'MAYO';
        break;
    case 6:
        mes3 =  'JUNIO' ;
        break;
    case 7:
        mes3 =  'JULIO';
        break;
    case 8:
        mes3 =  'AGOSTO' ;
        break;
    case 9:
        mes3 =  'SEPTIEMBRE';
        break;
    case 10:
        mes3 =  'OCTUBRE';
        break;
    case 11:
        mes3 =  'NOVIEMBRE';
        break;
    case 12:
        mes3 =  'DICIEMBRE'  ;
        break;
    default:
        break;
}
