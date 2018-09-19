import React from 'react'



const Users = (props) => {
  // console.log('from users')
  console.log('PROPS: ', props);
  const formattedUsers = props.users.map( user => <SingleUser user={user} key={user.login.uuid}/>);
  
  return (
    <div>
      <h1>hello</h1>
      {formattedUsers}
    </div>
  );
};

const SingleUser = (props) => {
  const { picture, email, cell, gender, name } = props.user;
  const { title, first, last }                 = name;
  return (
    <div style={styles.user}>
      <img src={picture.medium } />
      <ul>
        <li>email  : { email }</li>
        <li>cell   : { cell }</li>
        <li>gender : { gender }</li>
        <li>name   : { title, first, last}</li>
      </ul>
    </div>
  );
}

const styles = {
  user: {
    display     : 'flex',
    alignItems  : 'center'
  }
};

export default Users;