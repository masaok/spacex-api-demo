import makeStyles from '@material-ui/core/styles/makeStyles'

import { gql, useQuery } from '@apollo/client'

const GET_CEO = gql`
  query GetCEO {
    company {
      ceo
    }
    roadster {
      apoapsis_au
    }
  }
`

const useStyles = makeStyles(
  theme => ({
    root: {},
  }),
  { name: 'CEO' }
)

const CEO = props => {
  const classes = useStyles(props)

  const { loading, error, data } = useQuery(GET_CEO)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log('data', data)

  return <main className={classes.root}>CEO: {data.company.ceo}</main>
}

export default CEO
