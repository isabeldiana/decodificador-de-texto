const textarea = document.getElementById("textoInput");

const criptografar = ()=>{
  let fraseCriptografada = '';
  let texto = textarea.value; 
  const substituicao = {
    'i': 'imes', 
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  for( i = 0 ; i < texto.length; i++){
    let letra = texto[i];
    if(substituicao[letra]){
      fraseCriptografada += substituicao[letra]
    }else {
      fraseCriptografada += letra;
    }
  
 
    
  }
console.log(fraseCriptografada);
  return fraseCriptografada;

}


let resultadoCriptografado = criptografar();
console.log(resultadoCriptografado); 

