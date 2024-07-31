let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {

    if(typeof ! 'boolean') throw "Somente o tipo boolano é aceito!"

    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      resolve();
      console.log("Começando o processo de ferver a água");
    } else {
      reject();
      console.log(
        "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água"
      );
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise(function (resolve) {
    console.log("Passando o café");
    resolve();
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise(function (resolve) {
    console.log("Tomando o café");
    resolve();
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise(function (resolve) {
    console.log("Lavando a xícara");
    resolve();
  });
};

async function fazerCafe() {
  try{
  const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
  const cafePassado = await passarCafe(aguaFervida);
  const cafeTomado = await tomarCafe(cafePassado);
  const xicaraLavada = await lavarXicara(cafeTomado); 

}catch(err){
  console.log(err)
}finally{
  console.log("Finalizado o ritual de tomar café");
}
}

fazerCafe();