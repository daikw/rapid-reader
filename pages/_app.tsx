import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { MuiThemeProvider } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { CssBaseline } from '@material-ui/core';
import getPageContext from '~/getPageContext';


// redux ===============================================
const reducer = (state = {foo: ''}, action) => {
  switch (action.type) {
    case 'FOO':
      return {...state, foo: action.payload};
    default:
      return state
  }
};

const makeStore = (initialState, _) => {
  return createStore(
    reducer,
    initialState,
    devToolsEnhancer({})
  )
}

// =====================================================
interface AppProps {
  Component: React.Component
  pageProps: any
  store: any
}

class MyApp extends App<AppProps> {
  pageContext = null

  constructor(props) {
    super(props)

    this.pageContext = getPageContext()
  }
  
  static async getInitialProps({ Component, ctx }) {
    ctx.store.dispatch({type: 'FOO', payload: 'foo'})

    const pageProps =
      Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  componentDidMount() {
    // SSR時のCSSを削除する
    console.log(document.querySelector('#jss-server-side'))
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <JssProvider
          registry={ this.pageContext.sheetsRegistry }
          generateClassName={ this.pageContext.generateClassName }
        >
          <MuiThemeProvider
            theme={ this.pageContext.theme }
            sheetsManager={ this.pageContext.sheetsManager }
          >
            <CssBaseline />
            <Provider store={ store }>
              <Component pageContext={ this.pageContext } { ...pageProps } />
            </Provider>              
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)
