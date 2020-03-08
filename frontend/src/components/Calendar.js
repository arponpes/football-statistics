import React from "react";

function Calendar(props) {
    return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Local</th>
                        <th>Goles</th>
                        <th>Goles</th>
                        <th>Visitante</th>
                    </tr>
                </thead>
                <tbody>
                    {props.games.map((game, index) => {
                        return (
                            <tr>
                                <td key={index}>
                                    {game.local_team}
                                </td>
                                <td key={index}>
                                    {game.local_team_statistics.full_time_goals}
                                </td>
                                <td key={index}>
                                    {game.away_team_statistics.full_time_goals}
                                </td>
                                <td key={index}>
                                    {game.away_team}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    );
};

export default Calendar;