import { profilePhoto } from '../../info';

const ProfilePhoto: React.FC = () => {
  return (
    <div>
      <img id="profile__img" src={profilePhoto} alt="Profile Photo" />
    </div>
  );
};

export default ProfilePhoto;
