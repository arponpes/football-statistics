import React from "react";

function GetAverageTeam(team_list, data, team, key) {
    if (team == '' && team_list.length > 0){
        team = team_list[0].name
    }
    let average = 0
    let numberOfGames = 0
    for (var i = 0, game; game = data[i++];){
        if (game.local_team == team){
            numberOfGames += 1
            average += game.local_team_statistics[key]
        } else if (game.away_team == team) {
            numberOfGames += 1
            average += game.away_team_statistics[key]
        }
    }
    return (average / numberOfGames).toFixed(2);
}


function TeamStatistics(props) {
    return (
        
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>{props.team}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Goles al descanso</td>
                    <td>{GetAverageTeam(props.team_list, props.data, props.team, 'half_time_goals')}</td>
                </tr>
                <tr>
                    <td>Goles</td>
                    <td>{GetAverageTeam(props.team_list, props.data, props.team, 'full_time_goals')}</td>
                </tr>
                <tr>
                    <td>Disparos</td>
                    <td>{GetAverageTeam(props.team_list, props.data, props.team, 'shots')}</td>
                </tr>
                <tr>
                    <td>Disparos a puerta</td>
                    <td>{GetAverageTeam(props.team_list, props.data, props.team, 'shots_on_target')}</td>
                </tr>
                <tr>
                    <td>Corners</td>
                    <td>{GetAverageTeam(props.team_list, props.data, props.team, 'corners')}</td>
                </tr>
                <tr>
                    <td>Faltas cometidas</td>
                    <td>{GetAverageTeam(props.team_list, props.data, props.team, 'fouls_committed')}</td>
                </tr>
                <tr>
                    <td>Tarjetas amarillas</td>
                    <td>{GetAverageTeam(props.team_list, props.data, props.team, 'yellow_cards')}</td>
                </tr>
                <tr>
                    <td>Tarjetas rojas</td>
                    <td>{GetAverageTeam(props.team_list, props.data, props.team, 'red_cards')}</td>
                </tr>
            </tbody>
        </table>
    )
};


export default TeamStatistics;