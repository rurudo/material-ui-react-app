import React, { Component, PropTypes } from 'react';
import NameItem from './NameItem';
import Footer from './Footer';
import {List} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export default class NameList extends Component {
  static propTypes = {
    nameList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    onShow: PropTypes.func.isRequired,
    listNo: PropTypes.number.isRequired
  };
  
  state = {
    open: false,
    deleteId: null
  };

  handleOpen = (id) => {
    this.setState({
      open: true,
      deleteId: id
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      deleteId: null
    });
  };
  
  handleDelete = () => {
    this.props.actions.deleteName(this.state.deleteId);
    this.handleClose();
  };

  render() {
    const { nameList, actions, listNo } = this.props;

    const selectedList = nameList.filter(name => name.listNo === listNo);
    
    const markedCount = nameList.reduce((count, name) =>
      name.marked ? count + 1 : count,
      0
    );
    
    const buttonActions = [
      <FlatButton
        label="いいえ"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="はい"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleDelete}
      />,
    ];

    return (
      <div>
        <Dialog
          title="削除しますか？"
          actions={buttonActions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        </Dialog>
        <List>
          {selectedList.map(name =>
            <NameItem
              key={name.id}
              name={name}
              onRequestOpen={this.handleOpen}
              {...actions}
            />
          )}
          {this.renderFooter(markedCount)}
        </List>
      </div>
    );
  }

  renderFooter(markedCount) {
    const { nameList, onShow, listNo } = this.props;
    const selectedList = nameList.filter(name => name.listNo === listNo);
    const unmarkedCount = selectedList.length - markedCount;

    if (nameList.length) {
      return (
        <Footer registCount={unmarkedCount}
                listNo={listNo}
                onShow={(forward) => onShow(forward)} />
      );
    }
  }
}
