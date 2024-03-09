import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
