$('#button_upload').click((event) => {
    var title_input = $('#title_input').val();
    var content_input= $('#content_input').val();
    console.log (title_input, content_input);

    $('ul').append
        (`<li>
        <h3>${title_input}</h3>
        <p>${content_input}</p>
        </li>`);

    let path = 'posts/1';
    let dataToSave = {
        title: title_input,
        text: content_input
    };

    fb.ref('posts').once('posts/1').then(data => {
        let savedPosts = data.val();
      });
    
    fb.ref(path).set(dataToSave);

});

