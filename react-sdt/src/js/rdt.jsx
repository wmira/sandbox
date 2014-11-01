/** @jsx React.DOM */
var React = require('react');
var DataSource = require("./datasource");
var RDTRow = require("./row.jsx");

var renderColumns = function(config) {
    var cols = config.cols;
    return(
        <thead>
            <tr> {
                cols.map(function(col) {
                    return <td>{col.header}</td>
                })
            }
            </tr>
        </thead>
    )
};


/**
 * Simple Data Table using react.
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
        var config = this.props.config;
        console.log(this.ds);
        return (
            <table>
                { renderColumns(config) }
                <tbody>
                { this.ds.data.map(function (data, idx) {
                    return <RDTRow data={data} config={config} />
                    })
                }
                </tbody>

            </table>
        )

    }
});


module.exports = RDT;