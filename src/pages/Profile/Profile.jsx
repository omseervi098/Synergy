import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/linechart";
import Featured from "../../components/featured/Featured";
import "../single/single.scss";
import "./profile.scss";
const Profile = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 93456 78978</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Summary:</span>
                  <span className="itemValue">
                    Humans can evaluate these visual elements in several
                    situations to find a sense of balance. Humans can evaluate
                    these visual elements in several situations to find a sense
                    of balance.
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Education:</span>
                  <ul>
                    <li className="itemValue">B.Com from Ski University</li>
                    <li className="itemValue">
                      Vivamus elementum semper nisi.
                    </li>
                    <li className="itemValue">M.Com from Ski University</li>
                  </ul>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Experience:</span>
                  <ul>
                    <li className="itemValue">Assistant Prof. Ski Univerity</li>
                    <li className="itemValue">Assistant Prof. at MIT</li>
                    <li className="itemValue">Associate Prof. at SRM</li>
                  </ul>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Subjects:</span>
                  <ul>
                    <li className="itemValue">
                      Design and Analysis of Algorithm
                    </li>
                    <li className="itemValue">Data Structure and Algorithm</li>
                  </ul>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          <Featured/> 
          </div>
        </div>
        <div className="top">
          <Chart title="Rating from date of joining" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
