
'use strict';
var React = require("react");

var RDT = require("./rdt.jsx");



var data = [
    {firstname: 'Warren', lastname: 'Mira'},
    {firstname: 'James',  lastname: 'Rocco'},
    {firstname: 'Efren',  lastname: 'Santa Maria'}
];
var datasource = {
    index: ['id'],
    data: data
};

var config = {
    style : 'pure',
    cols : [
        { path: "firstname" , header: "First Name"  },
        { path: "lastname", header: "Last Name"}
    ]
};

React.render(
    React.createElement(RDT, {
        config : config,
        datasource: datasource
    } ),
    document.getElementById('content')
);

