import React from 'react'

const DueTasks = ({messages=[]}) => {
    return (
        <div style={{flex: 1, padding:"20px"}}>
            DueTasks
            {messages.length}
        </div>
    )
}
export default DueTasks
