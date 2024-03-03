//ĉi tio estas vortoj de la eo-th vortaro.
vortaro
//forigi ĉion post la unua spaceto en la vortaro. Tio estas nur kapvortoj!

let taja_vortaro = vortaro.replace(/;/gm, '\n')
.replace(/^ /gm, '')
.replace(/(^[A-Za-zĈĉĜĝĤĥĴĵŜŝŬŭ-].+?)(\s.*$)/gm, '$1')
.replace(/<!--.*?-->/g, '')
.replace(/!/g, '')
.replace(/(.*)\-$/gm, '$1')

console.log('TAJA_VORTARO', taja_vortaro)
//konverti taja_vortaro de STR al ARR
const taja_vortaro_arr = taja_vortaro.split("\n").filter(vorto => vorto !== "")

//Jen estas la vortoj prenitaj de REVO
revo_vortaro
// piv_vortaro
//konverti ĝin de SRT al ARR
const vortaro_arr = revo_vortaro.split("\n").filter(vorto => vorto !== "")
// const vortaro_arr = piv_vortaro.split("\n").filter(vorto => vorto !== "")
console.log('VORTARO_ARR', vortaro_arr)

//funkcio de komparado
function Komparu(array1, array2) {
  const rezulto = [];

  for (let i = 0; i < array1.length; i++) {
    let troviĝas_en_array2 = false;

    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        rezulto.push({ status: "", value: array2[i] + " <span style=\"color:red\">✔</span> <a href=\"http://vortaro.warut.net/#" + array2[i] + "\" target=\"_blank\">" + "RETV" + "</a> " + "<a href=\"http://retavortaro.de/revo/dlg/index-2k.html?q=" + array2[i] + "\" target=\"_blank\">" + "ReVo" + "</a> " + "<a href=\"https://vortaro.net/#" + array2[i] + "\" target=\"_blank\">" + "PIV" + "</a>" });
        troviĝas_en_array2 = true;
        break;
      }
    }

    if (!troviĝas_en_array2) {
      rezulto.push({ status: "mankas tradukoj!😢", value: array1[i] + " <a href=\"http://retavortaro.de/revo/dlg/index-2k.html?q=" + array1[i] + "\" target=\"_blank\">" + "ReVo" + "</a> " + "<a href=\"https://vortaro.net/#" + array1[i] + "\" target=\"_blank\">" + "PIV" + "</a>" });
    }
  }

  // kontroli ĉu estas pliaj vortoj en array1?
  for (let i = 0; i < array2.length; i++) {
    let troviĝas_en_array1 = false;

    for (let j = 0; j < array1.length; j++) {
      if (array2[i] === array1[j]) {
        troviĝas_en_array1 = true;
        break;
      }
    }

    if (!troviĝas_en_array1) {
      rezulto.push({ status: "ne estas en la datumbazo! 💔", value: array2[i] + " <a href=\"http://retavortaro.de/revo/dlg/index-2k.html?q=" + array2[i] + "\" target=\"_blank\">" + "ReVo" + "</a> " + "<a href=\"https://vortaro.net/#" + array2[i] + "\" target=\"_blank\">" + "PIV" + "</a>" });
    }
  }

  return rezulto;
}

const rezulto_de_komparado = Komparu(vortaro_arr, taja_vortaro_arr);
const rezultujo = document.getElementById('eligo');

// Display the comparison rezulto on the webpage
if (rezulto_de_komparado.length > 0) {
  rezulto_de_komparado.forEach((item, index) => {
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = `${index} ${item.value} ${item.status}`;
    rezultujo.appendChild(paragrafo);
  });
}
