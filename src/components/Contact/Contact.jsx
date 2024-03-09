import css from "./Contact.module.css";

const Contact = ({ contact: { name, number } }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
