import React from "react";
import Obfuscate from 'react-obfuscate';

const GetInTouch = ({ heading, email }) => {
  return (
    <div id="getintouch">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        If you have any questions, please feel free to <Obfuscate email={doTheTrick(email)}>email</Obfuscate> me.
      </p>
    </div>
  );
};

const doTheTrick = (str) => {
  return str.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
}

export default GetInTouch;
