import React from "react";

export default function asyncComponent(getComponent) {
  class AsyncComponent extends React.PureComponent {
    static Component = null;

    state = {
      Component: AsyncComponent.Component
    };

    async componentWillMount() {
      if (!this.state.Component) {
        const Component = await getComponent();
        AsyncComponent.Component = Component;
        this.setState(() => ({ Component }));
      }
    }

    render() {
      const { Component } = this.state;

      if (Component) {
        return <Component {...this.props} />;
      }

      return null;
    }
  }

  return AsyncComponent;
}
