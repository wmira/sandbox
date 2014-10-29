/** @jsx React.DOM */
var React = require('react');
var SDTGrid = require("./sdtgrid");
console.log(SDTGrid);
alert("hey");
var grid = React.renderComponent(
    <SDTGrid />,
    document.getElementById("content")
);