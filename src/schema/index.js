export const dueTaskSchema = {
  title: "dueTask schema",
  description: "Database schema for dueTasks",
  version: 0,
  type: "object",
  properties: {
    id: {
      type: "string",
      primary: true,
    },
    message: {
      type: "string",
    },
    collectType : {
      type: "string",
    },
  },
};
