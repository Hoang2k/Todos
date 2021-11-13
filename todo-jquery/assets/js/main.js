

var btnUpdate=$(".update-btn");
var  btnAdd=$(".btn-add")
$(document).on('click','.btn-add',function() {
  var input=$(this).siblings('.todo-input').val();
  var todoList=`
   <ul>
   <li class="todo-item">
   <div class="task-name">`+input+`</div>
       
   <a> <i class="fas fa-edit"></i></a> 
   <a ><i class="fas fa-trash-alt"></i></a>
   </li>
   </ul>
  `;
  
  if($.trim(input)==''){
    alert("Vui lòng nhập tên công việc");
  }
  else {
    $(this).parents('.content').find('#result').append(todoList);
  }
  $(this).siblings('.todo-input').val('');
});
//Edit

$(document).on('click','.fa-edit',function() {
  var listText= $(this).closest('.todo-item').find('.task-name').html();

  var input=$('.todo-input');
  input.val(listText);
  btnAdd.attr("display","none");
  //console.log(btnAdd);
  btnUpdate.attr("display","block");



})
// remove todo list script
$(document).on('click','.fa-trash-alt',function(){
  if(confirm("Bạn Có muốn xóa công việc này ! ")){
    $(this).closest('.todo-item').remove();
  }
  
 })
 
 //Mark ToDo
 $(document).on('click','.task-name',function(){
  $(this).toggleClass('done');
 });