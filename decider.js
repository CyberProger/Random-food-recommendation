//checking if document is ready to work with jquery
$(document).ready(function() {
    var Food = [];
    
$('#submit').on('click', function(){
    //simple check if the textfield is empty, if not then add to the array
    var userInput = $('#food-input').val();
        if(userInput == ""){
            alert('input cannot be empty. Please type something.');
        }else{
        Food.push(userInput);
        $('#food-input').val("");
        console.log(Food);
        var item = $('.my-item');
        
        //creating the list item element in <ul> for each item in the array to show on page
        Food.forEach(function(e){
            //removing all items that were saved previously so we wont have copies
            item.remove();
            var elem = $('li');
            $('#food-list').remove(elem);
            var li = document.createElement('li');
            li.classList.add("my-item");
            
                li.innerText = e;
            console.log(li);
            $('#food-list').append(li);
        });
        $(".my-item").on("click",function(){
            var selectedItem = $(this);
            //console.log(selectedItem.html());
            
                //delete Food[selectedItem.text()];
                //well, it deletes items, but it leaves Empty spaces in the array and it takes index
            for(i=0;i<=Food.length;i++){
                if(Food[i] == selectedItem.text()){
                    Food.splice(i,1);
                    selectedItem.remove();
                }
            }
            
            
            
        });   
    }

});
$(".my-item").on("clicked",function(){});   
$('#randomizer').on('click', function(){
    //picking random item from the array
    var item = Food[Math.floor(Math.random() * Food.length)];
    alert('Your random food for today will be: '+ item);
});


});
