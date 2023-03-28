import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const Card = ({
  textColor,
  btnColor,
  Title,
  paragraph,
  backgroundColor,
  btnTextColor,
  likeButton,
  shareButton,
  paragraphColor,
  ...props
}) => {
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <h2
          style={{
            color: textColor,
          }}
          {...props}
        >
          {Title}
        </h2>

        <p 
         style={{
            color: paragraphColor,
          }}
          {...props}
          >
            {paragraph}
            </p>

        <button
          className="btn"
          style={{
            backgroundColor: btnColor,
            color: btnTextColor,
          }}
          {...props}
        >
          {likeButton}
        </button>

        <button
          className="btn"
          style={{
            backgroundColor: btnColor,
            color: btnTextColor,
          }}
        >
          {shareButton}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  Title: PropTypes.string,
  paragraph: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  likeButton: PropTypes.string,
  shareButton: PropTypes.string,
};

// Button.defaultProps={
//   label: 'Button',
// }
