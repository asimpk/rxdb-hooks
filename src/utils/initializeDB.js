import {
    createRxDatabase,
    addRxPlugin,
  } from 'rxdb';
import { dueTaskSchema } from "../schema";

addRxPlugin(require("pouchdb-adapter-idb"));
addRxPlugin(require('pouchdb-adapter-http'));
const syncURL = "http://localhost:5984/";
const dbName = "taskdb";
export const initializeDB = async () => {
  // create RxDB instance
  const db = await createRxDatabase({
    name: 'taskdb',
    adapter: "idb",
    password: "12345678",
    ignoreDuplicate: true,
  });
  db.waitForLeadership().then(() => {
    document.title = "♛ " + document.title;
  });
  // add a collection to our db
  const dueTasksCollection = await db.addCollections({
    duetasks: {
    schema: dueTaskSchema
    }
  });

  // maybe sync collection to a remote
  // ...
  
  const replicationState = dueTasksCollection.duetasks.sync({
    remote: syncURL + dbName + "/",
  });

  replicationState.change$.subscribe((change) => {
    console.dir(change);
  });
  
  return db;
};
