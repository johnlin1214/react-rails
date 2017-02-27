var Body = React.createClass({
  getInitialState() {
    return { items: [] }
  },
  componentDidMount() {
    $.ajax({
      url: "/api/v1/items.json",
      type: "GET",
      success: (response) => {
        this.setState({ items: response });
      }
    })
  },
  addNewItem(item) {
    $.ajax({
      url: "/api/v1/items",
      type: "POST",
      data: item,
      success: (response) => {
        var updatedItemList = this.state.items.concat(response)
        this.setState({ items: updatedItemList });
      }
    })
  },
  removeItem(id) {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: "DELETE",
      success: (response) => {
        var updatedItem = this.state.items.filter((item) => {
          return item.id != id
        });
        this.setState({ items: updatedItem }); 
      }
    })
  },
  render() {
    return (
      <div>
        <NewItem handleNewItem={this.addNewItem}/>
        <AllItems removeItem={this.removeItem} items={this.state.items}/>
      </div>
    )
  }
});
