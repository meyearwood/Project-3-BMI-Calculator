import React, { Component } from 'react';
import RangeSlider from '../components/form-elements/RangeSlider';

// Styles
import '../styles/app.css';

class App extends Component {
    state = {
        weightRangeVal: 15,
        heightRangeVal: 0,
    }

    render() {
        const { weightRangeVal, heightRangeVal } = this.state;
        const weightLbl = `Weight: ${weightRangeVal} lbs.`;
        const heightLbl = `Height: ${heightRangeVal}"`;

        return (
            <div className="app">
                <div>
                    <RangeSlider
                        contextCls="weight-range-slider"
                        value={ weightRangeVal }
                        labelText={ weightLbl }
                        onInput={ this.handleWeightRangeInput } />
                </div>
                <div>
                    <RangeSlider
                        contextCls="height-range-slider"
                        value={ heightRangeVal }
                        labelText={ heightLbl }
                        onInput={ this.handleHeightRangeInput } />
                </div>
            </div>
        );
    }

    handleWeightRangeInput = (value) => {
        this.setState({
            weightRangeVal: value,
        });
    }

    handleHeightRangeInput = (value) => {
        this.setState({
            heightRangeVal: value,
        });
    }
}

export default App;
