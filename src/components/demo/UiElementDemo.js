import {RichText, View} from "@tarojs/components";
import {AtImagePicker, AtTabBar} from 'taro-ui'
import {useState} from "@tarojs/taro";

function UiElementDemo ({initFiles, onChangeFile, current, nodes}) {
    const [ files, setFiles ] = useState(initFiles)
    return (
        <View>
            <AtTabBar
                tabList={[
                    { title: '待办事项', text: 8 },
                    { title: '拍照' },
                    { title: '通讯录', dot: true }
                ]}
                current={current} />

            <AtImagePicker
                files={files}
                onChange={(files, operationType) => {
                    setFiles(files)
                    onChangeFile && onChangeFile(files, operationType)
                }}
            />

            <RichText nodes={nodes} />
        </View>
    )
}

UiElementDemo.defaultProps = {
    initFiles: [
        {url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',},
        {url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',}
        ],
    onChangeFile: () => {},
    current: 1,
    nodes: [{
        name: 'div',
        attrs: {
            class: 'div_class',
            style: 'line-height: 60px; color: red;'
        },
        children: [{
            type: 'text',
            text: 'Hello World!'
        }]
    }],
};

export default UiElementDemo
