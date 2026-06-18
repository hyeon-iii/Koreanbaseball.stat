result.innerHTML = `
<div class="player-card">

    <div class="player-header">
        <h2>${player.name}</h2>
        <p>${player.team}</p>
    </div>

    <div class="stats-grid">

        <div class="stat-box">
            <div class="stat-title">타율</div>
            <div class="stat-value">${player.avg}</div>
        </div>

        <div class="stat-box">
            <div class="stat-title">홈런</div>
            <div class="stat-value">${player.hr}</div>
        </div>

        <div class="stat-box">
            <div class="stat-title">타점</div>
            <div class="stat-value">${player.rbi}</div>
        </div>

        <div class="stat-box">
            <div class="stat-title">OPS</div>
            <div class="stat-value">${player.ops}</div>
        </div>

    </div>

</div>
`;
