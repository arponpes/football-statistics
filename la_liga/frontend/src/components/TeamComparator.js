import React, { Component } from 'React';
import TeamStatistics from './TeamStatistics';


class TeamComparator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            team: '',
            team_list: [],
            lodaded: false,
            placeholder: "Loading"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            team: e.target.value
        });
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
                this.setState(() => {
                    return {
                        data: data,
                        loaded: true,
                    };
                });
            }
            );
        fetch("api/teams")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(team_list => {
                this.setState(() => {
                    return {
                        team_list: team_list,
                        loaded: true,
                    };
                });
            }
            );

    };
    render() {
        return (
            <div>
            <form>
                <div className="field">
                    <div className="control">
                        <div className="select is-primary">
                            <select onChange={this.handleChange}>
                                {this.state.team_list.map((team, index) => {
                                    return (
                                        <option key={index}>{team.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </form>
            <div>
            <TeamStatistics 
                data={this.state.data}
                team={this.state.team}
                team_list={this.state.team_list} />
            </div>
            </div>
        );
    }
}


export default TeamComparator;