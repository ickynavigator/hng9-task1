import { RiCameraLine } from 'react-icons/ri';
import { profilePhoto } from '../../info';
import styles from './index.module.scss';

const ProfilePhoto = () => {
  return (
    <div className={styles.wrapper} tabIndex={1}>
      <img id="profile__img" src={profilePhoto} className={styles.wrapper__image} alt="Profile Photo" />
      <RiCameraLine size={25} className={styles.wrapper__camera} />
    </div>
  );
};

export default ProfilePhoto;
