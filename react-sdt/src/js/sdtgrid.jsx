/** @jsx React.DOM */
var React = require('react');

var SDTGrid = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}!</h1>;
    }
});

module.exports = SDTGrid;