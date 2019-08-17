import {Text} from "@tarojs/components";
import PropTypes from 'prop-types';
import {useDemoStore} from "../../store";

function Welcome({name}) {
    const { count } = useDemoStore()
    return (
        <Text>Hello, {name}, -- {count}</Text>
    )
}

Welcome.propTypes = {
    name: PropTypes.string
};

Welcome.defaultProps = {
    name: ''
}

export default Welcome
