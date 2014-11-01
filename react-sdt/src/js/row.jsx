/** @jsx React.DOM */
var React = require('react');


/**
 * React Component as a row
 *
 */
var RDTRow = React.createClass({

    getInitialState: function() {
        return { data : this.props.data };
    },

    render: function() {

        var cols = this.props.config.cols;
        var data = this.state.data;

        return (
            <tr> {
                    cols.map(function (col) {
                        return <td>{data[col.key]}</td>
                    })
                }

            </tr>
        )

    }
});


module.exports = RDTRow;