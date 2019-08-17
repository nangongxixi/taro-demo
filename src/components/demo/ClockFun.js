import {Text, View} from "@tarojs/components";
import { useEffect, useState } from '@tarojs/taro'

function ClockFun () {
    const [ nowDate, setNowDate ] = useState(new Date())
    useEffect(() => {
        let timer = setInterval(() => {
                setNowDate(new Date())
            },
            1000
        );
        return () => {
            clearInterval(timer)
        };
    });
    return (
        <View>
            <Text>现在的时间是 {nowDate.toLocaleTimeString()}.</Text>
        </View>
    )
}

export default ClockFun

