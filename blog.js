$('#button_upload').click((event) => {
    var title_input = $('#title_input').val();
    var content_input = $('#content_input').val();
    console.log(title_input, content_input);

    $('ul').append
        (`<li>
        <h3>${title_input}</h3>
        <p>${content_input}</p>
        </li>`);

    let path = 'posts';
    let dataToSave = {
        title: title_input,
        text: content_input
    };

    fb.ref(path).push(dataToSave);

    function Refresh() {
        window.parent.location = window.parent.location.href;
    }

})


fb.ref("posts").once('value').then(data => {
    data.forEach(element => {
        $('ul').append(`
        <li>
          <h3>${element.child('title').val()}</h3>
          <p>${element.child('text').val()}</p>
        </li>`)
    })

});

function Refresh() {
    window.parent.location = window.parent.location.href;
}