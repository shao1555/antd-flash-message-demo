import React, { useState } from 'react';
import Layout, { FlashMessage } from '../Layout';
import { Button } from 'antd';
import { Redirect } from 'react-router';

const Page1 = () => {
  const [flashMessage, setFlashMessage] = useState<FlashMessage>();
  const [redirectPath, setRedirectPath] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  
  const simpleRedirect = () => {
    setRedirectPath('/page2');
  }
  const redirectWithMessage = () => {
    setFlashMessage({text: 'good!', noticeType: 'success', duration: 1});
    setRedirectPath('/page2');
  }
  const lazyRedirect = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setLoading(false);
    setFlashMessage({text: 'makes some error!', noticeType: 'error'});
    setRedirectPath('/page2');
  }
  return(
    <>
      { (redirectPath && !flashMessage) && <Redirect push={true} to={redirectPath} />}
      { (redirectPath && flashMessage) && 
        <Redirect
          push={true}
          to={{
           pathname: redirectPath,
           state: { flashMessage: flashMessage }
          }}
        />
      }
      <Layout>
        <h2>Page1</h2>
        <div>
          <Button onClick={simpleRedirect}>go to Page 2</Button>
          <Button onClick={redirectWithMessage}>go to Page 2 (with message)</Button>
          <Button onClick={lazyRedirect} loading={loading}>go to Page 2 (lazy)</Button>
        </div>
      </Layout>
    </>
  )
};

export default Page1;