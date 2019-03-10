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
import FlashCard from "~/components/layouts/flashcard"

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
    const text =
      "business,campaign,company,cost,deal,department,discount,information,job,leader,meeting,member,offer,office,order,plan,practice,price,raise,record,role,sale,service,share,account,bill,bonus,capital,career,cash,cent,challenge,charge,coin,debt,dollar,economy,estimate,fair,fee,firm,fund,goods,income,interview,labor,leadership,network,notice,penny,post,profit,project,salary,schedule,task,trade,value,wage,yen,agency,agent,announcement,appointment,background,budget,commercial,contract,credit,equipment,expense,guarantee,incentive,instruction,load,management,membership,payment,permission,progress,proposal,receipt,recommendation,regulation,signature,source,suggestion,survey,undertaking,venture,achievement,advertisement,asset,bid,boom,commerce,commission,construction,consumption,cooperation,corporation,currency,deflation,demonstration,deposit,developer,dime,discharge,distribution,dividend,earnings,employment,enterprise,establishment,euro,export,finance,headquarters,import,inflation,inquiry,investment,lease,loan,margin,monopoly,mortgage,negotiation,outlet,personnel,pool,presentation,privilege,procedure,promotion,property,proposition,recession,reduction,registration,representation,retail,retirement,revenue,reward,scope,supervision,supply,turnover,accomplishment,accounting,advertiser,agenda,alliance,allowance,assignment,assurance,banking,bond,builder,cancellation,counseling,dealing,deficit,disapproval,dismissal,distributor,feedback,innovation,invoice,marketing,marketplace,memorandum,motivation,overhead,overtime,partnership,policy,questionnaire,rental,retailer,seminar,shipment,specialty,sponsor,supplier,transaction,wholesale,broker,contractor,discourse,equity,estimation,expenditure,fishery,freight,inventory,layoff,merchandise,merger,planning,query,quota,renewal,resignation,resume,shareholder,subsidiary,supervisor,takeover,tariff,trademark,treasurer,vacancy,vendor,voucher,warranty,workplace,auditor,automation,backlog,bestseller,billboard,boardroom,bookkeeping,businessperson,buyout,conglomerate,consignment,consortium,consultancy,consulting,contraction,cutback,deadlock,dealership,deduction,default,designation,downsizing,e-commerce,flextime,franchise,logistics,niche,orientation,outlay,paperwork,paycheck,payday,payroll,paystub,premium,pricing,procurement,relocation,remuneration,restructuring,self-employment,specification,start-up,stockholder,syndicate,tally,turnaround,validity,valuation,videoconference,workflow,workforce,workload,workweek"
    const words = text.split(",")

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

        <FlashCard words={words} />
      </div>
    )
  }
}

export default withStyles(styles)(Index)
