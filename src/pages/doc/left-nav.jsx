import * as React from 'react';
import { marked } from 'marked';
import docStyle from './doc.module.less';

const LeftNav = (props) => {
  const { content } = props;
  const [navList, setNavList] = React.useState([]);
  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }

  React.useEffect(() => {
    const tempList = []
    const renderer = new marked.Renderer()
    renderer.heading = function (text, level) {
      return tempList.push({
        level,
        text
      });
    }
    marked(content, { renderer: renderer });
    setNavList(tempList.filter(nav => nav.level === 2));
  }, [content])
  return (
    <div
      className={docStyle['left-nav']}
      onClick={(e) => {
        scrollToAnchor(e.target.name);
      }}
    >
      {
        navList.map(nav => {
          return (
            <div
              key={nav.text}
              className={docStyle['nav-link']}
            >
              <a name={nav.text}>{nav.text}</a>
            </div>
          )
        })
      }
    </div>
  )
}

export default React.memo(LeftNav);