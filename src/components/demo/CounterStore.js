import {Button, View} from "@tarojs/components";
import PropTypes from "prop-types";
import {addCount, minusCount, setCount, useDemoStore} from "../../store";

function CounterStore({initialCount}) {
    const { count } = useDemoStore()
    return (
        <View>
            Count: {count}
            <View className='at-row'>
                <View className='at-col'>
                    <Button onClick={() => setCount(initialCount)}>Reset</Button>
                </View>
                <View className='at-col'>
                    <Button onClick={() => addCount()}>+</Button>
                </View>
                <View className='at-col'>
                    <Button onClick={() => minusCount()}>-</Button>
                </View>
            </View>
        </View>
    );
}

CounterStore.propTypes = {
    initialCount: PropTypes.number,
};

CounterStore.defaultProps = {
    initialCount: 20
}

export default CounterStore
