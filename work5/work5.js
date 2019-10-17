//9*9的控表，请自行编写这段代码
<<<<<<< HEAD
let str = '<table border="1">'
for(let i=10;i>0;--i){
    str += '<tr>'
    for(var j=10;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table1').innerHTML = str
=======
>>>>>>> 1a0f7d592c147d7681ffdba1e22a24e2da977ed4


//倒九九乘法空表
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str

<<<<<<< HEAD
//倒九九乘法表 ， 请自行编写这段代码
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>' + j + '*' + i + '=' + (j * i) + '</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table3').innerHTML = str
=======
//倒九九乘法表 ， 请自行编写这段代码
>>>>>>> 1a0f7d592c147d7681ffdba1e22a24e2da977ed4
