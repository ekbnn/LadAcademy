import classes from './Profile.module.scss';

const Profile = () => {
  const user = {
    firstName: 'Евгений',
    lastName: 'Харитонов',
    imageUrl: '/vite.svg',
  };

  const v = false;

  if (v) {
    return null;
  }

  return (
    <div className={classes.profile}>
      <img className={classes.profile__img} src={user.imageUrl} alt="test" />
      <span>{`${user.firstName} ${' '} ${user.lastName[0]}`}</span>
    </div>
  );
};

export default Profile;
