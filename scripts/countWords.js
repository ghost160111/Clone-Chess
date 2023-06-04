//function countChar() {
//    var is_probel = document.getElementById("is_probel");
//    var count_char = document.getElementById("count_char");
//    var count_char_textarea = document.getElementById("count_char_textarea");
//
//    if (is_probel.checked == false) {
//        count_char.value = `Осталось ${1200 - count_char_textarea.value.replace(/ *n*r*t*/g, "").length} символов`;
//    } else {
//        count_char.value = `Осталось ${1200 - count_char_textarea.value.length} символов`;
//    }
//}

function countChar() {
  let count_char = document.getElementById("count_char");
  let count_char_textarea = document.getElementById("count_char_textarea");

  count_char.value = `Осталось ${1200 - count_char_textarea.value.length} символов`;
}
