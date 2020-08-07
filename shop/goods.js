$(function(){

    //加载商品
    $.ajax({
        url:'./goods.json',
        type:'get',
        dataType:'json',
        success:function(data){
            $.each(data,function(index,ele){
                var gooda=`<div class="good">
                <img src="${ele.imgurl}">
                <p>${ele.price}</p>
                <h3>${ele.title}</h3>
                <div code="${ele.code}">加入购物车</div>
            </div>`
            $('.content1').append(gooda);
            })
        }
    });

    //点击加入购物车

    $('.content1').on('click','.good div',function(){
        var goodss=[];
        if(localStorage.getItem('good')){
            goodss=JSON.parse(localStorage.getItem('good'));
            console.log(goodss);
        }
        console.log(goodss);
        var code=$(this).attr('code');

        var flag=false;
        $.each(goodss,function(index,ele){
            if(ele.code===code){
                ele.num++;
                flag=true;
                return false;
            }
        })

        if(!flag){
            goodss.push({"code":code,"num":1});
        }
        localStorage.setItem('good',JSON.stringify(goodss))
        alert('加入成功');


    })





})