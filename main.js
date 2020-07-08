let listItems = [
];


function mainFunc() {
    $("#submit").click(function () {
        let item = $("#item").val();  //Referencing text box with id of item and getting whatever is entered into the text box
        listItems.push({name:item, completed:false});
        $("#item").val("");
        renderItems(listItems);   
    })

}

function renderItems(arr) {
    let template = [];
    for(let i =0; i< arr.length;i++){
        template.push(createTemplate(arr[i],i));
    }
    console.log(template);
    $("#list").html(template.join("")) ///render array of html list items as string to ul tag on html page

}

function createTemplate(item,i){
    let completed = item.completed ? "completed": "";
    return `<li data-index="${i}"> 
        <span class="${completed}">${item.name} </span>
        <button class="complete">Complete</button> 
        <button class="delete">Delete</button> 
    </li>`;
}

$("ul").on( "click", ".complete", function( event ) {
    event.preventDefault();
    let index =$(event.target).parent().data("index"); //Getting event target, referencing the parent element to access the data attribute (array index)
    listItems[index].completed = true;
    renderItems(listItems);
});

$("ul").on( "click", ".delete", function( event ) {
    event.preventDefault();
    let index =$(event.target).parent().data("index"); //Getting event target, referencing the parent element to access the data attribute (array index)
    listItems.splice(index,1);
    renderItems(listItems);
});

$(mainFunc);