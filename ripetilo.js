function prilabori() {
  let fontVortoj = document.getElementById('vortoj').value; //ดึงค่าข้อความทั้งหมด
  fontVortoj = fontVortoj.split("\n") //แยกข้อความจาก new line เพื่อทำให้ข้อมูลเป็นอาเรย์

  let kapVortoj = fontVortoj.map(str => str.substr(0, 4)) //ใช้เมธอทของ map ตัดข้อความในอาเรย์จากตำแหน่งที่ 0 - 4
  console.log('KAPVORTOJ', kapVortoj)

  // ทำการหาคำที่ซ้ำด้วยเมธอด filter จากการวนตรวจสอบการจับคู่ของค่าข้อมูลกับดัชนีของข้อมูล จะได้ค่าเป็นค่าข้อมูลที่ซ้ำแรก
  let ripetitajKapvortoj = kapVortoj.filter((vorto, indekso) => kapVortoj.indexOf(vorto) === indekso)
  console.log('RIPETITAJKAPVORTOJ', ripetitajKapvortoj)

  document.getElementById('eligo').innerHTML = ripetitajKapvortoj;

}

function kolorigi() {

}

function forigi() {
  let kapvortoj = document.getElementById('vortoj').value;
  const forigi = ""
  document.getElementById('vortoj').value = forigi;
}

console.log("ok");
