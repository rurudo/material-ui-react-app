import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import AccountBox from 'material-ui/svg-icons/action/account-box';

export default class Footer extends Component {
  static propTypes = {
    registCount: PropTypes.number.isRequired,
    listNo: PropTypes.number.isRequired,
    onShow: PropTypes.func.isRequired
  };

  handleChange = (event, index, value) => this.props.onShow(value);

  render() {
    const { listNo } = this.props;
    return (
      <footer>
        {this.renderRegistCount()}
        <SelectField
          value={listNo}
          onChange={this.handleChange}
        >
          {Array.from(Array(3), (_, i) => i + 1).map(index =>
            <MenuItem
              value={index}
              key={index}
              primaryText={'リスト' + index}
            />
          )}
        </SelectField>
      </footer>
    );
  }

  renderRegistCount() {
    const { registCount } = this.props;

    return (
    <Badge
      badgeContent={registCount}
      secondary={true}
    >
      <AccountBox />
    </Badge>
    );
  }

  renderListLink(listNo) {
    const title = 'リスト' + listNo;
    const { listNo: selectedlistNo, onShow } = this.props;

    return (
      <a className={classnames({ selected: listNo === selectedlistNo })}
         style={{ cursor: 'hand' }}
         onClick={() => onShow(listNo)}>
        {title}
      </a>
    );
  }
}
