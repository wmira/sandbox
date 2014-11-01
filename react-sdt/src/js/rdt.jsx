/** @jsx React.DOM */
var React = require('react');

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
        console.log(this.props.config);
        return null;
    },

    render: function() {
        var config = this.props.config;
        return (
            <table>
                { renderColumns(config) }
            </table>
        )

    }
});


module.exports = RDT;