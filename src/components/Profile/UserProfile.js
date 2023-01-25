import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.summary}>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
