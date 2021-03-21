import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { message } from 'antd';

type Props = {
  children: React.ReactNode;
}

export type StateProps = {
  flashMessage?: FlashMessage;
}

export type FlashMessage = {
  text: string;
  noticeType: 'info' | 'success' | 'error' | 'warning' | 'loading';
  duration?: number;
}

const MESSAGE_DURATION = 3;

const Layout = ({children}: Props) => {
  const location = useLocation<StateProps>();
  useEffect(() => {
    if (location?.state?.flashMessage) {
      message.open({
        content: location.state.flashMessage.text,
        type: location.state.flashMessage.noticeType,
        duration: location.state.flashMessage.duration || MESSAGE_DURATION
      });
      location.state.flashMessage = undefined;
    }
  }, [location])
  return (
    <>
      <h1>navigation</h1>
      <ul>
        <li>
          <Link to="/page1">Page 1</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
      </ul>
      <h1>content</h1>
      <div>{children}</div>
    </>
  );
}

export default Layout;