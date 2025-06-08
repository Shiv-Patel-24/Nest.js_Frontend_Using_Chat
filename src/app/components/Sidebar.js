export default function Sidebar({
  contacts,
  selectedContact,
  onSelectContact,
  collapsed,
}) {
  const avatarColors = [
    "#3cb371", // green
    "#b0b0b0", //gray
    "#3ec6e0", // blue
    "#f9b26b", // orange
    "#f9a8c3", // pink
    "#b6b6f9", // lavender
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="contacts-list">
        <div className="title">Chats</div>
        {contacts.map((contact, idx) => (
          <div
            key={contact.id}
            className={`contact-item ${
              selectedContact.id === contact.id ? "active" : ""
            }`}
            onClick={() => onSelectContact(contact)}
          >
            <div className="contact-avatar" style={{ position: "relative" }}>
              <div
                className="avatar-circle"
                style={{
                  backgroundColor: avatarColors[idx],
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {contact.avatar}
              </div>

              {idx < 3 && (
                <div
                  className="online-indicator"
                  style={{
                    position: "absolute",
                    bottom: 4,
                    left: 34,
                    width: 12,
                    height: 12,
                    background: "#3cb371",
                    border: "2px solid #fff",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>
            {!collapsed && (
              <div className="contact-info">
                <div className="contact-header">
                  <div className="contact-name">{contact.name}</div>
                  <div className="contact-time">{contact.time}</div>
                </div>
                <div className="contact-message">{contact.lastMessage}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
