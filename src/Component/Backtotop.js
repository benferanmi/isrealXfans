import React from "react";
import BackToTop from "react-back-to-top-button";

const Backtotop = () => {
  return (
    <div>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
      >
        <span><i><svg viewBox="64 64 896 896" focusable="false" data-icon="vertical-align-top" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"></path></svg></i></span>
      </BackToTop>
    </div>
  )
}

export default Backtotop