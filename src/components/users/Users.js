import React from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';

const Users = ({ users, loading}) => {
    // state = {
    //     users: [
    //         {
    //             login: "mojombo",
    //             id: 1,
    //             avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //             html_url: "https://github.com/mojombo"
    //         },
    //         {
    //             login: "defunkt",
    //             id: 2,
    //             avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
    //             html_url: "https://github.com/defunkt"
    //         },
    //         {
    //             login: "pjhyett",
    //             id: 3,
    //             avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
    //             html_url: "https://github.com/pjhyett"
    //         }
    //     ]
    // }
    if(loading){
        return <Spinner />
    }
    else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <Useritem key={user.id} user={user}></Useritem>
                ))}
            </div>
        )
    }    
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}
