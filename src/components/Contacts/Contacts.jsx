import css from './Contacts.module.css';

export const Contacts = ({ filter, dellContact }) => {
  return (
    <ul className={css.list}>
      {filter.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.text}>
            {name}: {number}
          </p>
          <button
            className={css.btnDell}
            type="button"
            onClick={() => dellContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
