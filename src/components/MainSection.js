import React, { Component, PropTypes } from 'react';
import NameItem from './NameItem';
import Footer from './Footer';
import {List} from 'material-ui/List';


export default class MainSection extends Component {
  static propTypes = {
    nameList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    onShow: PropTypes.func.isRequired,
    listNo: PropTypes.number.isRequired
  };

  render() {
    const { nameList, actions, listNo } = this.props;

    const selectedList = nameList.filter(name => name.listNo === listNo);
    
    const markedCount = nameList.reduce((count, todo) =>
      todo.marked ? count + 1 : count,
      0
    );

    return (
      <List>
        {selectedList.map(name =>
          <NameItem key={name.id} name={name} {...actions} />
        )}
        {this.renderFooter(markedCount)}
      </List>
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
