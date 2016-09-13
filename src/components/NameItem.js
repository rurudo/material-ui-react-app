import React, { Component, PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconClear from 'material-ui/svg-icons/content/clear';

export default class NameItem extends Component {
  static propTypes = {
    name: PropTypes.object.isRequired,
    editName: PropTypes.func.isRequired,
    deleteName: PropTypes.func.isRequired,
    markName: PropTypes.func.isRequired
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
      this.props.deleteName(id);
    } else {
      this.props.editName(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const {name, deleteName} = this.props;
    const rightButton = (
      <IconButton
        onClick={() => deleteName(name.id)}
      >
        <IconClear/>
      </IconButton>
    );

    return (
      <div>
        <ListItem
          primaryText={name.text}
          rightIconButton={rightButton}
        />
        <Divider />
      </div>
    );
  }
}
