import { CssBaseline } from "@material-ui/core"
import { MuiThemeProvider } from "@material-ui/core/styles"
import withRedux from "next-redux-wrapper"
import App, { Container } from "next/app"
import React from "react"
import JssProvider from "react-jss/lib/JssProvider"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"
import getPageContext from "~/getPageContext"

// redux ===============================================
const reducer = (state = { foo: "" }, action) => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: action.payload }
    default:
      return state
  }
}

const makeStore = (initialState, _) => {
  return createStore(reducer, initialState, devToolsEnhancer({}))
}

// =====================================================
interface IAppProps {
  Component: React.Component
  pageProps: any
  store: any
}

class MyApp extends App<IAppProps> {
  public static async getInitialProps({ Component, ctx }) {
    ctx.store.dispatch({ type: "FOO", payload: "foo" })

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }
  public pageContext = null

  constructor(props) {
    super(props)

    this.pageContext = getPageContext()
  }

  public componentDidMount() {
    // SSR時のCSSを削除する
    // console.log(document.querySelector("#jss-server-side"))
    const jssStyles = document.querySelector("#jss-server-side")

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  public render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <Provider store={store}>
              <Component pageContext={this.pageContext} {...pageProps} />
            </Provider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)
