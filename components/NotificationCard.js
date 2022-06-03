const NotificationCard = ({ header, message }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <p className="text-md font-bold text-primary">{header}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
