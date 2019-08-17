import {BaseView, Clock, ClockFun, Counter, DrawerDemo, FormDemo, Icons, Welcome} from "@com/demo";
import {Text, View} from "@tarojs/components";
import {go} from "@router/index";
import {rDemo} from "@router/conf";
import CounterStore from "@com/demo/CounterStore";
import {useUserStore} from "../../../store/user";
import {useDemoStore} from "../../../store";

function IndexBody() {
    const {nickname} = useUserStore();
    const {count} = useDemoStore()
    return (
        <BaseView>
            <Welcome name='world' />
            <Icons />
            <DrawerDemo />
            <View>
                Hi, {nickname}, {count}
            </View>

            <Clock />
            <ClockFun />

            <Counter initialCount={12} />
            <View onClick={go(rDemo.demoIndex, {id:2, nickname})}>GoDemoPage</View>

            <CounterStore />
            <FormDemo nickname={nickname} />
        </BaseView>
    )
}

export default IndexBody;
