let showPassword = document.querySelectorAll('.registration-form__img');

showPassword.forEach(item =>
{
   item.addEventListener('click', password_show)
});


function password_show()
{
    var temp = document.querySelectorAll('.registration-form__password input');

    if (temp[0].type === "password") {

        temp[0].type = "text";
        document.querySelectorAll('.registration-form__img')[0].classList.add('registration-form__img--clossed');

    }
    else {
        temp[0].type = "password";
        document.querySelectorAll('.registration-form__img')[0].classList.remove('registration-form__img--clossed');
    }
}