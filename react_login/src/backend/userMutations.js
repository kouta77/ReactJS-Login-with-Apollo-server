const GRAPTH_URL = "http://localhost:4000/graphql"//process.env.GRAPHQL_URL;

const registerUser = async (usr, callback) => {
  console.log('url', GRAPTH_URL)
    let theQuery = `
    mutation{
        createUser(data:{username:"${usr.username}", email:"${usr.email}",password:"${usr.password}"}){
          username
          email
        }
      }
    `

    const response = await fetch(GRAPTH_URL,
    {
        method: 'POST',
        headers: {
            'content-type':'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({query: theQuery})
    }
    );
    
    const data = await response.json();
    console.log(data);

    if(data.errors)
    callback(data.errors[0]);
    else
    callback(data);
        //.then(response => response.json())
        //.then(data => {console.log('data returned',data); callback(data)});///
}



const loginUser = async (usr,callback) => {
  console.log('url', GRAPTH_URL)
    let theQuery = `
      mutation{
        loginUser(email:"${usr.email}", password:"${usr.password}"){
          username
          email
        }
      }
    `
    
    const response = await fetch(GRAPTH_URL,
    {
        method: 'POST',
        headers: {
            'content-type':'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query: theQuery })
    }
    );
    const data = await response.json();
    console.log(data);
    if(data.errors.length > 0)
    callback(data.errors[0]);
    else
    callback(data.data.loginUser);
        //.then(response => response.json())
        //.then(data => {console.log('data returned',data); callback(data)});///
}


export {
    registerUser,
    loginUser
};