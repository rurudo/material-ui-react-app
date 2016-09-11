import React, { PropTypes, Component } from 'react';
import NameInput from './NameInput';


export default class Header extends Component {
  static propTypes = {
    addName: PropTypes.func.isRequired,
    listNo: PropTypes.number.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addName(text, this.props.listNo);
    }
  }

  render() {
    return (
      <NameInput newName={true}
                 onSave={forward => this.handleSave(forward)}
                 placeholder='入力して下さい' />
    );
  }
}
