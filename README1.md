### 使用注意事项

#####  预加载时，游戏是在start之后、setPanel之前暂停的，所以开发时不要在GamePanel的onLoad、start方法中去写游戏逻辑（比如播放音频等）。
#####  需要使用定时器时，要用cocos里的schedule、scheduleOnce，不要使用setInterval、setTimeout。 



#####  操作先只改变数据，再发射事件改变ui
#####  数据还原画面
#####  同步操作

function setCookie(name,value) 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name +'='+ value; 
} 
setCookie('Admin-Token', 'eyJpdiI6InBNYlRMaHpCSUtocFFZTjM5VWRhdEE9P')
