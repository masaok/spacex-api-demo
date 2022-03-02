import { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import clsx from 'clsx'

import makeStyles from '@material-ui/core/styles/makeStyles'

import Logo from './Logo'

import CEO from './CEO'
import Events from './Events'

import Rockets from '../rockets/Rockets'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      height: '100vh',
      // gridTemplate: `
      //   "logo search" 9em
      //   "left-menu breadcrumb" 3em
      //   "left-menu content" auto
      //   / 15em auto
      // `,
      gridTemplate: `
        "logo search" 9em
        "left-menu content" auto
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

    contentItem: {
      gridArea: 'content',
    },
  }),
  { name: 'Dashboard' }
)

const COMPONENTS = {
  Events,
  Rockets,
}

const Dashboard = props => {
  const classes = useStyles(props)

  const location = useLocation()

  const [contentComponent, setContentComponent] = useState('Rockets')

  // const Content = 'Rockets'

  useEffect(() => {
    switch (location.pathname) {
      case '/rockets':
        setContentComponent('Rockets')
        break
      default:
        setContentComponent('Events')
    }
  })

  const Content = COMPONENTS[contentComponent]
  if (!Content) throw new Error(`Content Component missing: ${contentComponent}`)

  return (
    <main className={classes.root}>
      <div className={clsx(classes.gridItem, classes.logoItem)}>
        <Logo />
      </div>
      <div className={clsx(classes.gridItem, classes.searchItem)}>SEARCH</div>
      <div className={clsx(classes.gridItem, classes.leftMenuItem)}>LEFT MENU</div>
      {/* <div className={clsx(classes.gridItem, classes.breadcrumbItem)}>BREADCRUMB PATH</div> */}
      <div className={clsx(classes.gridItem, classes.contentItem)}>
        <Content />
        {/* {/* <CEO /> */}
        {/* <Events /> */}
      </div>
    </main>
  )
}

export default Dashboard
