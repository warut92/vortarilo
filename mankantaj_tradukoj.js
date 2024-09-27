//ĉi tio estas vortoj de la eo-th vortaro.
vortaro
//forigi ĉion post la unua spaceto en la vortaro. Tio estas nur kapvortoj!

let taja_vortaro = vortaro.replace(/;/gm, '\n')
.replace(/^ /gm, '')
.replace(/(^[A-Za-zĈĉĜĝĤĥĴĵŜŝŬŭ-].+?)(\s.*$)/gm, '$1')
.replace(/<!--.*?-->/g, '')
.replace(/!/g, '')
.replace(/(.*)\-$/gm, '$1')

//konverti taja_vortaro de STR al ARR
const taja_vortaro_arr = taja_vortaro.split("\n").filter(vorto => vorto !== "")

//Jen estas la vortoj prenitaj de REVO
revo_vortaro
// piv_vortaro
//konverti ĝin de SRT al ARR
const vortaro_arr = revo_vortaro.split("\n").filter(vorto => vorto !== "")
// const vortaro_arr = piv_vortaro.split("\n").filter(vorto => vorto !== "")


//funkcio de komparado
function Komparu(vortaro, taja_vortaro) {
  const rezulto = [];

  for (let i = 0; i < vortaro.length; i++) {
    let troviĝas_en_taja_vortaro = false;

    for (let j = 0; j < taja_vortaro.length; j++) {
      if (vortaro[i] === taja_vortaro[j]) {
        rezulto.push({ status: "", value: taja_vortaro[i] + " <span style=\"color:red\">✔</span> <a href=\"http://vortaro.warut.net/#" + taja_vortaro[i] + "\" target=\"_blank\">" + "RETV" + "</a> " + "<a href=\"http://retavortaro.de/revo/dlg/index-2k.html?q=" + taja_vortaro[i] + "\" target=\"_blank\">" + "ReVo" + "</a> " + "<a href=\"https://vortaro.net/#" + taja_vortaro[i] + "\" target=\"_blank\">" + "PIV" + "</a>" });
        troviĝas_en_taja_vortaro = true;
        break;
      }
    }

    if (!troviĝas_en_taja_vortaro) {
      rezulto.push({ status: "mankas tradukoj!😢", value: vortaro[i] + " <a href=\"http://retavortaro.de/revo/dlg/index-2k.html?q=" + vortaro[i] + "\" target=\"_blank\">" + "ReVo" + "</a> " + "<a href=\"https://vortaro.net/#" + vortaro[i] + "\" target=\"_blank\">" + "PIV" + "</a>" });
    }
  }

  // kontroli ĉu estas pliaj vortoj en vortaro?
  for (let i = 0; i < taja_vortaro.length; i++) {
    let troviĝas_en_vortaro = false;

    for (let j = 0; j < vortaro.length; j++) {
      if (taja_vortaro[i] === vortaro[j]) {
        troviĝas_en_vortaro = true;
        break;
      }
    }

    if (!troviĝas_en_vortaro) {
      rezulto.push({ status: "ne estas en la datumbazo! 💔", value: taja_vortaro[i] + " <a href=\"http://retavortaro.de/revo/dlg/index-2k.html?q=" + taja_vortaro[i] + "\" target=\"_blank\">" + "ReVo" + "</a> " + "<a href=\"https://vortaro.net/#" + taja_vortaro[i] + "\" target=\"_blank\">" + "PIV" + "</a>" });
    }
  }

  return rezulto;
}
console.log('TAJA_VORTARO_ARR', taja_vortaro_arr)
console.log('VORTARO_ARR', vortaro_arr)

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
