import {useState} from "@tarojs/taro";
import {Button, View} from "@tarojs/components";

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
        <View>
            Count: {count}
            <View className='at-row'>
                <View className='at-col'>
                    <Button onClick={() => setCount(initialCount)}>Reset</Button>
                </View>
                <View className='at-col'>
                    <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
                </View>
                <View className='at-col'>
                    <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
                </View>
            </View>
        </View>
    );
}

Counter.defaultProps = {
    initialCount: 20
}

export default Counter
