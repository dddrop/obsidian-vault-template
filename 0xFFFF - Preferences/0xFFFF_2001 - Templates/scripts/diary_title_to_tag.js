function diary_title_to_tag(title) {
    var values = title.split('-');
    var year = values[0];
    var month = values[1];
    return year + '/' + month;
}
module.exports = diary_title_to_tag;