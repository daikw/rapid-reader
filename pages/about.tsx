import Button from "@material-ui/core/Button"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import createStyles from "@material-ui/core/styles/createStyles"
import withStyles from "@material-ui/core/styles/withStyles"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing.unit * 20,
      textAlign: "center",
    },
  })

function About(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Material-UI
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        about page
      </Typography>
      <Typography gutterBottom>
        <Link href="/">
          <a>Go to the main page</a>
        </Link>
      </Typography>
      <Button variant="contained" color="primary">
        Do nothing button
      </Button>
    </div>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
