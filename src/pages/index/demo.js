import Taro, {Component} from '@tarojs/taro'
import {Text, View} from '@tarojs/components'
import {BaseView} from "@com/demo";
import {go} from "@router/index";
import {rIndex} from "@router/conf";
import CounterStore from "@com/demo/CounterStore";

export default class Demo extends Component {
    constructor() {
        super(...arguments);
        Taro.setNavigationBarTitle({
            title: 'DEMO page'
        })
    }

    render() {
        console.log("page.demo.render()");
        return (
            <BaseView>
                <View>Hi, demo page,
                    <Text onClick={go(rIndex.index, {page: 1})}>
                        Back index page
                    </Text>
                    <CounterStore />
                </View>
            </BaseView>
        )
    }
}
