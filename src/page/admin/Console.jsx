import authStore from '../../store/authStore';

function Console() {
  const signOut = authStore((state) => state.signOut);
  return (
    <h1
      onClick={() => {
        signOut();
      }}
    >
      Here is Console
    </h1>
  );
}
export default Console;
