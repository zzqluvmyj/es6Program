//第2节:三种变量声明的方式

// let a=1;//let具有块作用域
// const b=2;//const是常量,无法修改
// var d=3;
// for(let c=0;c<5;c++){
    
//     console.log(c);
// }



// //第3节:变量的解构赋值
//     //1.用于数组
// let [e,f,g]=[1,2,3];
// let [a,[b,c],d]=[1,[2,3],4];//左右的形式要统一,不统一解构会失败
//         //解构可以添加默认值
// let [h,i="sf"]=[8,undefined]
// console.log(h+i);
//     //2.用于对象
// let {x,y}={x:"gsgs",y:"gsfgsg"}
// console.log(x+y);
//         //如果在解构前声明了变量,解构会出现问题,必须要加()
// let foo;
// ({foo}={foo:9});
//     //3.用于字符串
// let[o,p,q,r]="opqr";
// console.log(o,p,q,r);



// //第4节:扩展运算符合rest运算符
// //就是有点类似于python的那个语法,扩展运算符是三个点
// function jspang(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// jspang(1,2,3);
// //扩展运算符的用法,这个相当于深拷贝
// let arr1=['gsg','tre']
// let arr2=[...arr1];
// arr2.push('453');
// console.log(arr1);
// console.log(arr2);
// //rest的写法也是三个点,它可以获取任意多个参数,必须放在参数列表最后面
// function jstest(f,q,...args){
//     for(let val of args){
//         console.log(val);
//     }
// }
// jstest(1,2,3,4,5,6,7,8);



// //第5节:字符串模板与字符串的方法
// //es5中字符串和变量拼接的时候比较麻烦,es6有了新的写法
// let name='tom';
// let str=`my name is ${name},我的周围用反引号包围`;
// console.log(str);
// //而且提供了对运算的支持
// console.log(`3+7=${3+7}`);
// let t='t';
// name.endsWith(t)
// console.log(`name.startsWith(t)  ${name.startsWith(t)}`);
// console.log(`name.endsWith(t) ${name.endsWith(t)}`);



// //第6节:ES6数字操作
// //2进制,0b开头
// let a=0b1111;
// //8进制,0o开头
// let b=0o777;
// //验证
// // console.log(Number.isFinite(43));
// // console.log(Number.isFinite(43/0));
// // console.log(Number.isNaN(NaN));
// //整数的取值范围
// // console.log(Math.pow(2,53)-1);
// // console.log(Number.Max_SAFE_INTEGER);
// // console.log(Number.MIN_SAFE_INTEGER);
// // console.log(Number.isSafeInteger(45345346547567568678));




//第7节:ES6中新增的数组知识(1)
//json转换为数组
// let  json = {
//     '0': 'jspang',
//     '1': '技术胖',
//     '2': '大胖逼逼叨',
//     length:3
// }
// let arr=Array.from(json);
// console.log(arr)
//将一堆文本或者变量转换为数组
// let arr1=Array.of(1,2,3,4);
// console.log(arr1);
// let arr2=Array.of('dsgg','sgsgfs','dsgsg');
// console.log(arr2);
// //find实例方法,需要传入一个方法
// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find((value,index,arr)=>value>5));



//第8节:es6中新增的数组知识(2)
// //fill方法,填充数组
// arr.fill('fs',1,6);
// console.log(arr);
//数组的遍历
// let arr=[1,2,3,4,5,6,7,8,9];
// for(let item of arr){
//     console.log(item);
// }
// for(let index of arr.keys()){
//     console.log(index);
// }
// for(let [index,value] of arr.entries()){
//     console.log(index,value);
// }
// //arr.entries()得到的是迭代器形式的数组
// let list=arr.entries();
// console.log(list.next().value);



//第9节:es6中的箭头函数和扩展
//es6中增加了默认值
// function add(a,b=3){
//     return a+b;
// }
// console.log(add(1));
// //主动抛出错误
// //throw new Error('dfsg');
// //获得需要传递的参数个数
// console.log(add.length);
// //箭头函数,lambda表达式
// let sub=(x,y)=>x-y;
// console.log(sub(8,5));



//第10节:es6中的函数和数组补漏
//对象的函数解构
// let json={
//     a:'js',
//     b:'gssg'
// }
// function fun({a,b='fsgs'}){
//     console.log(a,b);
// }
// fun(json);
// //数组的函数解构
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log( sum(...[1,2,3]));
//in的用法
//对象判断
// console.log('a' in json);
//数组判断,其实是判断索引所在的位置是否为空,并不是判断数组中是否有该值,和python不同
// arr=[,,,,,];
// console.log(0 in arr);
// arr[1]=3;
// arr[2]=4;
// console.log(2 in arr);
//数组的遍历方法
//foreach
// let arr=['dsfgsg','gsgsg','gsgsgfs'];
// arr.forEach((val,index)=>console.log(index,val));
// //filter
// arr.filter(x=>console.log(x));
// //some
// arr.some(x=>console.log(x));
// //map,替换的作用
// console.log(arr.map(x=>'web'));
// //join
// console.log(arr.join('|'));
// //toString
// console.log(arr.toString());




//第11节:es6中的对象
//对象赋值
// let name='fsgsgsg';
// let skill='web';
// let obj={name,skill};
// console.log(obj);
// //对象key值的构建
// let key='skill';
// var obj1={
//     key:'web'
// }
// var obj2={
//     [key]:'web'
// }
// console.log(obj1);
// console.log(obj2);
// //自定义对象方法
// var obj3={
//     add:(a,b)=>a+b
// }
// console.log(obj3.add(3,7));
//对象比较
// var obj1={name:'js'};
// var obj2={name:'js'};
// console.log(obj1.name===obj2.name);
// var obj1 = {name:'jspang'};
// var obj2 = {name:'jspang'};
// console.log(obj1.name === obj2.name);//true
// console.log(Object.is(obj1.name,obj2.name)); //true
// //对象合并
// let a={a:'gsgg'};
// let b={b:'gsgshgh'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);



//第12节:symbol在对象中的作用
//symbol是一个es6中增加的数据类型,表示独一无二的值,可以在构造函数中加入字符串参数,就算参数相同的两个symbol,它们也不全等
//不能用点号访问,只能用[]
//声明symbol
// var a=new String;
// var b=new Number;
// var c=new Boolean;
// var d=new Array;
// var e=new Object;
// var f=Symbol();
// console.log(typeof(d));
// var g=Symbol('sgsg');
// console.log(g);
// console.log(g.toString());
//symbol在对象中的应用
// var js=Symbol();
// var obj={[js]:'gsgg'};
// console.log(obj[js]);
// obj[js]='web';
// console.log(obj[js]);
//symbol对象元素的保护作用
// var obj={name:'js',skill:'dsgsg'};
// let age=Symbol();
// obj[age]=18;
// for(let item in obj){
//     console.log(item);
//     console.log(obj[item]);
// }
// console.log(obj);
// console.log(age.toString());



//第13节:set和weakset数据结构
// let setArr=new Set([1,2,3,1]);
// console.log(setArr);
// //增删差,add,delete,has,for of,clear,size,forEach
// setArr.add(8);
// setArr.delete(1);
// console.log(`is has 1? ${setArr.has(1)}`);
// console.log(`is has 8? ${setArr.has(8)}`);
// for(let item of setArr){
//     console.log(item);
// }
// setArr.forEach((value)=>console.log(value));
// console.log(setArr.size);
// setArr.clear();
// console.log(setArr.size);
// //weakset是一些对象值的集合,并且每个对象值只能出现一次,只能存对象类型元素
// //有了弱引用的weakset,就不用担心内存泄露了
// //只有三个方法add,delete,has
// let weakObj=new WeakSet();
// let obj=[];
// let obj1=obj;
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);



//第14节:map数据结构
//ES6中的Map类型是一种存储着许多键值对的有序列表。
//其中最为重要的是：Map集合的键名和值支持任意类型的数据
//map的效率和灵活性比json更好
// let json={
//     name:'js',
//     skill:'web'
// }
// let map1=new Map();
// map1.set(1,2);
// map1.set(json,100);
// map1.set(['gsg',[]],['fsgsgsg',99]);
// map1.set([['gsg',[]],['fsgsgsg',99]]);
// console.log(map1);
// //map的操作,get,set,delete,size,clear,has
// console.log(map1.get(1));
// console.log(map1.has(json));
// console.log(map1.size);
// map1.clear();
// console.log(map1);



//第15节:用proxy进行预处理
//当我们在操作一个对象或者方法时会有几种动作，
//比如：在运行函数前初始化一些数据，在改变对象值后做一些善后处理。
//这些都算钩子函数，Proxy的存在就可以让我们给函数加上这样的钩子函数，你也可以理解为在执行方法前预处理一些代码。
//你可以简单的理解为他是函数或者对象的生命周期。
//声明Proxy基本形式new Proxy（{},{}）;
// var pro=new Proxy(
//     {
//         add:(val)=>{
//             return val+10;
//         },
//         name:'I am js'
//     },{
//         get:(target,key,property)=>{
//             console.log('come in get');
//             return target[key];
//         }
//     }
// );
// console.log(pro.name);
// get属性

// get属性是在你得到某对象属性值时预处理的方法，他接受三个参数

// target：得到的目标值
// key：目标的key值，相当于对象的属性
// property：这个不太常用，用法还在研究中，还请大神指教。
// set属性

// set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。

// target:目标值。
// key：目标的Key值。
// value：要改变的值。
// receiver：改变前的原始值。

// var pro = new Proxy({
//     add: function (val) {
//         return val + 10;
//     },
//     name: 'I am Jspang'
// }, {
//         get:function(target,key){
//             console.log('come in Get');
//             return target[key];
//         },
//         set:function(target,key,value,receiver){
//             console.log(`    setting ${key} = ${value}`);
//             return target[key] = value;
//         }
//     });
// console.log(pro.name);
// pro.name='技术胖';
// console.log(pro.name);

// get = function () {
//     return 'I am JSPang';
// };
// var handler = {
//     apply(target, ctx, args) {
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// var pro = new Proxy(target, handler);
// console.log(pro());


//代理内容较多,如有必要,以后详细看
//https://blog.csdn.net/qq_28506819/article/details/71077788



//2019.2.1
//第16节:promise对象的使用
