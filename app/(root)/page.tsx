import {UserButton} from '@clerk/nextjs';

const Home = () => {
  return <div>
    <h1>Home</h1>
    <p>Welcome to the home page!</p>
    <UserButton afterSignOutUrl='/' />
  </div>;
};

export default Home;