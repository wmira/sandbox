/** @jsx React.DOM */
var React = require('react');
var DataSource = require("./datasource");
var RDTRow = require("./row.jsx");

//FIXME move this to a component
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


var TABLE_CSS = {
    pure : {
        table : 'pure-table'
    }
}

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
        var tableStyle = TABLE_CSS[this.props.config.style];
        var config = this.props.config;
        console.log(this.ds);
        return (
            <table className={tableStyle['table']}>
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