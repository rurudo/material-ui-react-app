import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class NameSelectField extends Component {
  static propTypes = {
    row: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    names: PropTypes.array.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  handleChange = (event, index, value) => {
    this.props.actions.selectName(this.props.row.id, value);
  };
  
  addReserve() {
    const { names } = this.props;
    if(names.find((name) => {
      return name.id === 0;
    }) === undefined) {
      
      names.push({
        text: '保留',
        marked: false,
        id: 0
      });
    }    
  }
  
  removeDeletedName() {
    const { row, names, actions } = this.props;
    if(row.name && names.find(name => name.id === row.name) === undefined) {
      actions.selectName(row.id, "");
    }
  }

  render() {
    const { row, names } = this.props;
    this.addReserve();
    this.removeDeletedName();
    
    return (
      <SelectField
        value={row.name}
        hintText="保留"
        onChange={this.handleChange}
        style={{ width: 150}}
      >
        {names.map((name, index) =>
          <MenuItem value={name.id} key={index} primaryText={name.text} disabled={name.hidden}/>
        )}
      </SelectField>
    );
  }
}