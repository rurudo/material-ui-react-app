import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class PositionSelectField extends Component {
  static propTypes = {
    row: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  handleChange = (event, index, value) => {
    this.props.actions.selectIndex(this.props.row.id, value);
  };

  render() {
    const { row } = this.props;
    const tableData = Array.from(Array(9), (_, i) => 1 + i);
    tableData.push('/');

    return (
      <SelectField
        value={row.id}
        onChange={this.handleChange}
        style={{ width: 150}}
      >
        {tableData.map((indexText, index) =>
          <MenuItem value={index} key={index} primaryText={indexText} />
        )}
      </SelectField>
    );
  }
}
