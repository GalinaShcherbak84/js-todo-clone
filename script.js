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
        // aggiunta alla lista
        list.append(item);
    }

});
