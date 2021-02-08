import React from 'react'
import { useRxQuery, useRxCollection } from 'rxdb-hooks';
import DueTasks from "../due-tasks"
import WorkSpaceMembers from "../workspace-members"

const Home = () => {
    const collection = useRxCollection('duetasks');
    const query = collection !== null && (collection || {}).find().sort({id: 1})
    const {result: messages, isFetching } = useRxQuery(query);

    return (
        <div style={{height: "100vh", width: "100vw", display: "flex"}}>
            {console.log(isFetching)}
            <WorkSpaceMembers messages={messages} style={{flex: 1}} />
            <DueTasks messages={messages} style={{flex: 1}} />
        </div>
    )
}
export default Home
