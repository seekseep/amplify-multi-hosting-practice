/* Amplify Params - DO NOT EDIT
	API_AMPMULHOSPRAAPI_ACCOUNTTABLE_ARN
	API_AMPMULHOSPRAAPI_ACCOUNTTABLE_NAME
	API_AMPMULHOSPRAAPI_GRAPHQLAPIIDOUTPUT
	API_AMPMULHOSPRAAPI_LOGTABLE_ARN
	API_AMPMULHOSPRAAPI_LOGTABLE_NAME
	API_AMPMULHOSPRAAPI_TEAMTABLE_ARN
	API_AMPMULHOSPRAAPI_TEAMTABLE_NAME
	AUTH_AMPMULHOSPRAAUTH_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { v4: uuid } = require('uuid')
const {
  DynamoDB
} = require('@aws-sdk/client-dynamodb');
const {
  CognitoIdentityProviderClient, AdminCreateUserCommand
} = require('@aws-sdk/client-cognito-identity-provider');
const { marshall } = require('@aws-sdk/util-dynamodb');

/**
 * @param {import('@types/aws-lambda').AppSyncResolverEvent<
 *   import('./types').SetUpTeamArguments,
 *   import('./types').SetUpTeamResult,
 * >} event
 */
async function setUpTeam (event) {
  const owner = event.identity.username
  if (typeof owner != 'string') throw Error("Not Authenticated")

  const {
    name, description,
    loggerPassword: TemporaryPassword
  } = event.arguments.input
  const Username = `${uuid()}@amplifyapp.com`
  const UserPoolId = process.env.AUTH_AMPMULHOSPRAAUTH_USERPOOLID

  const cognitoIdentityProviderClient = new CognitoIdentityProviderClient()

  const createUserCommandOutput = await cognitoIdentityProviderClient.send(
    new AdminCreateUserCommand({
      UserPoolId, Username, TemporaryPassword,
      UserAttributes: [
        { Name: 'email', Value: email },
        { Name: 'email_verified', Value: 'true' },
      ],
      MessageAction: 'SUPPRESS',
    })
  )

  await client.send(new AdminSetUserPasswordCommand({
    UserPoolId, Username,
    Password : TemporaryPassword,
    Permanent: true
  }))

  const dynamoDB = new DynamoDB()

  const now = new Date().toISOString()
  const teamId = uuid()
  const loggerId = createUserCommandOutput.User.Username
  if (typeof loggerId != 'string') throw Error("Failed to create logger")
  await dynamoDB.putItem({
    TableName: process.env.API_AMPMULHOSPRAAPI_TEAMTABLE_NAME,
    Item: marshall({
      __typename: 'Team',
      id: teamId,
      owner,
      name,
      description,
      loggerId: loggerId,
      createdAt: now,
      updatedAt: now,
    })
  })

  return {
    id: teamId,
  }
}


/**
 * @type {
 *   import('@types/aws-lambda').AppSyncResolverHandler<
 *     import('./types').Arguments,
 *     import('./types').Results,
 *   >
 * }
 */
exports.handler = async (event) => {
  console.log('Event > ', JSON.stringify(event, null, 2))
  switch (event.fieldName) {
    case 'setUpTeam': return await setUpTeam(event)
    default: throw new Error(`Unknow Field ${event.fieldName}`)
  }
};
