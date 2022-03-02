import clsx from 'clsx'

import makeStyles from '@material-ui/core/styles/makeStyles'

import { gql, useQuery } from '@apollo/client'

import { format, parseISO, isValid } from 'date-fns'

const GET_EVENT_HISTORIES = gql`
  query GetEventHistories($order: String, $historiesSort2: String) {
    histories(order: $order, sort: $historiesSort2) {
      title
      event_date_utc
    }
  }
`

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },

    row: {
      display: 'flex',
      flex: 1,
    },

    cell: {
      display: 'flex',
      flex: 1,
      padding: theme.spacing(1),
    },
  }),
  { name: 'Events' }
)

const Events = props => {
  const classes = useStyles(props)

  const { loading, error, data } = useQuery(GET_EVENT_HISTORIES, {
    order: 'desc',
    historiesSort2: 'event_date_utc',
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log('data', data)

  return (
    <main className={classes.root}>
      {data.histories.map((item, index) => {
        const parsed = parseISO(item.event_date_utc)
        const formatString = 'MM/dd/yyyy hh:mm:ss zzzz'
        const formatted = isValid(parsed) ? format(parsed, formatString) : '-'
        return (
          <div className={classes.row}>
            <div className={clsx(classes.cell)}>{formatted}</div>
            <div className={clsx(classes.cell)}>{item.event_date_utc}</div>
            <div className={clsx(classes.cell)}>{item.title}</div>
          </div>
        )
      })}
    </main>
  )
}

export default Events
