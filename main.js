var checklist = [
  {content: "starter list item", completed: false}
]

var listTmpl = {
  item: [
    '<div class="tab" data-idx="<%= idx %>">',
      '<input type="checkbox" name="circle">',
      // '<p><%= content %></p>',
      '<input type="text" name="edit" contentEditable="false" value="<%= content %>">',
      '<button class="edit">edit</button><button class = "delete">delete</button>',
    '</div>'
  ].join('')
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
  //use double click enable and edit
  //enter to disable text value
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
    content: input,
    completed: false
  }
}

//--------------------------------------------------->
$(document).ready (function(){
//--------------------------------------------------->

addAllItems(checklist);

$('form').on('submit', function (event) {
  event.preventDefault();
  var newPost = getItemFromDom();
    addItem(newPost);
    addAllItems(getList());
    $('input[name=getter]').val('');
});

$(document).on('click', 'input[type="checkbox"]', function(event) {
    var $this = $(this);
    // $this will contain a reference to the checkbox
    if ($this.is(':checked')) {
        var idx = $this.parent().data("idx");
        checklist[idx].completed = !checklist[idx].completed;
        $this.siblings().css('text-decoration', 'line-through');
        $this.siblings().css('color', '#D3D3D3');
    } else {
        var idx = $this.parent().data("idx");
        checklist[idx].completed = !checklist[idx].completed;
        $this.siblings().css('text-decoration', 'none');
        $this.siblings().css('color', '#000000');
    }
});

$('div').dblclick(function(event, idx){
  event.preventDefault();
  var $this = $(this).html();
  console.log($this);
  //function to change text
});

$('button.all').on('click', function(){
  event.preventDefault();
  addAllItems(checklist);
});

$('button.active').on('click', function(){
  event.preventDefault();
  checklist.forEach(function(item){
    if (item.completed === false){

    } else {

    }
  })
});

$('button.completed').on('click', function(){
  event.preventDefault();
  var idx = $(this).parent().data("idx");

});

$('button.clearComp').on('click', function(){
  event.preventDefault();
  console.log($(this));

});

//--------------------------------------------------->
})
