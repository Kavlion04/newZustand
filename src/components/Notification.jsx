import useStore from "../context/useStore";
import "../styles/notifications.css";

const Notification = () => {
  const { notifications } = useStore();

  return (
    <div className="notification-container">
      {notifications.slice(-3).map((notif, i) => (
        <div key={i} className={`notification ${notif.type}`}>
          {notif.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
