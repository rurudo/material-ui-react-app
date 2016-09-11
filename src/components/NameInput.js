import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

export default class NameInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newName: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    const Enter = 13;
    if (e.which === Enter) {
      this.props.onSave(text);
      if (this.props.newName) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleBlur(event) {
    if (!this.props.newName) {
      this.props.onSave(event.target.value);
    }
  }

  render() {
    return (
      <TextField
        hintText=""
        floatingLabelText={this.props.placeholder}
        onKeyDown={forward => { this.handleSubmit(forward); }}
        value={this.state.text}
        onChange={forward => { this.handleChange(forward); }}
      />
    );
  }
}
