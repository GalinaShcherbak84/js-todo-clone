$(document).ready(function(){

    // sorgente dati esterna
    var todoItems = [
        {
            text: 'Prendere il latte',
            completed: false,
        },
        {
            text: 'Fare benzina',
            completed: true,
        },
        {
            text: 'Chiamare il cliente',
            completed: false,
        },
        {
            text: 'Trovare l\'articolo',
            completed: true,
        },
    ];
        
    

    // references
    var list = $('.todos');
    var newInput = $('.add-todo');
    var template = $('#template li');

    // 1 popolazione todo list

    for(var i = 0; i < todoItems.length; i++){
        var todo = todoItems[i];

        // template
        var item = template.clone();
        item.find('.text').text(todo.text);
        // aggiungere la classe completed
        if(todo.completed == true){
            item.find('.text').addClass('completed');
        }

        // aggiunta alla lista
        list.append(item);
    }
    // 2 inserimento nuovo todo

    newInput.keyup(function(event){
        console.log(event.which);

        if(event.which === 13){

            //console.log('enter');

            var text = newInput.val().trim();
            if(text !== ''){
                console.log(text);
                
                // template
                var item  = template.clone();
                item.find('.text').text(text);

                // aggiunta alla lista
                list.append(item);

                // reset
                newInput.val('');
            }
        }
    });

    // 3 rimozione todo item

    // a
    /* list.find('li i').click(function(){
        $(this).parent().remove();
    }); */

    // b
    $('body').on('click', '.todos li i', function(){
        $(this).parent().remove();
    });

    // 4 Rendi todo completato / da fare
    $('body').on('click', '.todos li span', function(){
        $(this).toggleClass('completed');
    })
    

});
