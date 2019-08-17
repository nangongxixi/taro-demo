import {Component} from "@tarojs/taro";
import {Button, Text, View} from "@tarojs/components";
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import {connect} from "@tarojs/redux";

@connect(({user}) => ({
    ...user
}))
class BaseView extends Component {
    async componentWillMount() {
        console.log("Com.Base.componentWillMount()")
        this.props.dispatch({type: 'user/init'});
    }

    render() {
        console.log('Com.Base.render()')
        const {isBindPhone} = this.props.user;
        // eslint-disable-next-line react/react-in-jsx-scope

        return (
            <View>
                {this.props.children}

                <view>
                    <Text>Footer</Text>
                </view>

                <AtModal isOpened={!isBindPhone}>
                    <AtModalHeader>请授权</AtModalHeader>
                    <AtModalContent>
                        这里是正文内容，欢迎加入京东凹凸实验室
                        这里是正文内容，欢迎加入京东凹凸实验室
                        这里是正文内容，欢迎加入京东凹凸实验室
                    </AtModalContent>
                    <AtModalAction>
                        <Button openType="getPhoneNumber">确定</Button>
                    </AtModalAction>
                </AtModal>
            </View>
        )
    }
}

BaseView.defaultProps = {
    isOpened: false,
    user: {
        isBindPhone: true,
        isAuthBaseInfo: true,
    }
};

export default BaseView
