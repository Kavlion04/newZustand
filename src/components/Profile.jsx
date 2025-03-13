import useStore from "../context/useStore";

const Profile = () => {
  const { user, logoutUser } = useStore();

  if (!user) {
    return <p>Foydalanuvchi topilmadi. Iltimos, login qiling.</p>;
  }

  return (
    <div className="profile-page" onClick={() => console.log(user)}>
      <h1>Profil</h1>
      <p>Foydalanuvchi: {user.username}</p>
      <button onClick={logoutUser}>Chiqish</button>
    </div>
  );
};

export default Profile;
