// var checklist = [
//   {content: "starter list item", completed: false}
// ]
//
// var listTmpl = {
//   item: [
//     '<div class="tab" data-idx="<%= idx %>">',
//       '<input type="checkbox" name="circle">',
//       '<p contentEditable="false"><%= content %></p>',
//       // '<input type="text" name="edit" contentEditable="false" value="<%= content %>">',
//       '<button class="edit">edit</button><button class = "delete">delete</button>',
//     '</div>'
//   ].join('')
// }
//
// var checklistPage = {
//     init: function(){},
//
//     styling: function(){},
//
//     events: function(){},
//
//     getList: function(existingList){return existingList;},
//
//     getTemplate: function(templateName){listTmpl[templateName];},
//
//     constructTmpl: function(templateName, data){
//       var tmpl = checklistPage.getTemplate(templateName);
//       var tmplFunc = _.template(tmpl);
//       return tmplFunc(data);
//     },
//
//     addToPage: function(templateName, dataArray, target){
//       var htmlStr = "";
//       dataArray.forEach(function(item){
//         htmlStr += checklistPage.constructTmpl(templateName, blog);
//       })
//       return $(target).html(htmlStr);
//     },
//
//     addItem: function(){
//       var itemsArray = checklistPage.getList(listItems);
//       var newItem = checklistPage.getItemSubmit();
//       itemsArray.push(newItem);
//     },
//
//     getItemSubmit: function(){
//       var itemsArray = checklistPage.getList(checklist);
//       var input = $("input[name='getter']").val();
//       return {
//         content: input,
//         completed: false
//       }
//     },
//
//     editPost: function(idx, newItem, items) {
//       var list = checklistPage.getList(items);
//       console.log(list);
//       var item = _.where(checklist,{idx: idx})[0];
//       console.log(item);
//       item.form = newItem;
//       return item;
//     },
//
//     deleteItem: function(idx, posts){
//       var items = checklistPage.getList(posts);
//       return delete(posts[idx]);
//     }
//   };
//
//   $(document).ready(function(){
// //--------------------------------------------------->
//
//
// //--------------------------------------------------->
//   });
