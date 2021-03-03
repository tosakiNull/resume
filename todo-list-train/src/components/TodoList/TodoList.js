import React from "react";
import Add from './Add';
import CountTab from './CountTab';
import List from './List';

export default function TodoList() {
  return (
    <div className="todo-app">
      <h1>TodoList</h1>
      <CountTab />
      <Add />
      <List />
    </div>
  );
}
