import React from 'react'

const Chatm2 = () => {
  return (
    <div style={{maxHeight:"100vh"}}> 
        <div className="main-layout">
        <main className="main main-visible">
    {/* Chats Page Start */}
    <div className="chats">
      <div className="chat-body">
        {/* Chat Header Start*/}
        <div className="chat-header">
          {/* Chat Back Button (Visible only in Small Devices) */}
          <button
            className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none"
            type="button"
            data-close=""
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {/* Alternate :: External File link */}
            {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/arrow-left.svg" alt=""> */}
          </button>
          {/* Chat participant's Name */}
          <div className="media chat-name align-items-center text-truncate">
            <div className="avatar avatar-online d-none d-sm-inline-block mr-3">
              <img src="../../assetss/assetss/media/avatar/2.png" alt="" />
            </div>
            <div className="media-body align-self-center ">
              <h6 className="text-truncate mb-0">Catherine Richardson</h6>
              <small className="text-muted">Online</small>
            </div>
          </div>
          {/* Chat Options */}
          <ul className="nav flex-nowrap">
            <li className="nav-item list-inline-item d-none d-sm-block mr-1">
              <a
                className="nav-link text-muted px-1"
                data-toggle="collapse"
                data-target="#searchCollapse"
                href="#"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {/* Alternate :: External File link */}
                {/* <img src="./../../assetss/assetss/media/heroicons/outline/search.svg" alt="" class="injectable hw-20"> */}
              </a>
            </li>
            <li className="nav-item list-inline-item d-none d-sm-block mr-1">
              <a
                className="nav-link text-muted px-1"
                href="#"
                title="Add People"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {/* Alternate :: External File link */}
                {/* <img src="./../../assetss/assetss/media/heroicons/outline/phone.svg" alt="" class="injectable hw-20"> */}
              </a>
            </li>
            <li className="nav-item list-inline-item d-none d-sm-block mr-0">
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
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                    data-chat-info-toggle=""
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/information-circle.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>View Info</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        clipRule="evenodd"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/volume-off.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Mute Notifications</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/photograph.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Wallpaper</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/archive.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Archive</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Delete</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex text-danger"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/ban.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Block</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item list-inline-item d-sm-none mr-0">
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
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
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
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/phone.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Call</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                    data-toggle="collapse"
                    data-target="#searchCollapse"
                    aria-expanded="false"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
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
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/search.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Search</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                    data-chat-info-toggle=""
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/information-circle.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>View Info</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        clipRule="evenodd"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/volume-off.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Mute Notifications</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/photograph.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Wallpaper</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/archive.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Archive</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Delete</span>
                  </a>
                  <a
                    className="dropdown-item align-items-center d-flex text-danger"
                    href="#"
                  >
                    {/* Default :: Inline SVG */}
                    <svg
                      className="hw-20 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                    {/* Alternate :: External File link */}
                    {/* <img src="./../../assetss/assetss/media/heroicons/outline/ban.svg" alt="" class="injectable hw-20 mr-2"> */}
                    <span>Block</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Chat Header End*/}
        {/* Search Start */}
        <div className="collapse border-bottom px-3" id="searchCollapse">
          <div className="container-xl py-2 px-0 px-md-3">
            <div className="input-group bg-light ">
              <input
                type="text"
                className="form-control form-control-md border-right-0 transparent-bg pr-0"
                placeholder="Search"
              />
              <div className="input-group-append">
                <span className="input-group-text transparent-bg border-left-0">
                  {/* Default :: Inline SVG */}
                  <svg
                    className="hw-20 text-muted"
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
                  {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/search.svg" alt="Search icon"> */}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Search End */}
        {/* Chat Content Start*/}
        <div className="chat-content p-2" id="messageBody">
          <div className="container">
            {/* Message Day Start */}
            <div className="message-day">
              <div
                className="message-divider sticky-top pb-2"
                data-label="Yesterday"
              >
                &nbsp;
              </div>
              {/* Received Message Start */}
              <div className="message">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      I have to give a presentation on global warming on Friday,
                      and I am so nervous.
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Received Message End */}
              {/* Self Message Start */}
              <div className="message self">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      First of all, you need to understand the subject matter
                      thoroughly. You need to know what is global warming, what
                      causes global warming, and what people should do to abate
                      the effects of global warming.
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <span className="message-status">Edited</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                        <span>Edit</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Self Message End */}
              {/* Received Message Start */}
              <div className="message">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      I have done a lot of research on the subject, and I know I
                      can answer any questions I will receive from the audience.
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Received Message End */}
              {/* Received Message Start */}
              <div className="message">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      I should talk about more precisely the sequence of my
                      presentation?
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Received Message End */}
              {/* Self Message Start */}
              <div className="message self">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      Yes, what you should present first, second and third…
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                        <span>Edit</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Self Message End */}
              {/* Message Start */}
              <div className="message">
                <div className="message-wrapper">
                  <div className="message-content">
                    <div className="document">
                      <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
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
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-24" src="./../../assetss/assetss/media/heroicons/outline/document.svg" alt=""> */}
                      </div>
                      <div className="document-body">
                        <h6>
                          <a
                            href="#"
                            className="text-reset"
                            title="global-warming-data-2020.xlxs"
                          >
                            global-warming-data-2020.xlxs
                          </a>
                        </h6>
                        <ul className="list-inline small mb-0">
                          <li className="list-inline-item">
                            <span className="text-muted">79.2 KB</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-muted text-uppercase">
                              xlxs
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/download.svg" alt="download"> */}
                        <span>Download</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Message End */}
              {/* Received Message Start */}
              <div className="message">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      If that is the case, then I already have an outline. To
                      make it easy for my audience to follow the presentation, I
                      intend to post the outline on the board at all time during
                      my speech.
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18  rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Received Message End */}
            </div>
            {/* Message Day End */}
            {/* Message Day Start */}
            <div className="message-day">
              <div
                className="message-divider sticky-top pb-2"
                data-label="Today"
              >
                &nbsp;
              </div>
              {/* Self Message Start */}
              <div className="message self">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      Good idea! By the way, do you have any facts to back you
                      up? For example, change of climate, yearly disasters…
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <span className="message-status">Edited</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                        <span>Edit</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Self Message End */}
              {/* Received Message Start */}
              <div className="message">
                <div className="message-wrapper">
                  <div className="message-content">
                    <h6>I have shared some photos, Please have a look.</h6>
                    <div className="form-row">
                      <div className="col">
                        <a
                          className="popup-media"
                          href="../../assetss/assetss/media/shared-photos/01.jpg"
                        >
                          <img
                            className="img-fluid rounded"
                            src="../../assetss/assetss/media/shared-photos/01.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col">
                        <a
                          className="popup-media"
                          href="../../assetss/assetss/media/shared-photos/02.jpg"
                        >
                          <img
                            className="img-fluid rounded"
                            src="../../assetss/assetss/media/shared-photos/02.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col">
                        <a
                          className="popup-media"
                          href="../../assetss/assetss/media/shared-photos/03.jpg"
                        >
                          <img
                            className="img-fluid rounded"
                            src="../../assetss/assetss/media/shared-photos/03.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/download.svg" alt="download"> */}
                        <span>Download</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Received Message End */}
              {/* Received Message Start */}
              <div className="message">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      No, I have not thought about that. I better get some
                      statistics from the Internet. I should not have any
                      problems since the Internet has all kinds of data.
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18  rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Received Message End */}
              {/* Self Message Start */}
              <div className="message self">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      Pictures will keep your audience from being bored. In
                      order for you to succeed, you need to keep them interested
                      and involved.
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                        <span>Edit</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Self Message End */}
              {/* Received Message Start */}
              <div className="message">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>
                      You are absolutely right. I will take time to practice and
                      to learn to relax and express myself really well. Wish me
                      luck, Catherine!
                    </span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">9:12am</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Received Message End */}
              {/* Self Message Start */}
              <div className="message self">
                <div className="message-wrapper">
                  <div className="message-content">
                    <span>I know you. You can do it. Good luck, Jennifer!</span>
                  </div>
                </div>
                <div className="message-options">
                  <div className="avatar avatar-sm">
                    <img alt="" src="../../assetss/assetss/media/avatar/6.png" />
                  </div>
                  <span className="message-date">Just now</span>
                  <div className="dropdown">
                    <a
                      className="text-muted"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      {/* Alternate :: External File link */}
                      {/* <img class="injectable hw-18" src="./../../assetss/assetss/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                        <span>Copy</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                        <span>Edit</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message replay"> */}
                        <span>Replay</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 rotate-y mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable rotate-y hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/reply.svg" alt="message forward"> */}
                        <span>Forward</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/star.svg" alt="message favourite"> */}
                        <span>Favourite</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center text-danger"
                        href="#"
                      >
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-18 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        {/* Alternate :: External File link */}
                        {/* <img class="injectable hw-18 mr-2" src="./../../assetss/assetss/media/heroicons/outline/trash.svg" alt="message delete"> */}
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Self Message End */}
            </div>
            {/* Message Day End */}
          </div>
          {/* Scroll to finish */}
          <div className="chat-finished" id="chat-finished" />
        </div>
        {/* Chat Content End*/}
        {/* Chat Footer Start*/}
        <div className="chat-footer">
          <div className="attachment">
            <div className="dropdown">
              <button
                className="btn btn-secondary btn-icon btn-minimal btn-sm"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/plus-circle.svg" alt=""> */}
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  <svg
                    className="hw-20 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {/* <img class="injectable hw-20 mr-2" src="./../../assetss/assetss/media/heroicons/outline/photograph.svg" alt=""> */}
                  <span>Gallery</span>
                </a>
                <a className="dropdown-item" href="#">
                  <svg
                    className="hw-20 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                  {/* <img class="injectable hw-20 mr-2" src="./../../assetss/assetss/media/heroicons/outline/volume-up.svg" alt=""> */}
                  <span>Audio</span>
                </a>
                <a className="dropdown-item" href="#">
                  <svg
                    className="hw-20 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  {/* <img class="injectable hw-20 mr-2" src="./../../assetss/assetss/media/heroicons/outline/document.svg" alt=""> */}
                  <span>Document</span>
                </a>
                <a className="dropdown-item" href="#">
                  <svg
                    className="hw-20 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {/* <img class="injectable hw-20 mr-2" src="./../../assetss/assetss/media/heroicons/outline/user.svg" alt=""> */}
                  <span>Contact</span>
                </a>
                <a className="dropdown-item" href="#">
                  <svg
                    className="hw-20 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {/* <img class="injectable hw-20 mr-2" src="./../../assetss/assetss/media/heroicons/outline/location-marker.svg" alt=""> */}
                  <span>Location</span>
                </a>
                <a className="dropdown-item" href="#">
                  <svg
                    className="hw-20 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {/* <img class="injectable hw-20 mr-2" src="./../../assetss/assetss/media/heroicons/outline/chart-square-bar.svg" alt=""> */}
                  <span>Poll</span>
                </a>
              </div>
            </div>
          </div>
          <textarea
            className="form-control emojionearea-form-control"
            id="messageInput"
            rows={1}
            placeholder="Type your message here..."
            defaultValue={""}
          />
          <div
            className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1"
            role="button"
          >
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            {/* <img src="./../../assetss/assetss/media/heroicons/outline/arrow-right.svg" alt="" class="injectable"> */}
          </div>
        </div>
        {/* Chat Footer End*/}
      </div>
      {/* Chat Info Start */}
      <div className="chat-info">
        <div className="d-flex h-100 flex-column">
          {/* Chat Info Header Start */}
          <div className="chat-info-header px-2">
            <div className="container-fluid">
              <ul className="nav justify-content-between align-items-center">
                {/* Sidebar Title Start */}
                <li className="text-center">
                  <h5 className="text-truncate mb-0">Profile Details</h5>
                </li>
                {/* Sidebar Title End */}
                {/* Close Sidebar Start */}
                <li className="nav-item list-inline-item">
                  <a
                    className="nav-link text-muted px-0"
                    href="#"
                    data-chat-info-close=""
                  >
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
                  </a>
                </li>
                {/* Close Sidebar End */}
              </ul>
            </div>
          </div>
          {/* Chat Info Header End  */}
          {/* Chat Info Body Start  */}
          <div className="hide-scrollbar flex-fill">
            {/* User Profile Start */}
            <div className="text-center p-3">
              {/* User Profile Picture */}
              <div className="avatar avatar-xl mx-5 mb-3">
                <img
                  className="avatar-img"
                  src="../../assetss/assetss/media/avatar/2.png"
                  alt=""
                />
              </div>
              {/* User Info */}
              <h5 className="mb-1">Catherine Richardson</h5>
              <p className="text-muted d-flex align-items-center justify-content-center">
                {/* Default :: Inline SVG */}
                <svg
                  className="hw-18 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {/* Alternate :: External File link */}
                {/* <img class="injectable mr-1 hw-18" src="./../../assetss/assetss/media/heroicons/outline/location-marker.svg" alt=""> */}
                <span>San Fransisco, CA</span>
              </p>
              {/* User Quick Options */}
              <div className="d-flex align-items-center justify-content-center">
                <div className="btn btn-outline-default btn-icon rounded-circle mx-1">
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
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  {/* Alternate :: External File link */}
                  {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/user-add.svg" alt=""> */}
                </div>
                <div className="btn btn-primary btn-icon rounded-circle text-light mx-1">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Alternate :: External File link */}
                  {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/heart.svg" alt=""> */}
                </div>
                <div className="btn btn-danger btn-icon rounded-circle text-light mx-1">
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
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                  {/* Alternate :: External File link */}
                  {/* <img class="injectable hw-20" src="./../../assetss/assetss/media/heroicons/outline/ban.svg" alt=""> */}
                </div>
              </div>
            </div>
            {/* User Profile End */}
            {/* User Information Start */}
            <div className="chat-info-group">
              <a
                className="chat-info-group-header"
                data-toggle="collapse"
                href="#profile-info"
                role="button"
                aria-expanded="true"
                aria-controls="profile-info"
              >
                <h6 className="mb-0">User Information</h6>
                {/* Default :: Inline SVG */}
                <svg
                  className="hw-20 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {/* Alternate :: External File link */}
                {/* <img class="injectable text-muted hw-20" src="./../../assetss/assetss/media/heroicons/outline/information-circle.svg" alt=""> */}
              </a>
              <div
                className="chat-info-group-body collapse show"
                id="profile-info"
              >
                <div className="chat-info-group-content list-item-has-padding">
                  {/* List Group Start */}
                  <ul className="list-group list-group-flush ">
                    {/* List Group Item Start */}
                    <li className="list-group-item border-0">
                      <p className="small text-muted mb-0">Phone</p>
                      <p className="mb-0">+01-222-364522</p>
                    </li>
                    {/* List Group Item End */}
                    {/* List Group Item Start */}
                    <li className="list-group-item border-0">
                      <p className="small text-muted mb-0">Email</p>
                      <p className="mb-0">catherine.richardson@gmail.com</p>
                    </li>
                    {/* List Group Item End */}
                    {/* List Group Item Start */}
                    <li className="list-group-item border-0">
                      <p className="small text-muted mb-0">Address</p>
                      <p className="mb-0">
                        1134 Ridder Park Road, San Fransisco, CA 94851
                      </p>
                    </li>
                    {/* List Group Item End */}
                  </ul>
                  {/* List Group End */}
                </div>
              </div>
            </div>
            {/* User Information End */}
            {/* Shared Media Start */}
            <div className="chat-info-group">
              <a
                className="chat-info-group-header"
                data-toggle="collapse"
                href="#shared-media"
                role="button"
                aria-expanded="true"
                aria-controls="shared-media"
              >
                <h6 className="mb-0">Last Media</h6>
                {/* Default :: Inline SVG */}
                <svg
                  className="hw-20 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {/* Alternate :: External File link */}
                {/* <img class="injectable text-muted hw-20" src="./../../assetss/assetss/media/heroicons/outline/photograph.svg" alt=""> */}
              </a>
              <div
                className="chat-info-group-body collapse show"
                id="shared-media"
              >
                <div className="chat-info-group-content">
                  {/* Shared Media */}
                  <div className="form-row">
                    <div className="col-4 col-md-2 col-xl-4">
                      <a href="#">
                        <img
                          src="../../assetss/assetss/media/shared-photos/01.jpg"
                          className="img-fluid rounded border"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-4 col-md-2 col-xl-4">
                      <a href="#">
                        <img
                          src="../../assetss/assetss/media/shared-photos/02.jpg"
                          className="img-fluid rounded border"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-4 col-md-2 col-xl-4">
                      <a href="#">
                        <img
                          src="../../assetss/assetss/media/shared-photos/03.jpg"
                          className="img-fluid rounded border"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Shared Media End */}
            {/* Shared Files Start */}
            <div className="chat-info-group">
              <a
                className="chat-info-group-header"
                data-toggle="collapse"
                href="#shared-files"
                role="button"
                aria-expanded="true"
                aria-controls="shared-files"
              >
                <h6 className="mb-0">Documents</h6>
                {/* Default :: Inline SVG */}
                <svg
                  className="hw-20 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {/* Alternate :: External File link */}
                {/* <img class="injectable text-muted hw-20" src="./../../assetss/assetss/media/heroicons/outline/document.svg" alt=""> */}
              </a>
              <div
                className="chat-info-group-body collapse show"
                id="shared-files"
              >
                <div className="chat-info-group-content list-item-has-padding">
                  {/* List Group Start */}
                  <ul className="list-group list-group-flush">
                    {/* List Group Item Start */}
                    <li className="list-group-item">
                      <div className="document">
                        <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
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
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                          {/* Alternate :: External File link */}
                          {/* <img class="injectable hw-24" src="./../../assetss/assetss/media/heroicons/outline/document.svg" alt=""> */}
                        </div>
                        <div className="document-body">
                          <h6 className="text-truncate">
                            <a
                              href="#"
                              className="text-reset"
                              title="effects-of-global-warming.docs"
                            >
                              Effects-of-global-warming.docs
                            </a>
                          </h6>
                          <ul className="list-inline small mb-0">
                            <li className="list-inline-item">
                              <span className="text-muted">79.2 KB</span>
                            </li>
                            <li className="list-inline-item">
                              <span className="text-muted text-uppercase">
                                docs
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="document-options ml-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
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
                                Download
                              </a>
                              <a className="dropdown-item" href="#">
                                Share
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* List Group Item End */}
                    {/* List Group Item Start */}
                    <li className="list-group-item">
                      <div className="document">
                        <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
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
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                          {/* Alternate :: External File link */}
                          {/* <img class="injectable hw-24" src="./../../assetss/assetss/media/icons/excel-file.svg" alt=""> */}
                        </div>
                        <div className="document-body">
                          <h6 className="text-truncate">
                            <a
                              href="#"
                              className="text-reset"
                              title="global-warming-data-2020.xlxs"
                            >
                              Global-warming-data-2020.xlxs
                            </a>
                          </h6>
                          <ul className="list-inline small mb-0">
                            <li className="list-inline-item">
                              <span className="text-muted">79.2 KB</span>
                            </li>
                            <li className="list-inline-item">
                              <span className="text-muted text-uppercase">
                                xlxs
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="document-options ml-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
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
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                Share
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* List Group Item End */}
                    {/* List Group Item Start */}
                    <li className="list-group-item">
                      <div className="document">
                        <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
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
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                          {/* Alternate :: External File link */}
                          {/* <img class="injectable hw-24" src="./../../assetss/assetss/media/icons/powerpoint-file.svg" alt=""> */}
                        </div>
                        <div className="document-body">
                          <h6 className="text-truncate">
                            <a
                              href="#"
                              className="text-reset"
                              title="great-presentation-on global-warming-2020.ppt"
                            >
                              Great-presentation-on global-warming-2020.ppt
                            </a>
                          </h6>
                          <ul className="list-inline small mb-0">
                            <li className="list-inline-item">
                              <span className="text-muted">79.2 KB</span>
                            </li>
                            <li className="list-inline-item">
                              <span className="text-muted text-uppercase">
                                ppt
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="document-options ml-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
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
                                Download
                              </a>
                              <a className="dropdown-item" href="#">
                                Share
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* List Group Item End */}
                  </ul>
                  {/* List Group End */}
                </div>
              </div>
            </div>
            {/* Shared Files End */}
          </div>
          {/* Chat Info Body Start  */}
        </div>
      </div>
      {/* Chat Info End */}
    </div>
    {/* Chats Page End */}
    {/* Call Log Page Start */}
    
    {/* Call Log Page End */}
    {/* Friends Page Start */}
    
    {/* Friends Page End */}
    {/* Profile Settings Start */}
   
    {/* Profile Settings End */}
  </main>
</div>

    </div>
  )
}

export default Chatm2