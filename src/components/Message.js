// rfc
import React from 'react'

export default function Message(props) {
    let { info } = props;
    return (
        <h3>
            <span className="badge amber darken-2">{info}</span>
        </h3>
    )
}