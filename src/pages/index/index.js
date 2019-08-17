import Taro, {Component} from '@tarojs/taro'
import {isH5, getEnv} from "@config";

import './index.styl'
import IndexBody from "./widget/indexBody";

export default class Index extends Component {
    constructor() {
        super(...arguments)
        console.log("page.index.constructor()")
        Taro.setNavigationBarTitle({
            title: 'DEMO index'
        })
    }

    config = {
        navigationBarTitleText: '首页'
    }

    async componentWillMount() {
        console.log("Page.index.componentWillMount()")
        console.log('isH5', isH5())
        console.log('eventName', getEnv())
    }

    componentDidMount() {
        console.log("Page.index.componentDidMount()")
    }

    componentWillUnmount() {
        // console.log()
    }

    componentDidShow() {
        console.log("Page.index.componentDidShow()")
    }

    componentDidHide() {
    }

    render() {
        console.log("page.index.render()")
        return (
          <IndexBody />
        )
    }
}
