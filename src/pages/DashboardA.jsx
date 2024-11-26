import React from 'react';
import CompImg from '../images/images/compLogo.png';

const DashboardA = () => {
  return (
    <>
    <div class="navigationWrapper">  
        <section class="navigation">
            <div class="nav-container">
                <div class="nav-logo">
                     <a href="#!"> <img src={ CompImg } width="100"><b>THE ALPHA WORLD</b></a>
                </div>
                <nav>
                    <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                    <ul class="nav-list">
                        <li><a href="#!">Dashboard</a></li>
                        <li><a href="#createuser">Create User</a></li>
                        <li><a href="#!"><img src="images/user-login.png" width="32" alt="user" class="user"></a>
                            <ul class="navbar-dropdown">
                                <li><a href="#!">Username</a></li>
                                <li><a href="#!">Designation</a></li>
                                <li><a href="#!">Edit Profile</a></li>
                                <li><a href="#!">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>

    <div class="cardsection">
        <div class="cards">
            <span>Total Number of Sales Representative </span>
            <h3>85</h3>
        </div>
        <div class="cards">
            <span>Total Number of Services confirmed </span>
            <h3>850</h3>
        </div>
        <div class="cards">
            <span>Total number of passengers served </span>
            <h3>10384</h3>
        </div>
        <div class="cards">
            <span>Total Sales amount</span>
            <h3>65 Lac</h3>
        </div>
        <div class="cards">
            <span>Last Month Sales Amount</span>
            <h3>5 Lac</h3>
        </div>
    </div>

    <div class="regstrationFormWrapper"  style="overflow-x: auto;">
        <h1 class="pageTitle">Sales Data </h1>
        <table class="primaryTable">
            <tr>
              <th scope="col">Full Name </th>
              <th scope="col">Salary / Incentive</th>
              <th scope="col">Date of Joining</th>
              <th scope="col">Years Served</th>
              <th scope="col">Region/ State / Country</th>
              <th scope="col">Sales Achieved till Date</th>
              <th scope="col">Incentives</th>
              <th scope="col">Salary Withdrawn</th>
          </tr>
          <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni</a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
            <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni Ramesh Soni </a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
            <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni</a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
        </table>
    </div>

    <div class="regstrationFormWrapper"  style="overflow-x: auto;">
        <h1 class="pageTitle">Agent Data</h1>
        <table class="primaryTable">
            <tr>
              <th scope="col">Full Name </th>
              <th scope="col">Salary / Incentive</th>
              <th scope="col">Date of Joining</th>
              <th scope="col">Years Served</th>
              <th scope="col">Region/ State / Country</th>
              <th scope="col">Sales Achieved till Date</th>
              <th scope="col">Incentives</th>
              <th scope="col">Salary Withdrawn</th>
          </tr>
          <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni</a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
            <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni Ramesh Soni </a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
            <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni</a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
        </table>
    </div>

    <div class="regstrationFormWrapper"  style="overflow-x: auto;">
        <h1 class="pageTitle">Regional Manager Data</h1>
        <table class="primaryTable">
            <tr>
              <th scope="col">Full Name </th>
              <th scope="col">Salary / Incentive</th>
              <th scope="col">Date of Joining</th>
              <th scope="col">Years Served</th>
              <th scope="col">Region/ State / Country</th>
              <th scope="col">Sales Achieved till Date</th>
              <th scope="col">Incentives</th>
              <th scope="col">Salary Withdrawn</th>
          </tr>
          <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni</a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
            <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni Ramesh Soni </a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
            <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni</a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
        </table>
    </div>

    <div class="popup" id="createuser" >
        <a href="#" class="close">×</a>
        <h2>Create User</h2>
        <form class="gridCmpltCenterCol" name="loginForm" action="">
            <div class="gridCmpltCenterCol">
                <input class="ip" name="" id="" placeholder="Create Email Id" />
                <div class="loginBtnWrapper">
                    <input class="primaryBtns loginBtn" type="submit" name="" value="Create User" name="" id="" />
                </div>
            </div>
        </form>
    </div>
    <a href="#" class="close-popup"></a>
    </>
  );
};

export default DashboardA;
