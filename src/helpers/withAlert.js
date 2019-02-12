import React from "react";

// HOC pattern (high order component) https://reactjs.org/docs/higher-order-components.html
const withAlert = ({ event, message }) => {
  return Component => {
    // return a new component
    const AugmentedComponent = props => {
      const newProps = { ...props }; // always clone props if you need to mutate them
      newProps[event] = () => alert(message);
      return <Component {...newProps} />;
    };
    return AugmentedComponent;
  };
};

export default withAlert;
/**
 * usage example:
 * AugmentedComponent = withAlert({ event: 'onFocus', message: 'bummer' })(MyComponent);
 *
 * <AumgentedComponent>...
 */
