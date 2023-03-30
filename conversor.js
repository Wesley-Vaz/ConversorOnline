document.querySelector("button").onclick = () => {
  const medida = document.querySelector("#medida").value;
  const temp = parseFloat(document.querySelector("#temp").value);
  const opcao = document.querySelector("#medida").value;
    
  if (opcao == "c") {
    const fah = ((temp * 9 / 5) + 32);
    resposta.innerHTML = `${fah.toFixed(2)} Fahrenheit`;
    const k = (temp + 273.15);
    resposta2.innerHTML=`${k.toFixed(2)} Kelvin`
    const ran = ((temp * 9 / 5) + 491.67);
    resposta3.innerHTML=`${ran.toFixed(2)} Rankine`
  } else if(opcao == "k"){
    const fah = ((temp-273.15)*(9/5)+32);
    resposta.innerHTML = `${fah.toFixed(2)} Fahrenheit`;
    const ran = (temp*(9/5));
    resposta2.innerHTML = `${ran.toFixed(2)} Rankine`;
    const c = (temp-273.15);
    resposta3.innerHTML = `${c.toFixed(2)} Celsius`
  } else if(opcao == "f"){
    const k = ((temp-32)*(5/9)+273.15);
    resposta.innerHTML = `${k.toFixed(2)} Kelvin`;
    const ran = (temp+459.67);
    resposta2.innerHTML = `${ran.toFixed(2)} Rankine`;
    const c = ((temp-32)*(5/9));
    resposta3.innerHTML = `${c.toFixed(2)} Celsius`;
  } else{
    const fah =(temp-459.67);
    resposta.innerHTML = `${fah.toFixed(2)} Fahrenheit`;
    const k = (temp*(5/9));
    resposta2.innerHTML = `${k.toFixed(2)} Kelvin`;
    const c =((temp-491.67)*(5/9));
    resposta3.innerHTML = `${c.toFixed(2)} Celsius`
  }
}