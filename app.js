let players = [];

async function loadData(){
  const res = await fetch("./data/players.json");
  players = await res.json();

  renderTop10();
}

loadData();

function searchPlayer(){

  const name = document.getElementById("searchInput").value;

  const p = players.find(x => x.name.includes(name));

  const result = document.getElementById("result");

  if(!p){
    result.innerHTML = "선수 없음";
    return;
  }

  result.innerHTML = `
    <div class="card">
      <h2>${p.name}</h2>
      <p>${p.team}</p>
      <p>타율: ${p.avg}</p>
      <p>홈런: ${p.hr}</p>
      <p>타점: ${p.rbi}</p>
      <p>OPS: ${p.ops}</p>
    </div>
  `;
}

function renderTop10(){

  const hrTop = [...players]
    .sort((a,b)=>b.hr-a.hr)
    .slice(0,10);

  document.getElementById("hrTop10").innerHTML =
    hrTop.map(p =>
      `<div class="card">${p.name} (${p.team}) - ${p.hr}</div>`
    ).join("");

  const avgTop = [...players]
    .sort((a,b)=>b.avg-a.avg)
    .slice(0,10);

  document.getElementById("avgTop10").innerHTML =
    avgTop.map(p =>
      `<div class="card">${p.name} (${p.team}) - ${p.avg}</div>`
    ).join("");
}
