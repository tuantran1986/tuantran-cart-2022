// rfc
import React from 'react'
import { useSelector } from 'react-redux'
import Message from '../components/Message'

export default function MessageContainer() {
    let info = useSelector(state => state.messageReducer);
    
    return (
        <Message info={info} />
    )
}
