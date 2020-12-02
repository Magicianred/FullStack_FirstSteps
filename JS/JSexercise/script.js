
function carregar(){
    var msg = window.document.getElementById('msg');

    var data = new Date();
    //var hora = data.getHours()
    var hora = 17;
    msg.innerHTML = `${hora}`

    if (hora >= 0 && hora <= 12) {
        // Manhã
        document.body.style.backgroundImage = 'url(https://www.reconnectwithnature.org/getmedia/9b7dc68e-0642-4b49-8ab3-8428995d4ae1/Morning-dew-Shutterstock.jpg.aspx)'
    } else if (hora >= 12 && hora <= 18){
        document.body.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/d/d9/Spotted_deer_grazing_under_the_tree_in_afternoon_sun.jpg)'
    } else {
        document.body.style.backgroundImage = 'url(https://amerisleep.com/blog/wp-content/uploads/2015/07/pexels-photo-813269.jpeg)'
    }
}
carregar();
