# Taro demo

基于京东taro框架构建建材网多端小程序

1. 解决百度搜索问题
2. 引入react技术栈, 更专业构建前端项目
3. 多端共用代码及组件, 减少前端开发工作量

## React 基础知识

1. [React 哲学](https://zh-hans.reactjs.org/docs/thinking-in-react.html)
1. [状态提升](https://zh-hans.reactjs.org/docs/lifting-state-up.html)
1. [context](https://zh-hans.reactjs.org/docs/context.html)
1. [Hook](https://zh-hans.reactjs.org/docs/hooks-intro.html)
1. [高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)

其它知识点

1. [高阶组件](https://www.jianshu.com/p/0aae7d4d9bc1)
1. [高阶函数与柯里化](https://www.jianshu.com/p/4cf2f0ab201e)
1. [组件间抽象](https://www.jianshu.com/p/5853b5d9535f)
1. [es6 装饰器](https://www.jianshu.com/p/8745660de050)

## Taro框架

### [taro](https://taro.aotu.io/)
1. [最佳实践](https://nervjs.github.io/taro/docs/best-practice.html)
    1. [最佳实践 2](https://github.com/js-newbee/taro-best-practices)
    1. [组件 PropTypes 检查类型](https://nervjs.github.io/taro/docs/props.html)
    1. [设置组件 defaultProps](https://nervjs.github.io/taro/docs/best-practice.html)
    1. [预加载
](https://nervjs.github.io/taro/docs/optimized-practice.html)
2. [异步](https://nervjs.github.io/taro/docs/async-await.html)
3. [小程序代码混写](https://nervjs.github.io/taro/docs/hybrid.html)
1. 页面参数 this.$router.params
2. [生命周期](https://nervjs.github.io/taro/docs/tutorial.html#componentwillmount)
3. [错误处理](https://nervjs.github.io/taro/docs/spec-for-taro.html#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86)
1. connect(stat) => Input输入 => update() => dispatch(save())
1. [Hooks](https://nervjs.github.io/taro/docs/hooks.html)

### ui库

1. [官方组件库](https://taro-docs.jd.com/taro/docs/components-desc.html)
1. [官方ui库](https://taro-ui.jd.com/#/)
1. [colorUI库](http://taro-ext.jd.com/plugin/view/5d11c8d6799d01c46376e2d1)

### 状态管理

- [taro redux](https://taro-docs.jd.com/taro/docs/redux.html)
    - [redux](http://cn.redux.js.org/docs/basics/Store.html)
    - [example](https://github.com/js-newbee/taro-yanxuan)
- [laco](https://github.com/deamme/laco#readme)
    - [laco Example](http://taro-ext.jd.com/plugin/view/5cffb65d5067859c9f87b449)
- [DvaJs](https://dvajs.com/guide/develop-complex-spa.html#%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BDmodel) 
    - [理解Dva](https://dvajs.com/guide/fig-show.html#%E5%9B%BE%E8%A7%A3%E4%BA%8C-redux-%E8%A1%A8%E7%A4%BA%E6%B3%95)
    - [Dva Effect](https://dvajs.com/knowledgemap/#effect)
    - [Taro + dva start](https://www.forkjoin.org/2018/08-31-TaroDva/)
    - [Taro + dva start](https://juejin.im/post/5bb1766d5188255c3272cdd0)
    - [Taro + dva project](https://github.com/EasyTuan/taro-msparis)
    
## Api请求数据

请求接口封装:   
api: src/pages/xx/service/*

经典流程: 
1. 在onLoad, onShow请求数据
2. 请求结果调用this.setState(data)设置 
3. 触发重新渲染组件及子组件


## 注意事项

1. 不要在 state 与 props 上用同名的字段，因为这些被字段在微信小程序中都会挂在 data 上。
2. 组件的 constructor 与 render 提前调用, 会被调用两次
1. this.$router.params获取参数


## Todo 

1. 参数获取
1. 动态model加载, 解决性能问题
2. 会员授权信息
1. 解决全局授权弹窗, 通过一个全局基础组件是否可行

```
# src/components/Base.jsx
# src/pages/xx/index.js

render () {
    const { nickname } = this.props;
    return (
      <Base className='index'>
        <View>Hi, {nickname}</View>
        <Welcome name='stcer' />
        <Clock />
      </Base>
    )
  }
```

## 参考

* [Taro project](https://github.com/NervJS/awesome-taro)
* [Taro 物料库](http://taro-ext.jd.com/) 
* [Taro github](https://github.com/NervJS/taro) 

解决方案

1. [用户授权](https://juejin.im/post/5b97a762e51d450e9649a8fd)
2. [分享](https://juejin.im/post/5b99da5d5188255c6f1e084e)
3. [富文本](https://blog.csdn.net/weixin_42211816/article/details/84957296)
3. [富文本组件](http://taro-ext.jd.com/plugin/view/5cab4132615f500043f827fc)

