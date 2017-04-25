### Deskmark-demo

#### 项目结构

#### 项目开发流程

1. 画出程序Mockup图

2. 将Mockup图划分为不同的组件

- 主组件 vs  子组件

- 状态组件 vs 无状态组件

### 开发思路


#### 将应用拆分为不同的子组件，然后制作静态页面和设计数据结构

1. 开发一个主组件Deskmark，挂载到app节点；

2. Deskmark主组件由									状态组件

	- CreateBar创建文章子组件					无状态组件

	- List项目列表子组件							无状态组件
		- ListItem项目子组件						无状态组件

	- ItemEditor项目编辑子组件				状态组件

	- ItemShowLayer项目预览子组件     无状态组件
 

【注】
状态组件和无状态组件的界定

3. 数据结构设计

items -> 项目列表集合
item -> 项目对象

{
	items: [
		{
			id: '',    		//项目id
			title: ''  		//项目标题
			content: '', 	//项目内容
			time: '',			//创建时间
		}
	],
	selectId: null,
	editing: false
}

4. 组件交互设计

- 文章的CRUD操作

	- 创建文章
	- 删除文章
	- 编辑文章

- 右侧状态栏切换

	- 切换到编辑器状态
	- 切换到预览状态

---

### BootStrap的一些测试demo

[navbar](http://js.jirengu.com/rure/2/edit)

[list-group](http://js.jirengu.com/deqo/2/edit)

[float-clearfix](http://js.jirengu.com/teni/3/edit)
