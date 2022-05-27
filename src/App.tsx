import React from 'react';
import Table from './components/Table/Table'
import users from "./components/Table/users.json";
import posts from "./components/Table/posts.json";
import comments from "./components/Table/todos.json";
import {IUser} from './components/Table/Types'
import './App.css';

function App() {
    //Data for tables headers and key json
    const usersColumns = React.useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "User Name",
                accessor: "username"
            },
        ],
        []
    );

    const postsColumns = React.useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Title",
                accessor: "title"
            },
            {
                Header: "Body",
                accessor: "body"
            }
        ],
        []
    );

    const postsComments = React.useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "Email",
                accessor: "email"
            }
        ],
        []
    );

    // Data for tables rows
    const dataUsers = React.useMemo(() => users, []);
    const dataPosts = React.useMemo(() => posts, []);
    const dataComments = React.useMemo(() => comments, []);

    return (
        <div className='App'>
            <Table columns={usersColumns} data={dataUsers}/>
            <Table columns={postsColumns} data={dataPosts}/>
            <Table columns={postsComments} data={dataComments}/>
        </div>

    );
}

export default App;
