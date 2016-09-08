import React, { Component } from 'react';
import Frame from './Frame';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    //accent1Color: deepOrange500,
  },
});

export default class Root extends Component {
  render() {
    const { actions } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Frame actions={actions}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
