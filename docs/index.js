
document.addEventListener("DOMContentLoaded", () => {

    console.log('DOM LOADED')


    const cartBtn = document.querySelectorAll('.add-to-cart-btn');

    cartBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("BTN CLICKED")
            if (btn.classList.contains('added')) {
                console.log('REMOVED')
                btn.classList.remove('added');
                btn.classList.add('removed')
                btn.innerHTML = '+ Add to Cart'
            } else {
                console.log('ADDED')
                btn.classList.add('added');
                btn.innerHTML = 'Added to Cart'
            }
        })
    })
})