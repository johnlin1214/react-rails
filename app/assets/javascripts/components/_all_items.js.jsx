var AllItems = React.createClass({
  render() {
    var allItems = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item removeItem={this.props.removeItem} 
                handleEdit={this.props.handleEdit} 
                item={item}/>  
        </div>
      )
    });
    return (
      <div>
        {allItems}
      </div>
    )
  }
});
