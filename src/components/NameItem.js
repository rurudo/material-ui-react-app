import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import NameInput from './NameInput';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class NameItem extends Component {
  static propTypes = {
    name: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const {name, markTodo, deleteTodo} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <NameInput text={name.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(name.id, text)} />
      );
    } else {
      element = (
        <ListItem
          primaryText={name.text}
        />
      );
    }

    return (
      <div>
        <ListItem
          primaryText={name.text}
        />
        <Divider />
      </div>
    );
  }
}
