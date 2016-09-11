import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import NameList from '../components/NameList';
import * as NamesListActions from '../actions/NamesListActions';
import {Tabs, Tab} from 'material-ui/Tabs';
import Order from '../components/Order';

class Frame extends Component {
  static propTypes = {
    nameList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = { listNo: 1};
  }
  
  handleShow(listNo) {
    this.setState({ listNo });
  }
  
  render() {
    const { nameList, actions } = this.props;
    const { listNo } = this.state;
    
    return (
	  <Tabs>
	    <Tab label="オーダー">
	      <Order nameList={nameList} />
	    </Tab>
	    <Tab label="メモ">
        <Header
          addName={actions.addName}
          listNo={listNo}
        />
        <NameList
          nameList={nameList}
          actions={actions}
          onShow={(forward) => this.handleShow(forward)}
          listNo={listNo}
        />
	    </Tab>
	  </Tabs>
    );
  }
}

function mapState(state) {
  return {
    nameList: state.nameList,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(NamesListActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(Frame);
