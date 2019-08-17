import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux';

import 'taro-ui/dist/style/index.scss'
import './app.styl'

import Index from './pages/index'

import {dvaApp} from "./models";
import {setGlobal, setShareUid} from "./config/global";
import {isEnvProduct, isH5} from "./config";

const store = dvaApp.getStore();

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (!isEnvProduct() && isH5())  {
  require('nerv-devtools')
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/index/demo',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentWillMount () {
    console.log("app.onLaunch()");
    let args = this.$router.params;
    if(args && args.query){
      setShareUid(args.query.shareUid);
      setGlobal('scene', args.query.scene)
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index store={store} />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
