var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
        <input type={'text'} name={'Imię'} {this.props.contact.firstName}>
        <input type={'text'} name={'Nazwisko'} {this.props.contact.lastName}>
        <input type={'email'} naem={'Email'} {this.props.contact.email}>
        <button type={'submit'} {"Dodaj kontakt"}
      </form>
      )
  },
})