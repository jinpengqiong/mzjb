import MyLayout from '../components/MyLayout/MyLayout'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';

export default class MainPage extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
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
            <div>
              <h1 className="welcome-text">
                欢迎回到聚宝商城，有什么可以效劳的吗？
              </h1>
            </div>
            <style jsx>{`
              .welcome-text {
                color: purple;
              }
            `}</style>
      </MyLayout>
    </Provider> 
    )
  }
}
