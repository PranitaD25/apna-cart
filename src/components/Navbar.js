import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg  bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Apna Cart&nbsp;
          <span className="badge bg-secondary">{this.props.productList.length}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
