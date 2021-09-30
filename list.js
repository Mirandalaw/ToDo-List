
//button,input,list 요소를 id를 통해 가져옴
var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
//input에 할일을 적고, 입력 버튼을 누르면 list에 추가하는
//js코드
button.addEventListener('click',clickButton);
var cnt= 1;
function clickButton(){
    //click button이라는 함수를 클릭하면
    //li요소를 만들어 input데이터를 넣고 list에 추가하는 함수
    var temp = document.createElement('li');
    temp.setAttribute("class","list-group-item");
    temp.setAttribute("id","li"+cnt);
    temp.innerHTML=input.value;
    temp.innerHTML+="<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
    list.appendChild(temp);
    cnt++;
}
function remove(cnt){
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
}