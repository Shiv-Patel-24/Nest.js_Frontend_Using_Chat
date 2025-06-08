export default function ChatHeader({ contact }) {
  return (
    <div className="chat-header">
      <div className="chat-contact-info">
        <div className="chat-avatar">
          <div
            className="avatar-circle"
            style={{
              backgroundColor: contact.online ? "#4CAF50" : "#9E9E9E",
            }}
          >
            {contact.avatar}
          </div>
        </div>
        <div className="chat-contact-details">
          <div className="chat-contact-name">{contact.name}</div>
          <div className="chat-contact-status">
            {contact.online ? "Online" : "Offline"}
          </div>
        </div>
      </div>
    </div>
  );
}
