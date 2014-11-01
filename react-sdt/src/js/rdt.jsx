/** @jsx React.DOM */
var React = require('react');
var DataSource = require("./datasource");
var RDTRow = require("./row.jsx");
var RDTColumn = require("./column.jsx");


var TABLE_CSS = {
    pure : {
        table : 'pure-table pure-table-bordered'
    },
    bootstrap : {
        table : 'table table-bordered'
    },
    foundation : {
        table : ''
    }
}

/**
 * Simple Data Table using react.
 *
 *
 *  var datasource = {
 *       index: ['id'], // row index to use to get to a row other than index
 *       data: []
 *   };
 *
 *  var config = {
 *      style : 'pure',
 *       cols : [
 *           { key: "firstname" , header: "First Name"  }
        ]
    };
 *
 */
var RDT = React.createClass({

    getInitialState: function() {
        this.ds = new DataSource(this.props.datasource);
        return null;
    },


    /**
     * Add a data
     *
     */
    add : function(data) {

    },

    render: function() {
        var tableStyle = TABLE_CSS[this.props.config.style];
        var config = this.props.config;

        return (
            <table className={tableStyle['table']}>
                <RDTColumn config={config} />
                <tbody>
                { this.ds.data.map(function (data) {
                    return <RDTRow data={data} config={config} />
                    })
                }
                </tbody>

            </table>
        )

    }
});


module.exports = RDT;