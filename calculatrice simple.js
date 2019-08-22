// fonction de la calculatrice 3 variable : nombre a operateur nombre b
var a = prompt ("saisir nombre 1"), op = prompt ("saisir l'opérateur (+, -, *, /)"), b = prompt ("saisir nombre 2");

//function calculatrice (a,b,op) {
  switch (op) {
      // addition
    case ('+') :
   alert(parseInt(a) + parseInt(b));
      break ;
   // soustraction
    case ('-') :
     alert(parseInt(a) - parseInt(b));
      break ;
      //multiplication
    case ('*') :
     alert(parseInt(a) * parseInt(b));
      break ;
      // division
   case ('/') :
     alert(parseInt(a) / parseInt(b));
           if(parseInt(a) / parseInt(b) == Infinity){
    alert("Division par 0 impossible");
         break ; 
}
  }              
 
