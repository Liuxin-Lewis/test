$(function(){
    if(localStorage.getItem('good')){
        var goodss=JSON.parse(localStorage.getItem('good'));
        $.ajax({
            url:'./goods.json',
            type:'get',
            dataType:'json',
            success:function(datas){
                $.each(goodss,function(i,dom){
                $.each(datas,function(index,ele){
                    if(dom.code===ele.code){
                    var go=`<li><img src="${ele.imgurl}"><span class="s1">${ele.title}</span>
                    <span class="s2">${ele.price}</span>
                    <span class="s3">${dom.num}</span>
                    <i code="${dom.code}">删除</i>
             </li>`
             $('.list').append(go);
            }
                });
            });
            }
        });

        $('.list').on('click','i',function(){
            var code=$(this).attr('code');
            $.each(goodss,function(index,ele){
                if(ele.code===code){
                    goodss.splice(index,1);
                    console.log(goodss);
                    return false;
                }
            });

            if(goodss.length>0){
                localStorage.setItem('good',JSON.stringify(goodss));
            }else{
                localStorage.clear();
                var newLi = '<li style="line-height:80px; text-align:center; color: #999;">购物车暂无数据！</li>';
                $('.list').html(newLi);
            }

            $(this).parent().remove();
        })

    }else{
        var newLi = '<li style="line-height:80px; text-align:center; color: #999;">购物车暂无数据！</li>';
                $('.list').html(newLi);
    }

})