import React, { Component } from "react";
import Calendar from "./Calendar";
import DateStatistics from "./DateStatistics";

class DateComparator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            games: [],
            dates: [],
            loaded: false,
            placeholder: "Loading",
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({
            games: this.getGames(this.state.data, e.target.value)
        });
    };

    getGames(data, date) {
        let games = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].date == date) {

                games.push(data[i]);
            };
        };
        return (games);
    };

    componentDidMount() {
        fetch("api/game_list")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                let dates = data.map(game => game.date);
                dates = Array.from(new Set(dates));
                this.setState(() => {
                    return {
                        data: data,
                        dates: dates,
                        games: this.getGames(data, dates[0]),
                        loaded: true,
                    };
                });
            }
            );
    };
    render() {
        return (
        <div>
            <div class="columns is-mobile">
                <div class="column">
                    <form>
                        <div className="field">
                            <div className="control">
                                <div className="select is-primary">
                                    <select onChange={this.handleChange}>
                                        {this.state.dates.map((date, index) => {
                                            return (
                                                <option key={index}>{date}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="columns is-mobile">
                <div className="column">
                    <Calendar
                        games={this.state.games} />
                </div>
                <div className="column">
                    <DateStatistics
                        games={this.state.games}
                        data={this.state.data} />
                </div>
            </div>
        </div>
        );
    }
};

export default DateComparator;