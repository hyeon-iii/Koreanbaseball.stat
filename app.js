async function searchPlayer() {

    const keyword = document.getElementById("playerName").value;

    if (!keyword) {
        alert("선수 이름을 입력하세요.");
        return;
    }

    const results = document.getElementById("results");
    results.innerHTML = "검색중...";

    try {

        // 선수 검색
        const searchUrl =
            `https://statsapi.mlb.com/api/v1/people/search?names=${keyword}`;

        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        if (!searchData.people || searchData.people.length === 0) {
            results.innerHTML = "선수를 찾을 수 없습니다.";
            return;
        }

        const player = searchData.people[0];

        // 시즌 기록 조회
        const statsUrl =
            `https://statsapi.mlb.com/api/v1/people/${player.id}/stats?stats=season&group=hitting`;

        const statsResponse = await fetch(statsUrl);
        const statsData = await statsResponse.json();

        let stats = {};

        if (
            statsData.stats &&
            statsData.stats[0] &&
            statsData.stats[0].splits.length > 0
        ) {
            stats = statsData.stats[0].splits[0].stat;
        }

        results.innerHTML = `
            <div class="card">

                <h2>${player.fullName}</h2>

                <div class="stat">
                    타율: ${stats.avg || "-"}
                </div>

                <div class="stat">
                    홈런: ${stats.homeRuns || 0}
                </div>

                <div class="stat">
                    타점: ${stats.rbi || 0}
                </div>

                <div class="stat">
                    안타: ${stats.hits || 0}
                </div>

                <div class="stat">
                    경기수: ${stats.gamesPlayed || 0}
                </div>

            </div>
        `;

    } catch (error) {

        console.error(error);

        results.innerHTML =
            "데이터를 불러오는 중 오류가 발생했습니다.";
    }
}
