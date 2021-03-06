import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Parallax = ({ className, small, style, filter, image, children }) => {
  let windowScrollTop = window.innerWidth >= 768 ? window.pageYOffset / 3 : 0;
  const [transform, setTransform] = useState(
    `translate3d(0,${windowScrollTop},0)`
  );

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });

  const resetTransform = () => {
    setTransform(`translate3d(0,${window.pageYOffset / 2}px,0)`);
  };

  console.log(filter, small, className);
  const parallaxClasses = classNames({
    parallax: true,
    filter: filter,
    small: small,
    [className]: className,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        transform: transform,
      }}
    >
      {children}
    </div>
  );
};

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  small: PropTypes.bool,
};

export default Parallax;
