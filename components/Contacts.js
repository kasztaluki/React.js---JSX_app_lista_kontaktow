var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return (<li>
            {Contact.firstName} {contact.lastName}
        </li>)
    });

    return (
      <ul className={'contactsList'}>
        {contacts}
      </ul>
    );
  }
});