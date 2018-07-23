const isLoggedIn = user => {
  let ret = '';
  user 
    ? (ret = [
        { name: 'sell', content: 'Sell', href: '/sell' },
        { name: 'mygold', content: 'My Gold', href: '/mygold' },
        { name: 'myitem', content: 'My Item', href: '/myitem' },
        { name: 'notification', content: 'Notification', href: '/notification' },
      ])
    : (ret = [{ name: 'myitem', content: 'My Item', href: '/myitem' }, { name: 'notification', content: 'Notification', href: '/notification' }]);

  return ret;
};

export default isLoggedIn;
