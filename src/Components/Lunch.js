import React, { Component } from 'react';

class Lunch extends Component {

    render() {
        return (
            <div>
                <div className="mealTime">
                    <fieldset>
                        <label>
                            Lunch:
                        </label>
                        <input
                            type="text"
                            name="userMeal"
                            id="userMeal"
                            placeholder="Enter Food"
                            onChange={this.props.captureUserInput}
                        // value={this.props.userMeal}
                        />
                        <input type="text"
                            name="calsEaten"
                            id="calsEaten"
                            placeholder="Enter Calories"
                            onChange={this.props.eatenUserInput}
                        // value={this.state.userCals}
                        />
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default Lunch;