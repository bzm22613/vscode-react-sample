import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import Notes from '../Notes';
import NewNote from '../NewNote';

import s from './App.scss';

class App extends Component {

    constructor() {
        super();
        this.state = this.getData();
    }
    
    componentDidMount() {
        // populate state from server
        // poll for the data
    }

    getChildContext(){
      return {
        muiTheme: getMuiTheme()
      };
    }

    render() {
        return (
            <div className={s.app}>
                <AppBar title="Notes" />
                <div className={s.viewport}>
                    <NewNote />
                    <Notes items={this.state.notes}/>
                </div>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object
};


export default App;
