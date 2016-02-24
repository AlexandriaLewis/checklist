var checklist = [
  {content: "hit up grocery store"},
  {content: "wash car"}
]

var listTmpl = {
  item: [
    "<div class='tab'>",
      "<input type='checkbox' name='circle'>",
      "<p><%= content %></p>",
    "</div>"
  ].join("")
}

function getList(){
  return checklist;
}

function addItem(newItem){
  checklist.push(newItem);
}

function clearItems(idx){
  //fill in
}

function editItem(idx){
  //use double click
}

function addItemToDom(content, templateStr, $target){
  var tmpl = _.template(templateStr);
  $target.append(tmpl(content));
}

function addAllItems(arr){
  $(".content").html("");
  _.each(getList(), function (el, idx){
    el.idx = idx;
    addItemToDom(el, listTmpl.item, $(".content"));
  })
}

function getItemFromDom (){
  var input = $("input[name='getter']").val();
  return {
    content: input
  }
}

$(document).ready (function(){
//--------------------------------------------------->

addAllItems(checklist);

$('form').on('submit', function (event) {
  event.preventDefault();
  var newPost = getItemFromDom();
  console.log(newPost);
    addItem(newPost);
    addAllItems(getList());
    $('input').val('');
});

//--------------------------------------------------->
})
