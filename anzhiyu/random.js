var posts=["2024/08/19/hello-world/","2024/08/19/Linux系统编程入门/","2024/08/19/01Linux系统编程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };