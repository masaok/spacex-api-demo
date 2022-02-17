import clsx from 'clsx'

import makeStyles from '@material-ui/core/styles/makeStyles'

import CEO from './CEO'
import Logo from './Logo'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      height: '100vh',
      // gridTemplate: `
      //   "logo search" 9em
      //   "left-menu breadcrumb" 3em
      //   "left-menu filelist" auto
      //   / 15em auto
      // `,
      gridTemplate: `
        "logo search" 9em
        "left-menu filelist" auto
        / 15em auto
      `,
    },

    // Common to all Grid Items
    gridItem: {
      backgroundColor: '#CCC',
      border: '1px solid #FFF',
      padding: theme.spacing(1),
    },

    /**
     * Grid Items
     */
    logoItem: {
      display: 'flex',
      flex: 1,
      gridArea: 'logo',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      // borderBottom: '1px solid',
      // borderBottomColor: theme.palette.grey[300],
    },

    searchItem: {
      gridArea: 'search',
      // borderBottom: '1px solid',
      // borderBottomColor: theme.palette.grey[300],
    },

    pageTitleItem: {
      gridArea: 'page-title',
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      paddingLeft: theme.spacing(4),
    },

    leftMenuItem: {
      gridArea: 'left-menu',
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },

    breadcrumbItem: {
      gridArea: 'breadcrumb',
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
      // borderBottom: '1px solid',
      // borderBottomColor: theme.palette.grey[300],
    },

    fileListItem: {
      gridArea: 'filelist',
    },
  }),
  { name: 'Dashboard' }
)

const Dashboard = props => {
  const classes = useStyles(props)

  return (
    <main className={classes.root}>
      <div className={clsx(classes.gridItem, classes.logoItem)}>
        <Logo />
      </div>
      <div className={clsx(classes.gridItem, classes.searchItem)}>SEARCH</div>
      <div className={clsx(classes.gridItem, classes.leftMenuItem)}>LEFT MENU</div>
      {/* <div className={clsx(classes.gridItem, classes.breadcrumbItem)}>BREADCRUMB PATH</div> */}
      <div className={clsx(classes.gridItem, classes.fileListItem)}>
        <CEO />
      </div>
    </main>
  )
}

export default Dashboard
