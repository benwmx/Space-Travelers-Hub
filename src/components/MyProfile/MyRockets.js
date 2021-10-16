import { useSelector } from 'react-redux';
import Styles from './myProfile.module.scss';

const MyRockets = () => {
  const mRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div className={Styles.listContainer}>
      <h2>My Rockets</h2>
      <ul className={Styles.list}>
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
