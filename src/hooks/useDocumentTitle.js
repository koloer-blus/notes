import * as React from 'react';

/**
 * 设置DocumentTitle
 * @param title {string}
 */
const useDocumentTitle = (title) => {
  React.useEffect(() => {
    document.title = title;
  }, [title])
}

export default useDocumentTitle;