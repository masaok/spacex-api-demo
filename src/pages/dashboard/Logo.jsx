import makeStyles from '@material-ui/core/styles/makeStyles'

// import { gql, useQuery } from '@apollo/client'

// const GET_CEO = gql`
//   query GetCEO {
//     company {
//       ceo
//     }
//     roadster {
//       apoapsis_au
//     }
//   }
// `

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },

    mainTitle: {
      color: 'white',
      fontSize: 40,
      fontFamily: ['Carter One', 'sans-serif'].join(','),
      textShadow: '1px 1px 5px #000, 1px 1px 5px #000',
      // marginTop: theme.spacing(2),
      // marginBottom: theme.spacing(2),
    },

    subTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      // textShadow: '3px 3px 4px #000',
      textTransform: 'uppercase',
      // WebkitTextStrokeColor: 'black',
      // WebkitTextStrokeWidth: '0.05em',
      textShadow: '1px 1px 3px #000, 1px 1px 3px #000',
    },
  }),
  { name: 'Logo' }
)

const Logo = props => {
  const classes = useStyles(props)

  // const { loading, error, data } = useQuery(GET_CEO)

  return (
    <main className={classes.root}>
      <div className={classes.mainTitle}>SpaceX</div>
      <div className={classes.subTitle}>Database</div>
    </main>
  )
}

export default Logo
