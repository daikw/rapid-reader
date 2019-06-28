import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import createStyles from "@material-ui/core/styles/createStyles"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"
import React from "react"

// Components
import DefaultLayout from "~/components/layouts/default"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing.unit * 20,
      textAlign: "center",
    },
  })

interface IState {
  open: boolean
}

class Index extends React.Component<WithStyles<typeof styles>, IState> {
  public state = {
    open: false,
  }

  public handleClose = () => {
    this.setState({
      open: false,
    })
  }

  public handleClick = () => {
    this.setState({
      open: true,
    })
  }

  public render() {
    const { classes } = this.props
    const { open } = this.state

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>
        <Typography gutterBottom>
          <Link href="/about">
            <a>Go to the about page</a>
          </Link>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
        >
          Super Secret Password
        </Button>

        <Button variant="contained" color="primary">
          <Link href="/dashboard">
            <a>Go to the dashboard</a>
          </Link>
        </Button>

        <DefaultLayout>
          <p>welcome to next.js!</p>
        </DefaultLayout>
      </div>
    )
  }
}

export default withStyles(styles)(Index)
