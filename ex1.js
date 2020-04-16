$("#btn1").click(function () {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function (argument) {
        for (var i = 0; i < argument.length; i++) {
            console.log(argument[i]);
        }
    })
})

$("#btn2").click(function () {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function (argument) {
        for (var i = 0; i < argument.length; i++) {
            if (argument[i].id === 10) {
                console.log(argument[i]);
                
            } 
        }
    })
});
// $("#btn3").click(function () {
//     $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', function (argument) {
//         for (var i = 0; i < argument.length; i++) {
//             if (argument[i].id === 12) {
//                 console.log(argument[i]);
//             }
//         }
//      })
//  });
 $("#btn3").click(function () {
    $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12", function(data){
    console.log(data);
 })
})
function myFunction() {
    console.clear();
  }
  $("#btn5").click(function () { 
  $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?userID=2", function(data){
    console.log(data);
    })
  })
  $("#btn6").click(function () {
    $.post(" https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=8",{
        userId: 10,
        title: "New",
        body: "Lourem"
    }, function(data){
        console.log(data.id)
        })
    });

$("#btn7").click(function () {
  $.ajax({
	method: 'PUT',
	url: " https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=12",
	data: {
		userId: 1,
		title: "New Post",
		body: "New post added"
	},
	complete: function(response){
		console.log(response.responseJSON);
	}
	})
});