const Notification = (props) => {
  const { image, className, text } = props;
  const notificationClassname = `notification ${className}`;

  return (
    <div className={notificationClassname}>
      <img src={image} className="image" />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container">
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="primary"
        text="Information Message"
      />
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success"
        text="Success Message"
      />
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="warning"
        text="Warning Message"
      />
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="danger"
        text=" Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
