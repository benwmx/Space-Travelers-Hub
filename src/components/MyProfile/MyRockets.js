import { useSelector } from 'react-redux';
import Styles from './myProfile.module.scss';

const MyRockets = () => {
  const myRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div className={Styles.listContainer}>
      <h2>My Rockets</h2>
      {
        (myRockets.length === 0)
          ? <p className={Styles.emptyList}>Empty 😢 </p>
          : (
            <ul className={Styles.list}>
              {
          myRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))
        }
            </ul>
          )
      }

    </div>
  );
};

export default MyRockets;
