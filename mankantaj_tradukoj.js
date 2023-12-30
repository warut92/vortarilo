//ĉi tio estas vortoj de la eo-th vortaro.
vortaro
//forigi ĉion post la unua spaceto en la vortaro. Tio estas nur kapvortoj!
let taja_vortaro = vortaro.replace(/(^[A-Za-zĈĉĜĝĤĥĴĵŜŝŬŭ-].+?)(\s.*$)/gm, '$1').replace(/(^[A-Za-zĈĉĜĝĤĥĴĵŜŝŬŭ-].+?)(-$)/gm, '$1').replace(/<!--.*?-->/g, '')
//konverti taja_vortaro de STR al ARR
const taja_vortaro_arr = taja_vortaro.split("\n").filter(vorto => vorto !== "")

//Jen estas la vortoj prenitaj de REVO
revo_vortaro
//konverti ĝin de SRT al ARR
const revo_vortaro_arr = revo_vortaro.split("\n").filter(vorto => vorto !== "")

//funkcio de komparado
function Komparu(array1, array2) {
  const rezulto = [];

  for (let i = 0; i < array1.length; i++) {
    let troviĝas_en_array2 = false;

    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        rezulto.push({ status: "<span style=\"color:red\">✔</span>", value: array1[i] });
        troviĝas_en_array2 = true;
        break;
      }
    }

    if (!troviĝas_en_array2) {
      rezulto.push({ status: "mankas tradukoj!😢", value: array1[i] });
    }
  }

  // Check for extra elements in array2
  for (let i = 0; i < array2.length; i++) {
    let troviĝas_en_array1 = false;

    for (let j = 0; j < array1.length; j++) {
      if (array2[i] === array1[j]) {
        troviĝas_en_array1 = true;
        break;
      }
    }

    if (!troviĝas_en_array1) {
      rezulto.push({ status: "ne estas en la datumbazo! 💔", value: array2[i] });
    }
  }

  return rezulto;
}

const rezulto_de_komparado = Komparu(revo_vortaro_arr, taja_vortaro_arr);
const rezultujo = document.getElementById('eligo');

// Display the comparison rezulto on the webpage
if (rezulto_de_komparado.length > 0) {
  rezulto_de_komparado.forEach(item => {
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = `${item.value} ${item.status}`;
    rezultujo.appendChild(paragrafo);
  });
}
