import * as React from 'react';

import useDocumentTitle from 'hooks/useDocumentTitle'
import MarkDown from './markdown';
import LeftNav from './left-nav';
import mdData from '@/registry';
import docStyle from './style/doc.module.less';

const Doc = (props) => {
  const { pageKey } = props;
  const { title, content } = mdData[pageKey];
  useDocumentTitle(title || 'ReadME');

  return (
    <div
      className={docStyle['doc-page-layout']}
    >
      <LeftNav
        content={content}
      />
      <MarkDown
        title={title}
        content={content}
      />
    </div>
  )
};

export default Doc;