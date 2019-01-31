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




//第7节:ES6中新增的数组知识