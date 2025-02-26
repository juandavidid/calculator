Page({
  data:{
    valueInput:"",
    answer:"",
    evaluarExpresion: function (expresion) {
      try {
        // Elimina el último operador si existe (evita errores como "2+3-")
       expresion = expresion.replace(/[\+\-\*\/]$/, "");
  
        // Validar que solo contenga números y operadores matemáticos

        let arrayCharacter = /^[0-9+\-*/().\s]+$/.test(expresion)
        console.log(arrayCharacter)
        if (!arrayCharacter) {
          throw new Error("Expresión inválida");
        }
  
        // Convertimos la expresión en tokens separados
        let tokens = expresion.match(/\d+|\+|\-|\*|\//g);
  
        if (!tokens) return "Error";
  
        // Evaluar la expresión manualmente
        let resultado = parseFloat(tokens[0]);
  
        for (let i = 1; i < tokens.length; i += 2) {
        
          let operador = tokens[i];
          let numero = parseFloat(tokens[i + 1]);
  
          if (isNaN(numero)) throw new Error("Expresión inválida");
  
          switch (operador) {
            case "+":
              resultado += numero;
              break;
            case "-":
              resultado -= numero;
              break;
            case "*":
              resultado *= numero;
              break;
            case "/":
              if (numero === 0) throw new Error("División por cero");
              resultado /= numero;
              break;
            default:
              throw new Error("Operador inválido");
          }
          
        }
        return resultado;
      } catch (error) {
        console.log(error);
        return "Error en la expresión";
      }
    },
  },
  //-----------------------------------------------------------------------------------------------------------------------------------------

  fuctionBtn(e){
    console.log(e)
    const newValue = e.currentTarget.dataset.value; // Obtiene el valor del botón
    
    this.setData({
      valueInput: this.data.valueInput + newValue  // Expresion matematica
    });

    let longitudExpresion=this.data.valueInput.length;
    

  if(longitudExpresion >= 3 && /[+\-*/().\s]+/.test(this.data.valueInput)){
      this.setData({
        answer:this.data.evaluarExpresion(this.data.valueInput)
       })
    }
   
  },

  // Funcion : realiza operaciones
  
  fuctionBtnAC(){
    this.setData({
      valueInput:"",
      answer:""
    })
  },

  onHandleInput(e){
    console.log(e);
    console.log("Soy el Input", typeof(e.detail.value));
  },

  //------------------------------------------------------------------------------------------------------------------------------------------
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    
  },
  onReady() {
    // Page loading is complete
    
  },
  onShow() {
    // Page display
    
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
