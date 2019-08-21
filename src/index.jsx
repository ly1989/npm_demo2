import React, { PureComponent } from 'react';
import styles from './index.less';
class Title extends React.Component {
constructor(props) {
  super(props);
  this.state = {
  }
}

goToPage(item){
  if (this.props.goToPage) {
    this.props.goToPage(item);
  }
}

getMenuContent(menuList){
  let text = '';
  if (menuList && menuList.length > 0) {
    text = menuList.map((item, i) => {
    let content = '';
    let length = menuList.length -1;
    if (i != length) {
      if (item.isClick) {
        content = (<span key={i} style={{cursor: 'pointer'}} onClick={this.goToPage.bind(this, item)} className={ styles.color}>{item.title} / </span>);
      } else {
        content = (<span key={i} className={ styles.color}>{item.title} / </span>);
      }
    }
    if (i == length) {
      content = (<span key={i} className={styles.lastColor}>{item.title}</span>);
    }
    return content;
  })
   return text;
}
}

render() {
  let { menuList } = this.props;
  return (
    <div className={styles.titleBox}>
      { this.getMenuContent(menuList) }
    </div>
  );
}
}
Title.defaultProps={
}
export default Title;

