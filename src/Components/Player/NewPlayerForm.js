import React from 'react';

class NewPlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      phone: '',
    }

    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, phone} = event.target;

    this.setState({
      [name] : phone
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const {name, phone} = this.state;

    return(
      <form>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <label>Phone</label>
        <input type="text" name="phone" value={phone} onChange={this.handleChange} />

        <input type="submit" value="Add Player" onClick={this.submitForm} />
      </form>
    )
  }
}

export default NewPlayerForm;