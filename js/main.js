// ** Handlers
function menuToggleHandler()
{
    let currentState = document.getElementById('menu-mb').style.display;
    if(currentState === '' || currentState === 'none')
    {
        document.getElementById('menu-mb').style.display = 'flex';
    }
    else
    {
        document.getElementById('menu-mb').style.display = 'none';
    }
}

document.getElementById('menu-btn').addEventListener('click',menuToggleHandler)