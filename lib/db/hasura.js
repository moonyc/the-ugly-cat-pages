export async function insertStats(token, {faves, userId, videoId, watched} ) {
const operationsDoc = `
mutation insertStats($faves: Int!, $userId: String!, $videoId: String!, $watched: Boolean!) {
  insert_stats_one(object: {faves: $faves, userId: $userId, videoId: $videoId, watched: $watched}) {
    faves
    id
    userId
    videoId
    watched
  }
}
`

const response = fetchGraphQL(
  operationsDoc,
  "insertStats",
  {
    faves, 
    userId,
    videoId,
    watched
  },
  token
)

return response
}

export async function updateStats(token, { faves, userId, videoId, watched}) {
const operationsDoc = `
mutation UpdateStats( $faves: Int!, $userId: String!, $watched: Boolean!, $videoId: String! ) {
  update_stats( _set: {watched: $watched, faves: $faves}, where: {userId: {_eq: $userId}, videoId: {_eq: $videoId }}) {
    returning {
      faves
      userId
      videoId
      watched
    }
  }
}
`

const response = await fetchGraphQL(
  operationsDoc,
  "UpdateStats",
  {
    faves,
    userId,
    videoId,
    watched
  },
  token 
)

return response
}

export async function findVideoByUserId(token, userId, videoId) {
  const operationsDoc = `
  query findVideoByUserId( $userId: String!, $videoId: String!) {
    stats(where: {videoId: {_eq: $videoId}, userId: { _eq: $userId}}) {
      id
      userId
      videoId
      faves
      watched
    }
  }`

  const response = await fetchGraphQL(
    operationsDoc,
    "findVideoByUserId",
    {
      userId,
      videoId
    },
    token
  )
  
  return response?.data?.stats.length > 0;
}

export async function createNewUser(token, metadata) {
  const operationsDoc = `
  mutation createNewUser($issuer: String!, $email: String!, $publicAddress: String!) {
    insert_users(objects: {email: $email, issuer: $issuer, publicAddress: $publicAddress}) {
      returning {
        email
        id
        issuer
      }
    }
  }
  
  `
  const {issuer, email, publicAddress} = metadata;
  const response = await fetchGraphQL(
    operationsDoc,
    "createNewUser",
    {
      issuer,
      email,
      publicAddress
    },
    token
  )
  console.log({ response, issuer })
  return response;
}

export async function isNewUser(token, issuer) {
  const operationsDoc = `
  query isNewUser($issuer : String!) {
    users(where: {issuer: {_eq: $issuer}}) {
      email
      id
      issuer
    }
  }
`;

const response = await fetchGraphQL(
  operationsDoc, 
  "isNewUser", 
  { issuer }, 
  token)

console.log({response, issuer})
return response?.data?.users?.length === 0 // this returns a boolean 
}

async function fetchGraphQL(operationsDoc, operationName, variables, token) {
    const result = await fetch(
      process.env.NEXT_PUBLIC_HASURA_URL,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      });
  
    return await result.json();
  }
  