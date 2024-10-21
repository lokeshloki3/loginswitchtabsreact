import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='flex flex-col justify-center items-center text-white text-3xl min-h-screen overflow-y-hidden'>
      Home
      <Link to="/login">
        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
        px-[12px] rounded-[8px] border border-richblack-700 mt-6'>Click to login</button>
      </Link>
    </div>
  );
}

export default Home;
