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
        $('#item-form input').val('');
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
  handleEdit(data) {
    $.ajax({
      url: `/api/v1/items/${data.id}`,
      type: "PUT",
      data: { item: data },
      success: (item) => {
        var items = this.state.items.filter((i) => { return i.id != item.id });
        items.push(item);
        this.setState({items: items });
      }
    })
  },
  render() {
    return (
      <div>
        <NewItem handleNewItem={this.addNewItem}/>
        <AllItems removeItem={this.removeItem} 
                  handleEdit={this.handleEdit}
                  items={this.state.items}/>
      </div>
    )
  }
});
