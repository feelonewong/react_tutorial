import React, {Component} from 'react';
import PropTypes from 'prop-types'
class Item extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    return (
      <div>
        <li onClick={this.handleDelete}>
          {this.props.name}-- {this.props.content}
        </li>
      </div>
    );
  }
  handleDelete(){
    this.props.handleliDelete(this.props.index)
  }
}
Item.propTypes = {
  content: PropTypes.string,
  index:PropTypes.number.isRequired,
  handleDelete:PropTypes.func
};
Item.defaultProps={
  name:'Alice'
}

export default Item;