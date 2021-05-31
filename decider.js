//checking if document is ready to work with jquery
$(document).ready(function() {
    var Food = [];
    
$('#submit').on('click', function(){
    
    var userInput = $('#food-input').val();
    //simple check if the textfield is empty, if not then add to the array
        if(userInput == ""){
            alert('input cannot be empty. Please type something.');
        }else{
            //adding input to the Food array
        Food.push(userInput);
        $('#food-input').val("");
        //console log just to check if it adds it correctly
        console.log(Food);
        //creating a variable of list item to manipulate it
        var item = $('.my-item');
        
        //creating the list item element in <ul> for each item in the array to show on page
        Food.forEach(function(e){
            //removing all items that were saved previously so we wont have copies
            item.remove();
            //creating new li elements as we add new stuff into the list
            var li = document.createElement('li');
            //adding class so we can identify those made on the go li elements
            li.classList.add("my-item");
            //applying the stored string elements to the inner text of each li element
                li.innerText = e;
                //simple check again if its working properly
            console.log(li);
            //and ofc adding li elements to the <ul> in html
            $('#food-list').append(li);
        });
        $(".my-item").on("click",function(){
            var selectedItem = $(this);
            //deleting stuff from the list, string elements from needed index and list items on clicking on them, as var selected item is
            //every <li> element with class "my-item" as writen above ^
            for(i=0;i<=Food.length;i++){
                if(Food[i] == selectedItem.text()){
                    Food.splice(i,1);
                    selectedItem.remove();
                }
            }
            
            
            
        });   
    }

});
$('#randomizer').on('click', function(){
    //picking random item from the array
    var item = Food[Math.floor(Math.random() * Food.length)];
    alert('Your random food for today will be: '+ item);
});


});
