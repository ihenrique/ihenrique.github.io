jQuery( document ).ready( function(){
    const body = jQuery( 'body' );

    setTimeout( function() {
        body.addClass( '-anitrigged')
    }, 500);

});




// Functions

// el_on_screen( @element , @on_middle )
// Function return true if element visible on user screen
// parameter @element -- target element to check
// type: jQuery Element
// parameter @on_middle -- if true, check element is on middle of screen instead on screen
// type: bolean

function el_on_screen( el , middle ){
    var middle = middle ? middle : false;
    // Retorna se o elemento está na tela
    var screen_height = jQuery(window).height(),
        screen_top_pos = jQuery( window ).scrollTop()
        screen_bottom_pos = screen_top_pos + ( middle ? screen_height/2 : screen_height ),
        el_top_pos = el.offset().top,
        el_bottom_pos = el_top_pos + el.outerHeight();

    return (( screen_bottom_pos >= el_top_pos ) && ( screen_top_pos <= el_bottom_pos ));
};