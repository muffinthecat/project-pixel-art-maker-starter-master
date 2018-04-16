var height = $('#inputHeight');
var width = $('#inputWidth');
var table = $('#pixelCanvas');
var submit = $('#button');
var color = $('#colorPicker');
var row, col, flag, rgb, k = 0;


function makeGrid() {
    submit.on('click', function () {
        row = height.val();
        col = width.val();

        table.empty();
        for (let i = 0; i < row; i++) {
            table.append('<tr></tr>');
            for (let j = 0; j < col; j++) {
                table.find('tr').eq(i).append('<td></td>');
            }
        }
        $('td').css('background-color', '#fff');
    });
}

$(makeGrid());

table.on('click', 'td', function () {
    rgb = color.val();
    $(this).css('background-color', rgb);
});
