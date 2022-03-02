import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(
  theme => ({
    root: {},
  }),
  { name: 'Rockets' }
)

const Rockets = props => {
  const classes = useStyles(props)

  return <main className={classes.root}>ROCKETS PAGE</main>
}

export default Rockets
