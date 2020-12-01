
function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    //var hora = data.getHours()
    var hora = 22;
    msg.innerHTML = `$(hora)`

    if (hora >= 0 && hora <= 12) {
        // Manhã
        img.src = 'https://www.reconnectwithnature.org/getmedia/9b7dc68e-0642-4b49-8ab3-8428995d4ae1/Morning-dew-Shutterstock.jpg.aspx'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASpotted_deer_grazing_under_the_tree_in_afternoon_sun.jpg&psig=AOvVaw1GHOcuhqlokkW56sSQo0QA&ust=1606949641575000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDI6Yzwre0CFQAAAAAdAAAAABAD'
    } else {
        img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.google%2Fproducts%2Fpixel%2Fmilky-way-season%2F&psig=AOvVaw2SF8Y3f36KKQKFGb6iOwvx&ust=1606949184976000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLix-q_ure0CFQAAAAAdAAAAABAQ'
    }


}
