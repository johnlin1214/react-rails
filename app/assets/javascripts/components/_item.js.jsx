var Item = React.createClass({
  deleteItem(id) {
    this.props.removeItem(id);
  },
  render() {
    return (
      <div>
        <h3>{this.props.item.name}</h3>
        <p>{this.props.item.description}</p>    
        <button onClick={this.deleteItem.bind(this, this.props.item.id)}>
          Delete
        </button>   
      </div>
    )
  }
});
