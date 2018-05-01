import Link from 'next/link'
import MyLayout from '../components/MyLayout/MyLayout';
import MyShopList from '../components/MyShops/index';
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
export default class MainPage extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer);
    return { isServer }
  }
  constructor (props) {
    super(props)
    this.store = initStore(props.isServer)
  }

  componentDidMount(){
    if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null ){
      Router.push('/login')
    }
  }

  render () {
    return (
      <Provider store={this.store}>
        <MyLayout>
          <MyShopList />
        </MyLayout>
    </Provider> 
    )
  }
}
