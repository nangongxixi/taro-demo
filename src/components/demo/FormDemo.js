import {Input, View} from "@tarojs/components";
import {AtButton, AtForm} from "taro-ui";
import {dispatch} from "@util/dva";
import Taro from "@tarojs/taro";
import "./FormDemo.styl"

function FormDemo({nickname, submit}) {
    function submitHandle() {
        if (nickname === '') {
            Taro.showToast({
                title: '请输入昵称',
                icon: 'none',
            });
            return;
        }

        dispatch({
            type: 'user/submit',
            payload: {
                nickname,
            },
        });
    }

    return (
        <View>
            <AtForm className={"formDemo"}
                onSubmit={submit || submitHandle}
                >
                <Input
                    placeholder="称呼"
                    type="text"
                    id="nickname"
                    value={nickname}
                    onInput={(event) => {
                        const { value, id } = event.target;
                        dispatch({
                            type: 'user/save',
                            payload: { [id]: value },
                        })
                    }}
                />

                <AtButton formType='submit'>提交</AtButton>
            </AtForm>
        </View>
    );
}

FormDemo.defaultProps = {
    nickname: 'stcer demo'
}

export default FormDemo
