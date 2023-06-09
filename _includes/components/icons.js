const { html } = require('~lib/common-tags')

/**
 * This file contains inline SVG elements which can be referenced elsewhere in
 * the templates. This file can be included at the end of the <body> tag.
 */
module.exports = function(eleventyConfig) {
  return function(params) {
    return html`
      <svg style="display:none">
        <symbol id="left-arrow-icon" viewBox="0 0 18 32">
          <path d="M23.1,11.1L21,9l-9,9l9,9l2.1-2.1L16.2,18L23.1,11.1z"/>
        </symbol>
        <symbol id="right-arrow-icon" viewBox="0 0 18 32">
          <path d="M12.9,11.1L15,9l9,9l-9,9l-2.1-2.1l6.9-6.9L12.9,11.1z"/>
        </symbol>
        <symbol id="search-icon" viewBox="0 0 32 32">
          <path d="M18.6,16.4h-1.2L17,16c1.5-1.7,2.3-3.9,2.3-6.3C19.3,4.3,15,0,9.7,0S0,4.3,0,9.7s4.3,9.7,9.7,9.7c2.4,0,4.6-0.9,6.3-2.3
        l0.4,0.4v1.2l7.4,7.4l2.2-2.2L18.6,16.4z M9.7,16.4C6,16.4,3,13.4,3,9.7S6,3,9.7,3s6.7,3,6.7,6.7S13.4,16.4,9.7,16.4z"/>
        </symbol>
        <symbol id="nav-icon" viewBox="0 0 32 32">
          <path d="M0,6.7h24.9V3.1H0V6.7z M0,13.8h24.9v-3.6H0V13.8z M0,20.9h24.9v-3.6H0V20.9z M28.4,20.9H32v-3.6h-3.6V20.9z M28.4,3.1v3.6
        H32V3.1H28.4z M28.4,13.8H32v-3.6h-3.6V13.8z"/>
        </symbol>
        <symbol id="arrow-forward-icon" viewBox="0 0 32 32">
          <path d="M16,5.3l-1.9,1.9l7.4,7.5H5.3v2.7h16.2l-7.4,7.5l1.9,1.9L26.7,16L16,5.3z"/>
        </symbol>
        <symbol id="home-icon" viewBox="0 0 32 32">
          <path d="M11,18V6l-8.5,6L11,18z M11.5,12l8.5,6V6L11.5,12z"/>
        </symbol>
        <symbol id="start-icon" viewBox="0 0 32 32">
          <path d="M8,5v14l11-7L8,5z"/>
        </symbol>
        <symbol id="down-arrow-icon" viewBox="0 0 32 32">
          <path d="M16.6,8.6L12,13.2L7.4,8.6L6,10l6,6l6-6L16.6,8.6z"/>
        </symbol>
        <symbol id="link-icon" viewBox="0 0 20 20">
          <path d="M3.3,16.7c-1.4-1.4-1.4-3.7,0-5.1l3.3-3.3L5,6.7L1.7,10c-2.3,2.3-2.3,6,0,8.3s6,2.3,8.3,0l3.3-3.3l-1.6-1.6l-3.3,3.3
            C7,18.1,4.7,18.1,3.3,16.7z M7.5,14.1l6.6-6.6l-1.7-1.7l-6.6,6.6L7.5,14.1z M10,1.7L6.7,5l1.6,1.6l3.3-3.3c1.4-1.4,3.7-1.4,5.1,0
            s1.4,3.7,0,5.1l-3.3,3.3l1.6,1.6l3.3-3.3c2.3-2.3,2.3-6,0-8.3S12.3-0.6,10,1.7z"/>
        </symbol>
        <symbol id="close-icon" viewBox="0 0 48 48">
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
        </symbol>
        <symbol id="download-icon" viewBox="0 0 32 32">
          <path d="M28.4,16v12.4H3.6V16H0v12.4c0,2,1.6,3.6,3.6,3.6h24.9c2,0,3.6-1.6,3.6-3.6V16H28.4z M17.8,17.2l4.6-4.6l2.5,2.5L16,24
            l-8.9-8.9l2.5-2.5l4.6,4.6V0h3.6V17.2z"/>
        </symbol>
        <symbol id="plus-icon" viewBox="0 0 16 16">
          <path
            d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
          <path
            d="M38.5 25H27V14c0-.553-.448-1-1-1s-1 .447-1 1v11H13.5c-.552 0-1 .447-1 1s.448 1 1 1H25v12c0 .553.448 1 1 1s1-.447 1-1V27h11.5c.552 0 1-.447 1-1s-.448-1-1-1z" />
        </symbol>
        <symbol id="fullscreen-icon" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        </symbol>
        <symbol id="add-circle-icon" viewBox="0 0 20 20">
          <path d="M9.25 14h1.5v-3.25H14v-1.5h-3.25V6h-1.5v3.25H6v1.5h3.25Zm.75 4q-1.646 0-3.104-.625-1.458-.625-2.552-1.719t-1.719-2.552Q2 11.646 2 10q0-1.667.625-3.115.625-1.447 1.719-2.541Q5.438 3.25 6.896 2.625T10 2q1.667 0 3.115.625 1.447.625 2.541 1.719 1.094 1.094 1.719 2.541Q18 8.333 18 10q0 1.646-.625 3.104-.625 1.458-1.719 2.552t-2.541 1.719Q11.667 18 10 18Zm0-1.5q2.708 0 4.604-1.896T16.5 10q0-2.708-1.896-4.604T10 3.5q-2.708 0-4.604 1.896T3.5 10q0 2.708 1.896 4.604T10 16.5Zm0-6.5Z"/>
        </symbol>
        <symbol id="rotation-icon" viewBox="0 0 24 24">
          <path d="M6.07426 4.68451L6.89234 4.68451L6.89234 6.34444C7.68861 5.65993 8.56396 5.09807 9.5184 4.65884C10.4728 4.21961 11.4791 4 12.5371 4C13.5952 4 14.6014 4.21106 15.5559 4.63317C16.5103 5.05528 17.3856 5.6086 18.1819 6.29311L18.1819 4.68451L19 4.68451L19 7.93593L15.8913 7.93593L15.8913 7.08029L17.7565 7.08029C16.9821 6.39578 16.1694 5.85388 15.3186 5.45458C14.4678 5.05528 13.5406 4.85564 12.5371 4.85564C11.5336 4.85564 10.6092 5.05528 9.76382 5.45458C8.91847 5.85388 8.10311 6.39578 7.31775 7.08029L9.18298 7.08029L9.18298 7.93593L6.07426 7.93593L6.07426 4.68451ZM6.09062 14.0794L7.8086 9.42473L9.05209 9.90389C9.24843 9.98375 9.42023 10.0978 9.56748 10.2461C9.71474 10.3945 9.81018 10.577 9.85381 10.7938L10.1156 12.1457L14.975 9.86966C15.3895 9.67572 15.8067 9.66431 16.2267 9.83544C16.6466 10.0066 16.9493 10.3089 17.1348 10.7424C17.3202 11.1759 17.3338 11.6123 17.1757 12.0515C17.0175 12.4908 16.7312 12.8073 16.3167 13.0013L13.7479 14.1992L13.9115 14.6099C13.9333 14.6555 13.9442 14.7069 13.9442 14.7639L13.9442 14.935L13.8461 17.7415C13.8352 18.0381 13.737 18.3005 13.5516 18.5287C13.3661 18.7569 13.1316 18.9109 12.848 18.9907L9.3466 19.9491C9.03027 20.0403 8.73031 20.009 8.4467 19.8549C8.1631 19.7009 7.95585 19.4699 7.82496 19.1619L6.12334 15.1575C6.04699 14.9864 6.00608 14.8067 6.00063 14.6184C5.99518 14.4302 6.02517 14.2505 6.09062 14.0794ZM6.97415 14.6099L8.83938 19.0079L12.848 17.9469L12.9953 14.4559L12.6189 13.6002L15.9076 12.0601C16.0931 11.9688 16.2185 11.8433 16.284 11.6836C16.3494 11.5239 16.3385 11.3471 16.2512 11.1531C16.164 10.9592 16.044 10.8308 15.8913 10.7681C15.7386 10.7053 15.5695 10.7196 15.3841 10.8109L9.41204 13.5831L8.88847 10.9478L8.38126 10.7595L6.97415 14.6099Z" />
        </symbol>
      </svg>
    `
  }
}
