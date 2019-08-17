import {useState} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {AtButton, AtDrawer, AtIcon} from "taro-ui";

function DrawerDemo({onDrawerClose, initShow}) {
    const [show, setShow] = useState(initShow);
    return (
        <View>
            <AtDrawer
                width="300px"
                show={show}
                onClose={() => {
                    setShow(false)
                    onDrawerClose && onDrawerClose()
                }}
                mask>

                <View className='drawer-item'>优先展示items里的数据</View>
                <View className='drawer-item'>如果items没有数据就会展示children</View>
                <View className='drawer-item'>这是自定义内容 <AtIcon value='home' size='20' /></View>
                <View className='drawer-item'>这是自定义内容</View>

            </AtDrawer>
            <AtButton onClick={() => {setShow(true)}}>显示Drawer</AtButton>
        </View>
    );
}

DrawerDemo.defaultProps = {
    initShow: false
}

export default DrawerDemo
