import { useSelector } from 'react-redux';

const MyRockets = () => {
  const mRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div className="myMissionsContainer">
      <ul>
        {
          mRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MyRockets;
