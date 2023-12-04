import { Component } from 'react';
import css from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  formChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.addContacts(this.state);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className={css.container}>
        <form onSubmit={this.formSubmit}>
          <label>
            <p className={css.title}>Name</p>
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Oleksandr Korniichuk"
              required
              onChange={this.formChange}
            />
            <p className={css.title}>Number</p>
            <input
              className={css.input}
              type="tel"
              name="number"
              placeholder="123-45-67"
              required
              onChange={this.formChange}
            />
          </label>
          <button type="submit" className={css.btnSubmit}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
