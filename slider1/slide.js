$( document ).ready(function(){
    var pics_obj = {}
    pics_obj.set1 = ["https://i5.walmartimages.com/dfw/dce07b8c-ffa1/k2-_3d61c4e1-cb12-44a5-b1e6-c28bcfd9ec67.v1.jpg", "https://media.licdn.com/media/p/6/005/06c/2a3/025daab.png", "https://media.licdn.com/media/p/1/005/066/1cf/2d9efde.png"];

    pics_obj.set2 = ["http://0.gravatar.com/avatar/faff3f3142f9ad86b3ac849fc913266e?s=60&d=identicon&r=G","https://i.ytimg.com/i/emLkKnCT6ZMXMWhukoublg/mq1.jpg?v=d10795", "https://i.vimeocdn.com/portrait/7929070_60x60.jpg"];

    pics_obj.set3 = ["https://media.licdn.com/media/p/2/000/027/1ff/2480aba.png","https://i.vimeocdn.com/portrait/4975459_60x60.jpg","http://media-cache-ak0.pinimg.com/avatars/funthingsapp_1381016379_60.jpg"];

    pics_obj.set4 = ["http://1.gravatar.com/avatar/dccaae212cba72b7f096fc20f3b9b774?s=60&d=identicon&r=G","https://media.licdn.com/media/p/4/000/14f/088/24ce67a.png","https://media.licdn.com/media/p/1/000/03b/0b7/328440b.png"];

    $('.circle').click(function(){
        $('.circle').removeClass("clicked")
        $(this).addClass("clicked");
        var self = this;
        console.log(pics_obj.set4);
        $('#outer-box').children().each(function( index ) {
          var pic_array = "set"+self.id;
          $(this).children("img").attr("src",pics_obj[pic_array][index]);
        });
    });
});


