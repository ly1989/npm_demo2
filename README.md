## Installation

```bash
npm install @rc/title --save
```

## Usage

```javascript
import React from 'react'
import Title from '../../src/index.jsx'

export default class Demo1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			menuList: [
				{title: '商品中心', path: '', isClick: false},
				{title: '类目管理', path: '', isClick: false}
			  ]
		}
	}
	//跳转地址
    goToPage() {
       console.log('跳转地址');
	}
	
	render() {
		
		return (
			<div style={{ width: '100%', height: '100%' ,padding: '150px'}}>
				<Title menuList = {this.state.menuList} goToPage={this.goToPage.bind(this)}></Title>
			</div>
		)
	}
}

```

## API
对于Title可以设置一些自定义属性，具体如下：
### menuList
| 属性 | 说明 | 类型 
| --- | --- | --- 
| title | 标题名称 | string 
| path | 跳转url | string 
| isClick | 是否有点击事件 | boolean 


### goToPage
| 属性 | 说明 | 类型 
| --- | --- | --- 
| goToPage | 跳转方法 | function

