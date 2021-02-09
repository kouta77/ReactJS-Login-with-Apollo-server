const GRAPTH_URL = process.env.REACT_APP_GRAPHQL_URL;

const getUser = usr => {
    let theQuery = `
    {
        allUsers{
          where:{
              email: ${usr}
          }
        }
      }
    `

    fetch(GRAPTH_URL,
    {
        method: 'POST',
        headers: {
            'content-type':'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({query: theQuery})
    }
    )
        .then(response => response.json())
        .then(data => console.log('data returned',data));
}

export default getUser;