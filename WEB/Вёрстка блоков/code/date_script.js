function getDate()
{
    let currentDate = document.getElementById('title-form__date');
    if(currentDate)
    {
        let d = new Date();
        let month = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        let dateGet = d.getDate()+"&nbsp;"+ month[d.getMonth()]+"&nbsp;"+d.getFullYear();
        currentDate.innerHTML = dateGet;
    }
}

setTimeout('getDate()')
