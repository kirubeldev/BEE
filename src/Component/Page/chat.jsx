import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Chat = () => {
  return (
    <div  className="chat"> 
      {/* <NavBar /> */}
      <div className="main-layout" >
        {/* Navigation Start */}
        <div className="navigation sidebarr navbar navbar-light bg-primary">
          {/* Logo Start */}
          <a
            className="d-none d-xl-block bg-light rounded p-1"
            href="../../index-2.html"
          >
            {/* Default :: Inline SVG */}
            {/* <svg height={30} width={30} viewBox="0 0 512 511">
              <g>
                <path
                  d="m120.65625 512.476562c-7.25 0-14.445312-2.023437-20.761719-6.007812-10.929687-6.902344-17.703125-18.734375-18.117187-31.660156l-1.261719-41.390625c-51.90625-46.542969-80.515625-111.890625-80.515625-183.992188 0-68.816406 26.378906-132.101562 74.269531-178.199219 47.390625-45.609374 111.929688-70.726562 181.730469-70.726562s134.339844 25.117188 181.730469 70.726562c47.890625 46.097657 74.269531 109.382813 74.269531 178.199219 0 68.8125-26.378906 132.097657-74.269531 178.195313-47.390625 45.609375-111.929688 70.730468-181.730469 70.730468-25.164062 0-49.789062-3.253906-73.195312-9.667968l-46.464844 20.5c-5.035156 2.207031-10.371094 3.292968-15.683594 3.292968zm135.34375-471.976562c-123.140625 0-216 89.816406-216 208.925781 0 60.667969 23.957031 115.511719 67.457031 154.425781 8.023438 7.226563 12.628907 17.015626 13.015625 27.609376l.003906.125 1.234376 40.332031 45.300781-19.988281c8.15625-3.589844 17.355469-4.28125 25.921875-1.945313 20.132812 5.554687 41.332031 8.363281 63.066406 8.363281 123.140625 0 216-89.816406 216-208.921875 0-119.109375-92.859375-208.925781-216-208.925781zm-125.863281 290.628906 74.746093-57.628906c5.050782-3.789062 12.003907-3.839844 17.101563-.046875l55.308594 42.992187c16.578125 12.371094 40.304687 8.007813 51.355469-9.433593l69.519531-110.242188c6.714843-10.523437-6.335938-22.417969-16.292969-14.882812l-74.710938 56.613281c-5.050781 3.792969-12.003906 3.839844-17.101562.046875l-55.308594-41.988281c-16.578125-12.371094-40.304687-8.011719-51.355468 9.429687l-69.554688 110.253907c-6.714844 10.523437 6.335938 22.421874 16.292969 14.886718zm0 0"
                  data-original="#000000"
                  className="active-path"
                  data-old_color="#000000"
                  fill="#665dfe"
                />
              </g>{" "}
            </svg> */}
            {/* Alternate :: External File link */}
            <NavLink to="/">
            <img class="injectable" src="./../../assetss/assetss/media/logo.png" alt="" style={{ backgroundColor:"transparent"}}/> 


            </NavLink>
          </a>
          {/* Logo End */}
          {/* Main Nav Start */}
          <ul
            className="nav nav-minimal flex-row flex-grow-1 justify-content-between flex-xl-column justify-content-xl-center"
            id="mainNavTab"
            role="tablist"
          >
            {/* Chats Tab Start */}
            <NavLink to="#" style={{ color: "#fff", fontSize: "18px", marginBottom: "14px", padding: "10px" }}>
  <i className="fa fa-home" aria-hidden="true" onClick={()=>window.location.href = '/'}></i>
</NavLink>
            <li className="nav-item">
              <a
                className="nav-link p-0 py-xl-3 "
                id="chats-tab"
                href="#chats-content"
                title="Chats"
              >
                {/* Default :: Inline SVG */}
                <svg
                  className="hw-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                style={{color:"white"}}  />
                </svg>
                {/* Alternate :: External File link */}
                {/* <img class="injectable hw-24" src="./../../assetss/assetss/media/heroicons/outline/chat-alt-2.svg" alt="Chat icon"/> */}
              </a>
            </li>
            {/* Chats Tab End */}
            {/* Calls Tab Start */}

            {/* Calls Tab End */}
            {/* Friends Tab Start */}
            
            {/* Friends Tab End */}
            {/* Profile Tab Start */}
            <li className="nav-item">
              <a
                className="nav-link p-0 py-xl-3"
                id="profile-tab"
                href="#profile-content"
                title="Profile"
              >
                {/* Default :: Inline SVG */}
                <svg
                  className="hw-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    style={{color:"white"}}  />
                </svg>
                {/* Alternate :: External File link */}
                {/* <img class="injectable hw-24" src="./../../assetss/assetss/media/heroicons/outline/user-circle.svg" alt="Profile icon"> */}
              </a>
            </li>
            {/* Profile Tab End */}
          </ul>
          <div class="tooltip-container">
           
          <i class="fa fa-sign-out" aria-hidden="true"  style={{color:"#fff", fontSize:"20px" }}></i> 
          <br /> <span className="signout" style={{color:"#fff"}}> Sign Out </span>
</div>
          {/* Main Nav End */}
        </div>
        {/* Navigation End */}
        {/* Sidebar Start */}
        <aside
          className="sidebar"
          style={{ height: "100vh", overflow: "scroll" }}
        >
          {/* Tab Content Start */}
          <div className="tab-content">
            {/* Chat Tab Content Start */}
            <div className="tab-pane active" id="chats-content">
              <div className="d-flex flex-column h-100">
                <div className="hide-scrollbar h-100" id="chatContactsList">
                  {/* Chat Header Start */}
                  <div className="sidebar-header sticky-top p-2">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Chat Tab Pane Title Start */}
                      <h5 className="font-weight-semibold mb-0">Chats</h5>
                      {/* Chat Tab Pane Title End */}
                      <ul className="nav flex-nowrap">
                        <li className="nav-item list-inline-item mr-1">
                          <a
                            className="nav-link text-muted px-1"
                            href="#"
                            title="Notifications"
                            role="button"
                            data-toggle="modal"
                            data-target="#notificationModal"
                          >
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-20"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                              />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img src="./../../assetss/assetss/media/heroicons/outline/bell.svg" alt="" class="injectable hw-20"> */}
                          </a>
                        </li>
                        <li className="nav-item list-inline-item d-block d-xl-none mr-1">
                          <a
                            className="nav-link text-muted px-1"
                            href="#"
                            title="Appbar"
                            data-toggle-appbar=""
                          >
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-20"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="hw-20" src="./../../assetss/assetss/media/heroicons/outline/view-grid.svg" alt="" class="injectable hw-20"> */}
                          </a>
                        </li>
                        <li className="nav-item list-inline-item mr-0">
                          <div className="dropdown">
                            <a
                              className="nav-link text-muted px-1"
                              href="#"
                              role="button"
                              title="Details"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-20"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                              </svg>
                              {/* Alternate :: External File link */}
                              {/* <img src="./../../assetss/assetss/media/heroicons/outline/dots-vertical.svg" alt="" class="injectable hw-20"> */}
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                role="button"
                                data-toggle="modal"
                                data-target="#startConversation"
                              >
                                New Chat
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                role="button"
                                data-toggle="modal"
                                data-target="#createGroup"
                              >
                                Create Group
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                role="button"
                                data-toggle="modal"
                                data-target="#inviteOthers"
                              >
                                Invite Others
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      
                    </div>
                    {/* Sidebar Header Start */}

                    {/* Sidebar Header End */}
                  </div>
                  {/* Chat Header End */}
                  {/* Chat Contact List Start */}
                  <ul
                    className="contacts-list"
                    id="chatContactTab"
                    data-chat-list=""
                  >
                    {/* Chat Item Start */}
                    <li className="contacts-item friends">
                      <a className="contacts-link" href="/chatm1">
                        <div className="avatar avatar-online">
                          <img
                            src="../../assetss/assetss/media/avatar/2.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name text-truncate">
                              Catherine Richardson
                            </h6>
                            <div className="chat-time">Just now</div>
                          </div>
                          <div className="contacts-texts">
                            <p className="text-truncate">
                              I’m sorry, I didn’t catch that. Could you please
                              repeat?
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Chat Item End */}
                    {/* Chat Item Start */}
                    <li className="contacts-item groups">
                      <a className="contacts-link" href="/chatm2">
                        <div className="avatar bg-success text-light">
                          <span>
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-24"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="injectable" src="./../../assetss/assetss/media/heroicons/outline/user-group.svg" alt=""> */}
                          </span>
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Themeforest Group</h6>
                            <div className="chat-time">
                              <span>10:20 pm</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            <p className="text-truncate">
                              <span>Jeny: </span>That’s pretty common. I heard
                              that a lot of people had the same experience.
                            </p>
                            <div className="d-inline-flex align-items-center ml-1">
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-16 text-muted"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {/* Alternate :: External File link */}
                              {/* <img class="injectable hw-16 text-muted" src="./../../assetss/assetss/media/heroicons/solid/lock-closed.svg" alt=""> */}
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Chat Item End */}
                    {/* Chat Item Start */}
                    <li className="contacts-item friends unread">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-offline bg-info text-light">
                          <span>EW</span>
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Eva Walker</h6>
                            <div className="chat-time">09:36 am</div>
                          </div>
                          <div className="contacts-texts">
                            <p className="text-truncate">
                              You’re kidding! I drive a motorcycle as well. What
                              type of bike do you have?
                            </p>
                            <div className="badge badge-rounded badge-primary ml-1">
                              2
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Chat Item End */}
                    {/* Chat Item Start */}
                    <li className="contacts-item friends">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-busy">
                          <img
                            src="../../assetss/assetss/media/avatar/3.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Christopher Garcia</h6>
                            <div className="chat-time">
                              <span>Yesterday</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-20 text-muted"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="injectable text-muted" src="./../../assetss/assetss/media/heroicons/solid/photograph.svg" alt=""> */}
                            <p className="text-truncate">Photo</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Chat Item End */}
                    {/* Chat Item Start */}
                    <li className="contacts-item unread">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-online">
                          <img
                            src="../../assetss/assetss/media/avatar/4.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Christina Turner</h6>
                            <div className="chat-time">
                              <span>31/05/20</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            <p className="text-truncate">
                              I’m working hard in Maths, Physics and Chemistry.
                              I have planning to appear in I.I.T. after XII.
                            </p>
                            <div className="badge badge-rounded badge-primary ml-1">
                              10
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>

                    {/* Chat Item End */}
                    {/* Chat Item Start */}
                    <li className="contacts-item friends">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-offline">
                          <img
                            src="../../assetss/assetss/media/avatar/5.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Tammy Martinez</h6>
                            <div className="chat-time">
                              <span>24/04/20</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-20 text-muted"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="injectable text-muted" src="./../../assetss/assetss/media/heroicons/solid/document-report.svg" alt=""> */}
                            <p className="text-truncate">
                              project_guidelines.docs
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="contacts-item friends">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-offline">
                          <img
                            src="../../assetss/assetss/media/avatar/5.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Tammy Martinez</h6>
                            <div className="chat-time">
                              <span>24/04/20</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-20 text-muted"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="injectable text-muted" src="./../../assetss/assetss/media/heroicons/solid/document-report.svg" alt=""> */}
                            <p className="text-truncate">
                              project_guidelines.docs
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="contacts-item friends">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-offline">
                          <img
                            src="../../assetss/assetss/media/avatar/5.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Tammy Martinez</h6>
                            <div className="chat-time">
                              <span>24/04/20</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-20 text-muted"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="injectable text-muted" src="./../../assetss/assetss/media/heroicons/solid/document-report.svg" alt=""> */}
                            <p className="text-truncate">
                              project_guidelines.docs
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="contacts-item friends">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-offline">
                          <img
                            src="../../assetss/assetss/media/avatar/5.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Tammy Martinez</h6>
                            <div className="chat-time">
                              <span>24/04/20</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-20 text-muted"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="injectable text-muted" src="./../../assetss/assetss/media/heroicons/solid/document-report.svg" alt=""> */}
                            <p className="text-truncate">
                              project_guidelines.docs
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="contacts-item friends">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-offline">
                          <img
                            src="../../assetss/assetss/media/avatar/5.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Tammy Martinez</h6>
                            <div className="chat-time">
                              <span>24/04/20</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-20 text-muted"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="injectable text-muted" src="./../../assetss/assetss/media/heroicons/solid/document-report.svg" alt=""> */}
                            <p className="text-truncate">
                              project_guidelines.docs
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="contacts-item friends">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-offline">
                          <img
                            src="../../assetss/assetss/media/avatar/5.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Tammy Martinez</h6>
                            <div className="chat-time">
                              <span>24/04/20</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-20 text-muted"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="injectable text-muted" src="./../../assetss/assetss/media/heroicons/solid/document-report.svg" alt=""> */}
                            <p className="text-truncate">
                              project_guidelines.docs
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Chat Item End */}
                    {/* Chat Item Start */}
                    <li className="contacts-item friends">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-online">
                          <img
                            src="../../assetss/assetss/media/avatar/6.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Bonnie Torres</h6>
                            <div className="chat-time">
                              <span>20/04/20</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            <p className="text-truncate">
                              Catch you later! Bye-bye!
                            </p>
                            <div className="d-inline-flex align-items-center ml-1">
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-16 text-muted"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {/* Alternate :: External File link */}
                              {/* <img class="injectable hw-16 text-muted" src="./../../assetss/assetss/media/heroicons/solid/volume-off.svg" alt=""> */}
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Chat Item End */}
                    {/* Chat Item Start */}
                    <li className="contacts-item friends">
                      <a className="contacts-link" href="#">
                        <div className="avatar avatar-offline">
                          <img
                            src="../../assetss/assetss/media/avatar/7.png"
                            alt=""
                          />
                        </div>
                        <div className="contacts-content">
                          <div className="contacts-info">
                            <h6 className="chat-name">Jacqueline James</h6>
                            <div className="chat-time">
                              <span>15/02/20</span>
                            </div>
                          </div>
                          <div className="contacts-texts">
                            {/* Default :: Inline SVG */}
                            <svg
                              className="hw-16 text-muted"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            {/* Alternate :: External File link */}
                            {/* <img class="injectable hw-16 text-muted" src="./../../assetss/assetss/media/heroicons/solid/phone-incoming.svg" alt=""> */}
                            <p className="text-truncate">Missed call</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Chat Item End */}
                    {/* Chat Item Start */}

                    {/* Chat Item End */}
                  </ul>
                  {/* Chat Contact List End */}
                </div>
              </div>
            </div>
            {/* Chats Tab Content End */}
            {/* Calls Tab Content Start */}
            
            {/* Calls Tab Content End */}
            {/* Friends Tab Content Start */}
           
            {/* Friends Tab Content End */}
            {/* Profile Tab Content Start */}
            <div className="tab-pane" id="profile-content">
              <div className="d-flex flex-column h-100">
                <div className="hide-scrollbar">
                  {/* Sidebar Header Start */}
                  <div className="sidebar-header sticky-top p-2 mb-3">
                    <h5 className="font-weight-semibold">Profile</h5>
                    <p className="text-muted mb-0">
                      Personal Information &amp; Settings
                    </p>
                  </div>
                  {/* Sidebar Header end */}
                  {/* Sidebar Content Start */}
                  <div className="container-xl">
                    <div className="row">
                      <div className="col">
                        {/* Card Start */}
                        <div className="card card-body card-bg-5">
                          {/* Card Details Start */}
                          <div className="d-flex flex-column align-items-center">
                            <div className="avatar avatar-lg mb-3">
                              <img
                                className="avatar-img"
                                src="../../assetss/assetss/media/avatar/3.png"
                                alt=""
                              />
                            </div>
                            <div className="d-flex flex-column align-items-center">
                              <h5>Catherine Richardson</h5>
                            </div>
                            <div className="d-flex">
                              <button
                                className="btn btn-outline-default mx-1"
                                type="button"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 d-none d-sm-inline-block"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/logout.svg" alt=""> */}
                                <span>Logout</span>
                              </button>
                              <button
                                className="btn btn-outline-default mx-1 d-xl-none"
                                data-profile-edit=""
                                type="button"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 d-none d-sm-inline-block"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/cog.svg" alt=""> */}
                                <span>Settings</span>
                              </button>
                            </div>
                          </div>
                          {/* Card Details End */}
                          {/* Card Options Start */}
                          <div className="card-options">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted text-muted"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-20"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/dots-vertical.svg" alt=""> */}
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Change Profile Picture
                                </a>
                                <a className="dropdown-item" href="#">
                                  Change Number
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Card Options End */}
                        </div>
                        {/* Card End */}
                        {/* Card Start */}
                        <div className="card mt-3">
                          {/* List Group Start */}
                          <ul className="list-group list-group-flush">
                            {/* List Group Item Start */}
                            <li className="list-group-item py-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">
                                    Local Time
                                  </p>
                                  <p className="mb-0">10:25 PM</p>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/heroicons/outline/clock.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                            {/* List Group Item Start */}
                            <li className="list-group-item py-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">
                                    Birthdate
                                  </p>
                                  <p className="mb-0">20/11/1992</p>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/heroicons/outline/calendar.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                            {/* List Group Item Start */}
                            <li className="list-group-item py-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">Phone</p>
                                  <p className="mb-0">+01-222-364522</p>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/heroicons/outline/phone.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                            {/* List Group Item Start */}
                            <li className="list-group-item py-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">Email</p>
                                  <p className="mb-0">
                                    catherine.richardson@gmail.com
                                  </p>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/heroicons/outline/mail.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                            {/* List Group Item Start */}
                            <li className="list-group-item py-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">
                                    Website
                                  </p>
                                  <p className="mb-0">
                                    www.catherichardson.com
                                  </p>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/heroicons/outline/globe.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                            {/* List Group Item Start */}
                            <li className="list-group-item pt-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">
                                    Address
                                  </p>
                                  <p className="mb-0">
                                    1134 Ridder Park Road, San Fransisco, CA
                                    94851
                                  </p>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/heroicons/outline/home.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                          </ul>
                          {/* List Group End */}
                        </div>
                        {/* Card End */}
                        {/* Card Start */}
                        <div className="card my-3">
                          {/* List Group Start */}
                          <ul className="list-group list-group-flush">
                            {/* List Group Item Start */}
                            <li className="list-group-item py-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">
                                    Facebook
                                  </p>
                                  <a
                                    className="font-size-sm font-weight-medium"
                                    href="#"
                                  >
                                    @cathe.richardson
                                  </a>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/icons/facebook.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                            {/* List Group Item Start */}
                            <li className="list-group-item py-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">
                                    Twitter
                                  </p>
                                  <a
                                    className="font-size-sm font-weight-medium"
                                    href="#"
                                  >
                                    @cathe.richardson
                                  </a>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/icons/twitter.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                            {/* List Group Item Start */}
                            <li className="list-group-item py-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">
                                    Instagram
                                  </p>
                                  <a
                                    className="font-size-sm font-weight-medium"
                                    href="#"
                                  >
                                    @cathe.richardson
                                  </a>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                  />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line
                                    x1="17.5"
                                    y1="6.5"
                                    x2="17.51"
                                    y2="6.5"
                                  />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/icons/instagram.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                            {/* List Group Item Start */}
                            <li className="list-group-item py-2">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <p className="small text-muted mb-0">
                                    Linkedin
                                  </p>
                                  <a
                                    className="font-size-sm font-weight-medium"
                                    href="#"
                                  >
                                    @cathe.richardson
                                  </a>
                                </div>
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="text-muted hw-20 ml-1"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                  <rect x={2} y={9} width={4} height={12} />
                                  <circle cx={4} cy={4} r={2} />
                                </svg>
                                {/* Alternate :: External File link */}
                                {/* <img class="injectable text-muted hw-20 ml-1" src="./../../assetss/assetss/media/icons/linkedin.svg" alt=""> */}
                              </div>
                            </li>
                            {/* List Group Item End */}
                          </ul>
                          {/* List Group End */}
                        </div>
                        {/* Card End */}
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Content End */}
                </div>
              </div>
            </div>
            {/* Profile Tab Content End */}
          </div>
          {/* Tab Content End */}
        </aside>
        {/* Sidebar End */}
        {/* Main Start */}
        <main className="main">
          {/* Chats Page Start */}
          <div className="chats">
            <div className="d-flex flex-column justify-content-center text-center h-100 w-100">
              <div className="container">
                <div className="avatar avatar-lg mb-2">
                  <img
                    className="avatar-img"
                    src="../../assetss/assetss/media/avatar/4.png"
                    alt=""
                  />
                </div>
                <h5>Welcome To BEE Group Chat</h5>
                <p className="text-muted">
                  Please select a chat to Start messaging.
                </p>
                <a href="/chatm1"> <button
                
                className="btn btn-outline-primary no-box-shadow"
                type="button"
                data-toggle=""
                data-target=""
              >
                Start a conversation
              </button> </a>
               
              </div>
            </div>
          </div>

          {/* Chats Page End */}
          {/* Call Log Page Start */}

          {/* Call Log Page End */}
          {/* Friends Page Start */}

          {/* Friends Page End */}
          {/* Profile Settings Start */}

          
          {/* Profile Settings End */}
        </main>
        {/* Main End */}
        {/* App Add-ons Start */}
        <div className="appbar">
         
          {/* Tab panes */}
          <div className="tab-content appnavbar-content">
            <div
              className="tab-pane h-100 active"
              id="app-welcome"
              role="tabpanel"
            >
              <div className="appnavbar-content-wrapper">
                <div className="d-flex flex-column justify-content-center text-center h-100 w-100">
                  <div className="container">
                    <div className="avatar avatar-lg mb-2">
                      <img
                        className="avatar-img"
                        src="../../assetss/assetss/media/avatar/4.png"
                        alt=""
                      />
                    </div>
                    <h5>Welcome To BEE Group Chat, Mekdes!</h5>
                    <p className="text-muted">
                      Please Click on Start a conversation to Start using it.
                    </p>
                    <a href="/chat"> <button
                
                className="btn btn-outline-primary no-box-shadow"
                type="button"
                data-toggle=""
                data-target=""
              >
                Start a conversation
              </button> </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane h-100"
              id="translator"
              role="tabpanel"
              aria-labelledby="translator-tab"
            >
              <div className="appnavbar-content-wrapper">
                <div className="appnavbar-scrollable-wrapper">
                  <div className="appnavbar-heading sticky-top">
                    <ul className="nav justify-content-between align-items-center">
                      {/* Sidebar Title Start */}
                      <li className="text-center">
                        <h5 className="text-truncate mb-0">Translator</h5>
                      </li>
                      {/* Sidebar Title End */}
                      {/* Close Sidebar Start */}
                      <li className="nav-item list-inline-item">
                        <div data-appcontent-close="">
                          {/* Default :: Inline SVG */}
                          <svg
                            className="hw-22"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          {/* Alternate :: External File link */}
                          {/* <img class="injectable hw-22" src="./../../assetss/assetss/media/heroicons/outline/x.svg" alt=""> */}
                        </div>
                      </li>
                      {/* Close Sidebar End */}
                    </ul>
                  </div>
                  <div className="appnavbar-body">
                    <div className="appnavbar-body-title">
                      <div className="dropdown w-100">
                        {/* Dropdown Button Start */}
                        <button
                          className="btn btn-outline-default btn-block dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          English
                        </button>
                        {/* Dropdown Button End */}
                        {/* Dropdown Menu Start */}
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            English
                          </a>
                          <a className="dropdown-item" href="#">
                            Hindi
                          </a>
                          <a className="dropdown-item" href="#">
                            Irish
                          </a>
                          <a className="dropdown-item" href="#">
                            Latin
                          </a>
                          <a className="dropdown-item" href="#">
                            Russian
                          </a>
                        </div>
                        {/* Dropdown Menu End */}
                      </div>
                      <img
                        className="injetable hw-16 text-muted mx-1"
                        src="../../assetss/assetss/media/heroicons/outline/arrow-right.svg"
                        alt=""
                      />
                      <div className="dropdown w-100">
                        {/* Dropdown Button Start */}
                        <button
                          className="btn btn-outline-default btn-block dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Latin
                        </button>
                        {/* Dropdown Button End */}
                        {/* Dropdown Menu Start */}
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            English
                          </a>
                          <a className="dropdown-item" href="#">
                            Hindi
                          </a>
                          <a className="dropdown-item" href="#">
                            Irish
                          </a>
                          <a className="dropdown-item" href="#">
                            Latin
                          </a>
                          <a className="dropdown-item" href="#">
                            Russian
                          </a>
                        </div>
                        {/* Dropdown Menu End */}
                      </div>
                    </div>
                    <div className="translator-container p-2">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={6}
                          placeholder="Write text here"
                          name="description"
                          defaultValue={
                            "Rise and shine, buddy! It’s time to show this world who you are. I hope your morning is filled with peace and harmony, and you are ready to start your day. Hope that you’re starting it with a smile!"
                          }
                        />
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <p className="mb-0">
                            Et surge inluminare buddy! Aliquam quis es ut
                            ostenderet hoc mundo. Utinam impleatur concordiam
                            mane et dies incipere velis. Spes autem quae erant
                            incipiens cum risu!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="appnavbar-footer">
                    <div className="btn btn-primary btn-block">Translate</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane h-100"
              id="notes"
              role="tabpanel"
              aria-labelledby="notes-tab"
            >
              <div className="appnavbar-content-wrapper">
                <div className="appnavbar-scrollable-wrapper">
                  <div className="appnavbar-heading sticky-top">
                    <ul className="nav justify-content-between align-items-center">
                      {/* Sidebar Title Start */}
                      <li className="text-center">
                        <h5 className="text-truncate mb-0">Notes</h5>
                      </li>
                      {/* Sidebar Title End */}
                      {/* Close Sidebar Start */}
                      <li className="nav-item list-inline-item">
                        <div data-appcontent-close="">
                          {/* Default :: Inline SVG */}
                          <svg
                            className="hw-22"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          {/* Alternate :: External File link */}
                          {/* <img class="injectable hw-22" src="./../../assetss/assetss/media/heroicons/outline/x.svg" alt=""> */}
                        </div>
                      </li>
                      {/* Close Sidebar End */}
                    </ul>
                  </div>
                  <div className="appnavbar-body">
                    <div className="appnavbar-body-title">
                      {/* Sidebar Header Dropdown Start */}
                      <div className="dropdown mr-2">
                        {/* Dropdown Button Start */}
                        <button
                          className="btn btn-outline-default dropdown-toggle"
                          type="button"
                          data-notes-filter-list=""
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          All Notes
                        </button>
                        {/* Dropdown Button End */}
                        {/* Dropdown Menu Start */}
                        <div className="dropdown-menu">
                          <a
                            className="dropdown-item"
                            data-notes-filter=""
                            data-select="all-chats"
                            href="#"
                          >
                            All Notes
                          </a>
                          <a
                            className="dropdown-item"
                            data-notes-filter=""
                            data-select="friends"
                            href="#"
                          >
                            Personal
                          </a>
                          <a
                            className="dropdown-item"
                            data-notes-filter=""
                            data-select="groups"
                            href="#"
                          >
                            Work
                          </a>
                          <a
                            className="dropdown-item"
                            data-notes-filter=""
                            data-select="unread"
                            href="#"
                          >
                            Favourite
                          </a>
                          <a
                            className="dropdown-item"
                            data-notes-filter=""
                            data-select="archived"
                            href="#"
                          >
                            Important
                          </a>
                        </div>
                        {/* Dropdown Menu End */}
                      </div>
                      {/* Sidebar Header Dropdown End */}
                      {/* Sidebar Search Start */}
                      <form className="form-inline">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control search border-right-0 transparent-bg pr-0"
                            placeholder="Search notes"
                          />
                          <div className="input-group-append">
                            <div
                              className="input-group-text transparent-bg border-left-0"
                              role="button"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="text-muted hw-20"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                              </svg>
                              {/* Alternate :: External File link */}
                              {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/search.svg" alt=""> */}
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* Sidebar Search End */}
                    </div>
                    <div className="note-container">
                      <div className="note">
                        <div className="note-body">
                          <div className="note-added-on">
                            Sunday, 20/12/2020 at 12:26 PM
                          </div>
                          <h5 className="note-title">Metting with John Doe</h5>
                          <p className="note-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quis, dolorum odio vitae sapiente eius
                            obcaecati.
                          </p>
                        </div>
                        <div className="note-footer">
                          <div className="note-tools">
                            <span className="badge badge-info">Personal</span>
                          </div>
                          <div className="note-tools">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/dots-vertical.svg" alt=""> */}
                                <svg
                                  className="hw-20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height={24}
                                  width={24}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                  />
                                </svg>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  Personal
                                </a>
                                <a className="dropdown-item" href="#">
                                  Work
                                </a>
                                <a className="dropdown-item" href="#">
                                  Favourite
                                </a>
                                <a className="dropdown-item" href="#">
                                  Important
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="note">
                        <div className="note-body">
                          <div className="note-added-on">
                            Sunday, 20/12/2020 at 12:26 PM
                          </div>
                          <h5 className="note-title">Metting with John Doe</h5>
                          <p className="note-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quis, dolorum odio vitae sapiente eius
                            obcaecati.
                          </p>
                        </div>
                        <div className="note-footer">
                          <div className="note-tools">
                            <span className="badge badge-danger">
                              Important
                            </span>
                          </div>
                          <div className="note-tools">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/dots-vertical.svg" alt=""> */}
                                <svg
                                  className="hw-20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height={24}
                                  width={24}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                  />
                                </svg>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  Personal
                                </a>
                                <a className="dropdown-item" href="#">
                                  Work
                                </a>
                                <a className="dropdown-item" href="#">
                                  Favourite
                                </a>
                                <a className="dropdown-item" href="#">
                                  Important
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="note">
                        <div className="note-body">
                          <div className="note-added-on">
                            Sunday, 20/12/2020 at 12:26 PM
                          </div>
                          <h5 className="note-title">Metting with John Doe</h5>
                          <p className="note-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quis, dolorum odio vitae sapiente eius
                            obcaecati.
                          </p>
                        </div>
                        <div className="note-footer">
                          <div className="note-tools">
                            <span className="badge badge-primary">
                              Favourite
                            </span>
                          </div>
                          <div className="note-tools">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/dots-vertical.svg" alt=""> */}
                                <svg
                                  className="hw-20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height={24}
                                  width={24}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                  />
                                </svg>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  Personal
                                </a>
                                <a className="dropdown-item" href="#">
                                  Work
                                </a>
                                <a className="dropdown-item" href="#">
                                  Favourite
                                </a>
                                <a className="dropdown-item" href="#">
                                  Important
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="note">
                        <div className="note-body">
                          <div className="note-added-on">
                            Sunday, 20/12/2020 at 12:26 PM
                          </div>
                          <h5 className="note-title">Metting with John Doe</h5>
                          <p className="note-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quis, dolorum odio vitae sapiente eius
                            obcaecati.
                          </p>
                        </div>
                        <div className="note-footer">
                          <div className="note-tools">
                            <span className="badge badge-warning">Work</span>
                          </div>
                          <div className="note-tools">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/dots-vertical.svg" alt=""> */}
                                <svg
                                  className="hw-20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height={24}
                                  width={24}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                  />
                                </svg>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  Personal
                                </a>
                                <a className="dropdown-item" href="#">
                                  Work
                                </a>
                                <a className="dropdown-item" href="#">
                                  Favourite
                                </a>
                                <a className="dropdown-item" href="#">
                                  Important
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="appnavbar-footer">
                    <div
                      className="btn btn-primary btn-block"
                      role="button"
                      data-toggle="modal"
                      data-target="#addNoteModal"
                    >
                      Add new note
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane h-100"
              id="todo"
              role="tabpanel"
              aria-labelledby="todo-tab"
            >
              <div className="appnavbar-content-wrapper">
                <div className="appnavbar-scrollable-wrapper">
                  <div className="appnavbar-heading sticky-top">
                    <ul className="nav justify-content-between align-items-center">
                      {/* Sidebar Title Start */}
                      <li className="text-center">
                        <h5 className="text-truncate mb-0">To-do List</h5>
                      </li>
                      {/* Sidebar Title End */}
                      {/* Close Sidebar Start */}
                      <li className="nav-item list-inline-item">
                        <div data-appcontent-close="">
                          {/* Default :: Inline SVG */}
                          <svg
                            className="hw-22"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          {/* Alternate :: External File link */}
                          {/* <img class="injectable hw-22" src="./../../assetss/assetss/media/heroicons/outline/x.svg" alt=""> */}
                        </div>
                      </li>
                      {/* Close Sidebar End */}
                    </ul>
                  </div>
                  <div className="appnavbar-body">
                    <div className="appnavbar-body-title">
                      {/* Sidebar Header Dropdown Start */}
                      <div className="dropdown mr-2">
                        {/* Dropdown Button Start */}
                        <button
                          className="btn btn-outline-default dropdown-toggle"
                          type="button"
                          data-tasks-filter-list=""
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          All Tasks
                        </button>
                        {/* Dropdown Button End */}
                        {/* Dropdown Menu Start */}
                        <div className="dropdown-menu">
                          <a
                            className="dropdown-item"
                            data-task-filter=""
                            data-select="all-tasks"
                            href="#"
                          >
                            All Tasks
                          </a>
                          <a
                            className="dropdown-item"
                            data-task-filter=""
                            data-select="active"
                            href="#"
                          >
                            Active
                          </a>
                          <a
                            className="dropdown-item"
                            data-task-filter=""
                            data-select="finished"
                            href="#"
                          >
                            Finished
                          </a>
                        </div>
                        {/* Dropdown Menu End */}
                      </div>
                      {/* Sidebar Header Dropdown End */}
                      {/* Sidebar Search Start */}
                      <form className="form-inline">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control search border-right-0 transparent-bg pr-0"
                            placeholder="Search notes"
                          />
                          <div className="input-group-append">
                            <div
                              className="input-group-text transparent-bg border-left-0"
                              role="button"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="text-muted hw-20"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                              </svg>
                              {/* Alternate :: External File link */}
                              {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/search.svg" alt=""> */}
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* Sidebar Search End */}
                    </div>
                    <div className="todo-container">
                      <div className="todo-title">
                        <h6 className="mb-0">20/07/2020</h6>
                        <p className="text-muted">6 Task remaining</p>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <ul className="todo-list">
                            <li className="todo-item todo-task-done">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                                  defaultChecked=""
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck1"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Dinner with friends
                              </h6>
                            </li>
                            <li className="todo-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck2"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck2"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Watching movie at 10:30PM
                              </h6>
                            </li>
                            <li className="todo-item todo-task-done">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck3"
                                  defaultChecked=""
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck3"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Watching a football match
                              </h6>
                            </li>
                            <li className="todo-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck4"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck4"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Coffie with girlfriend
                              </h6>
                            </li>
                            <li className="todo-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck5"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck5"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Meeting with design team
                              </h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="todo-title mt-2">
                        <h6 className="mb-0">21/07/2020</h6>
                        <p className="text-muted">6 Task remaining</p>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <ul className="todo-list">
                            <li className="todo-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck6"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck6"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Dinner with friends
                              </h6>
                            </li>
                            <li className="todo-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck7"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck7"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Watching movie at 10:30PM
                              </h6>
                            </li>
                            <li className="todo-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck8"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck8"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Watching a football match
                              </h6>
                            </li>
                            <li className="todo-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck9"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck9"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Coffie with girlfriend
                              </h6>
                            </li>
                            <li className="todo-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck10"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck10"
                                >
                                  &nbsp;
                                </label>
                              </div>
                              <h6
                                className="todo-title"
                                data-toggle="modal"
                                data-target="#taskModal"
                              >
                                Meeting with design team
                              </h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="appnavbar-footer">
                    <div
                      className="btn btn-primary btn-block"
                      role="button"
                      data-toggle="modal"
                      data-target="#addTaskModal"
                    >
                      Add new task
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane h-100"
              id="quick-settings"
              role="tabpanel"
              aria-labelledby="quick-settings-tab"
            >
              <div className="appnavbar-content-wrapper">
                <div className="appnavbar-scrollable-wrapper">
                  <div className="appnavbar-heading sticky-top">
                    <ul className="nav justify-content-between align-items-center">
                      {/* Sidebar Title Start */}
                      <li className="text-center">
                        <h5 className="text-truncate mb-0">Settings</h5>
                      </li>
                      {/* Sidebar Title End */}
                      {/* Close Sidebar Start */}
                      <li className="nav-item list-inline-item">
                        <div data-appcontent-close="">
                          {/* Default :: Inline SVG */}
                          <svg
                            className="hw-22"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          {/* Alternate :: External File link */}
                          {/* <img class="injectable hw-22" src="./../../assetss/assetss/media/heroicons/outline/x.svg" alt=""> */}
                        </div>
                      </li>
                      {/* Close Sidebar End */}
                    </ul>
                  </div>
                  <div className="appnavbar-body">
                    <div className="settings-container">
                      <ul className="list-group border list-group-flush">
                        <li className="list-group-item py-2">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <p className="mb-0">Last seen</p>
                            </div>
                            <div className="custom-control custom-switch ml-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="quickSettingSwitch1"
                                defaultChecked=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="quickSettingSwitch1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item py-2">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <p className="mb-0">Read receipts</p>
                            </div>
                            <div className="custom-control custom-switch ml-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="quickSettingSwitch2"
                                defaultChecked=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="quickSettingSwitch2"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item py-2">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <p className="mb-0">Media auto download</p>
                            </div>
                            <div className="custom-control custom-switch ml-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="quickSettingSwitch3"
                                defaultChecked=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="quickSettingSwitch3"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item py-2">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <p className="mb-0">Notifications</p>
                            </div>
                            <div className="custom-control custom-switch ml-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="quickSettingSwitch4"
                                defaultChecked=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="quickSettingSwitch4"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item py-2">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <p className="mb-0">Auto backup</p>
                            </div>
                            <div className="custom-control custom-switch ml-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="quickSettingSwitch5"
                                defaultChecked=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="quickSettingSwitch5"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item py-2">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <p className="mb-0">Screen Lock</p>
                            </div>
                            <div className="custom-control custom-switch ml-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="quickSettingSwitch6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="quickSettingSwitch6"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="appnavbar-footer">
                    <div className="btn btn-primary btn-block">
                      Save settings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* App Add-ons End */}
      </div>

      {/* All Modals End */}
    </div>
  );
};

export default Chat;
