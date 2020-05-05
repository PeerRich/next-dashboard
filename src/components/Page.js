import React, {forwardRef} from 'react';
//import PropTypes from 'prop-types';

const Page = forwardRef(({
                           title,
                           children,
                           ...rest
                         }, ref) => {
  return (
    <div
      ref={ref}
      {...rest}>
      {children}
    </div>
  );
});

/*Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};*/

export default Page;
