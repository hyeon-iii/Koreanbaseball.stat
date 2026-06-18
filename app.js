let players = [];

async function loadData() {

    const response =
        await fetch("./data/players.json");

    players = await response.json();
}

loadData();

function searchPlayer() {

    const keyword =
        document
        .getElementById("searchInput")
        .value
        .trim();

    const result =
        document.getElementById("result");

    const player = players.find(
        p => p.name.includes(keyword)
    );

    if (!player) {

        result.innerHTML =
            "<h3>선수를 찾을 수 없습니다.</h3>";

        return;
    }

    result.innerHTML = `
        <div class="card">
            <h2>${player.name}</h2>

            <p>팀 : ${player.team}</p>

            <p>타율 : ${player.avg}</p>

            <p>홈런 : ${player.hr}</p>

            <p>타점 : ${player.rbi}</p>

            <p>OPS : ${player.ops}</p>
        </div>
    `;
}
