var NewItem = React.createClass({
  handleClick() {
    var name        = this.refs.name.value;
    var description = this.refs.description.value;
    var data = { item: {name: name, description: description} };
    this.props.handleNewItem(data)
  },
  render() {
    return (
      <div id="item-form">
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});

