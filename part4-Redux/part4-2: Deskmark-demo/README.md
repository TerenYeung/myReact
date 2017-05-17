## 搭建基于React+ Redux应用

### 原型图

### 页面结构

- 左侧
  - 创建项目按钮
    - 点击后，项目控制面板变成创建状态
  - 项目展示列表
    - 展示已经创建的项目
    - 点击后，项目控制面板变成编辑状态

- 右侧
  - 项目控制面板，包含编辑和创建状态
    - 编辑状态下，按钮包括返回和保存
    - 创建状态下，按钮包括取消和创建

### 组件结构

  - 展示组件
    - CreateBar
    - List
    - ListItem
  
  - 状态组件
    - Deskmark
    - ItemEditor
    - ItemShowLayer

view层

---

### data structure

  ```
    app
    
    {
      meta: {
        isEditing: false,
        selectedId: null,
      },
      items: [
        {
          id: uuid.v4()
          title: 'vue',
          content: 'learn vue',
          date: new Date().toLocaleDateString()
        },
      ]
    }
  ```

### actions

  ```
    CREATE_ITEM

    DELETE_ITEM

    EDIT_ITEM

    SELECT_ITEM

    SAVE_ITEM

    CANCEL_EDIT
  ```
### reducers

  ```
    CREATE_ITEM:
      Object.assign({}, state, {
        meta: {
          selectedId, null,
          isEditing: true
        }
      })

      ...
  ```

### storage


model层

---



### 开发思路

1. 整理action, 实现action creator

2. 设计store state, 实现reducer

3. 划分界面内容， 实现展示组件

4. 通过容器组件连接store和展示组件

