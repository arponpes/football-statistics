import React from "react";

function GetAverageDate(games, fild, key) {
    if (games.length == 0) {
        return ''
    }
    let total = [];
    if (fild == 'local') {
        games.map(game => total.push(game.local_team_statistics[key]));
    }
    else {
        games.map(game => total.push(game.away_team_statistics[key]));
    }

    let avg = total.reduce((prev, curr) => prev + curr) / total.length;
    return avg.toFixed(2);
}

function GetAverageLigue(data, fild, key) {
    console.log(data)
    if (data.length == 0) {
        return ''
    }
    let total = [];
    if (fild == 'local') {
        data.map(game => total.push(game.local_team_statistics[key]));
    }
    else {
        data.map(game => total.push(game.away_team_statistics[key]));
    }

    let avg = total.reduce((prev, curr) => prev + curr) / total.length;
    return avg.toFixed(2);
}


function DateStatistics(props) {
    return (
        
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Equipo local</th>
                    <th>Equipo visitante</th>
                    <th>Total liga</th>
                    <th>Equipo local</th>
                    <th>Equipo visitante</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Goles al descanso</td>
                    <td>{GetAverageDate(props.games, 'local','half_time_goals')}</td>
                    <td>{GetAverageDate(props.games, 'away','half_time_goals')}</td>
                    <td></td>
                    <td>{GetAverageLigue(props.data, 'local','half_time_goals')}</td>
                    <td>{GetAverageLigue(props.data, 'away','half_time_goals')}</td>
                </tr>
                <tr>
                    <td>Goles</td>
                    <td>{GetAverageDate(props.games, 'local','full_time_goals')}</td>
                    <td>{GetAverageDate(props.games, 'away','full_time_goals')}</td>
                    <td></td>
                    <td>{GetAverageLigue(props.data, 'local','full_time_goals')}</td>
                    <td>{GetAverageLigue(props.data, 'away','full_time_goals')}</td>
                </tr>
                <tr>
                    <td>Disparos</td>
                    <td>{GetAverageDate(props.games, 'local','shots')}</td>
                    <td>{GetAverageDate(props.games, 'away','shots')}</td>
                    <td></td>
                    <td>{GetAverageLigue(props.data, 'local','shots')}</td>
                    <td>{GetAverageLigue(props.data, 'away','shots')}</td>
                </tr>
                <tr>
                    <td>Disparos a puerta</td>
                    <td>{GetAverageDate(props.games, 'local','shots_on_target')}</td>
                    <td>{GetAverageDate(props.games, 'away','shots_on_target')}</td>
                    <td></td>
                    <td>{GetAverageLigue(props.data, 'local','shots_on_target')}</td>
                    <td>{GetAverageLigue(props.data, 'away','shots_on_target')}</td>
                </tr>
                <tr>
                    <td>Corners</td>
                    <td>{GetAverageDate(props.games, 'local','corners')}</td>
                    <td>{GetAverageDate(props.games, 'away','corners')}</td>
                    <td></td>
                    <td>{GetAverageLigue(props.data, 'local','corners')}</td>
                    <td>{GetAverageLigue(props.data, 'away','corners')}</td>
                </tr>
                <tr>
                    <td>Faltas cometidas</td>
                    <td>{GetAverageDate(props.games, 'local','fouls_committed')}</td>
                    <td>{GetAverageDate(props.games, 'away','fouls_committed')}</td>
                    <td></td>
                    <td>{GetAverageLigue(props.data, 'local','fouls_committed')}</td>
                    <td>{GetAverageLigue(props.data, 'away','fouls_committed')}</td>
                </tr>
                <tr>
                    <td>Tarjetas amarillas</td>
                    <td>{GetAverageDate(props.games, 'local','yellow_cards')}</td>
                    <td>{GetAverageDate(props.games, 'away','yellow_cards')}</td>
                    <td></td>
                    <td>{GetAverageLigue(props.data, 'local','yellow_cards')}</td>
                    <td>{GetAverageLigue(props.data, 'away','yellow_cards')}</td>
                </tr>
                <tr>
                    <td>Tarjetas rojas</td>
                    <td>{GetAverageDate(props.games, 'local','red_cards')}</td>
                    <td>{GetAverageDate(props.games, 'away','red_cards')}</td>
                    <td></td>
                    <td>{GetAverageLigue(props.data, 'local','red_cards')}</td>
                    <td>{GetAverageLigue(props.data, 'away','red_cards')}</td>
                </tr>
            </tbody>
        </table>
    )
};

{/* <th>Equipo visitante</th>
                    <th>Goles al descanso</th>
                    <th>Goles</th>
                    <th>Disparos</th>
                    <th>Disparos a puerta</th>
                    <th>Corners</th>
                    <th>Faltas cometidas</th>
                    <th>Tarjetas amarillas</th>
                    <th>Tarjetas rojas</th> */}
export default DateStatistics;