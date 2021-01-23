import React from "react";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <p className="navbar-brand">Total: {this.props.totalCounters}</p>
            </nav>
        )
    }
}

export default NavBar;
