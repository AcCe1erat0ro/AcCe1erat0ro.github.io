var posts=["2024/08/19/01Linux系统编程/","2024/08/20/Linux-Shell命令/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };