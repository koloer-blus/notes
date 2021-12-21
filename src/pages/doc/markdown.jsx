import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import docStyle from './style/doc.module.less';
import "./style/md.less"

import routes from '@/route.config.json';

const MarkDown = (props) => {
  const { content } = props;

  return (
    <ReactMarkdown
      className={`md-view ${docStyle["md-docs"]}`}
      children={content || ''}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h2({ node, children, ...props }) {
          const hId = children.map(el => {
            if (typeof el === 'string') return el;
            return el.props.children.join('');
          }).join('');
          return <h2 id={hId} {...props}>{children}</h2>
        },
        img({ node, ...props }) {
          return <img className="picture" {...props}></img>
        },
        a({ node, children, href, ...props }) {
          if (href[0] === '.') {
            const res = routes.pages.find(page => {
              return decodeURI(page.filePath) === decodeURI(href)
            });
            if (res) {
              return <Link {...props} to={res.path} >{children}</Link>
            }
          }
          return <a {...props} href={href} target="_blank">{children}</a>
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '') ?? [];
          return !inline ? (
            <SyntaxHighlighter
              style={atelierDuneLight}
              language={match[1]}
              PreTag="div"
              className={`${className} block-code`}
              showLineNumbers
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
              <code className={`${className} line-code`} {...props}>
                {children}
              </code>
            )
        }
      }}
    />
  )
}

export default MarkDown;