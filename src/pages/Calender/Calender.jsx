import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Calender.scss";
import Scheduler from "../../components/Schedular";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <span>
        <Scheduler/></span>
      </div>
    </div>
  );
};

export default Home;
