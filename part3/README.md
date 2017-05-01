## Flux架构的基本思想

- view层进行UI交互，如点击添加todo事件

- 点击事件绑定对应事件回调
	- 回调函数为Action Creator
	- 通过flux的Dispatcher提供的dispatch接口触发对应的action,
	- action就是一个对象
		```	
			const TodoAction = {
			
				create(todo){
					AppDispatcher.dispatch({
						actionType: 'CREATE_TODO',
						todo,
					})
				}
			}
		```
- Store为应用的数据中心，包含所有的state、计算属性和其他接口；
	- 当action通过AppDispatcher.dispatch分发后，在Store中注册的对应action类型的回调函数会在Store进行数据处理
	- Store是唯一的数据处理中心
	- 数据在Store中处理完后，会发出一个自定义事件通知view数据发生了变化

- view层会在一开始（componentDidMount）就监听该自定义事件, 当Store发生变化时，this.setState会重新设置app状态实现视图重绘；

简单来讲：

	- view层的UI操作出发action
	- action发消息给store
	- store进行数据处理后发消息给view
	- view收到消息后重绘视图

	问题，为什么要发送两次消息？

	- 原来的UI操作
		点击事件后，数据与view进行耦合，比如：

		```
			$btn.on('click',()=>{
				$.get('abc.com?name=teren',(res)=>{
					$header.text(res.name)
					})
				})
		```

	- 现在flux架构下的UI操作
		点击事件后，所有的数据和数据处理统一集中到Store这个对象上；

		- 这个对象既监听action的类型，从而进行对应的数据处理
		- 在数据处理完后，有发出消息，通知view数据发生了变化
		- view在React中通过this.setState接口与Store发生联系；