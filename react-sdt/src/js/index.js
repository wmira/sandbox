
'use strict';
var React = require("react");

var RDT = require("./rdt.jsx");

var config = {
    'cols' : [
        { path: "firstname" , header: "First Name"  },
        { path: "lastname", header: "Last Name"}
    ]
};

var data = [
    {firstname: 'Warren', lastname: 'Mira'},
    {firstname: 'James',  lastname: 'Rocco'},
    {firstname: 'Efren',  lastname: 'Santa Maria'}
]

React.render(
    React.createElement(RDT, {
        config : config,
        data: data
    } ),
    document.getElementById('content')
);

