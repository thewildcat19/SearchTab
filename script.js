const search = document.getElementById('searchbar');
search.value = "";
const butt = document.getElementById('buttsearch');
const body = document.querySelector('body');

butt.addEventListener("click", () => {
    window.open(encodeURI(`https://www.google.com/search?q=${search.value}`));
})


body.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && document.getElementById("searchbar").value != '') window.open(encodeURI(`https://www.google.com/search?q=${search.value}`));
})

document.querySelector('.add').onclick = () => {

    let ref = prompt('Enter site link');
    while (ref === '') {
        ref = prompt('Enter site link');
    }

    let nm = prompt('Enter name');
    while (nm === '') {
        nm = prompt('Enter name');
    }

    if (nm !== null || ref !== null) {
        document.querySelector('.links').insertAdjacentHTML("beforeend",
            `<div class="box" >
    <a href="${ref}">
        <div class="circle"><img src=" http://www.google.com/s2/favicons?sz=32&domain=${ref}" alt="">
        </div>
    </a>
    <span class="name">${nm}</span>
    </div>`)

        localStorage.setItem(localStorage.length, `<div class="box">
    <a href="${ref}">
        <div class="circle"><img src=" http://www.google.com/s2/favicons?sz=32&domain=${ref}" alt="">
        </div>
    </a>
    <span class="name">${nm}</span>
</div>`)
    }

}

window.onload = () => {
    /* document.querySelector('.links').insertAdjacentHTML("beforeend", `<div class="box" >
<a href="google.com">
    <div class="circle"><img
            src=" http://www.google.com/s2/favicons?sz=32&domain=" alt="">
    </div>
</a>
<span class="name">google</span>
 </div>`) */

    for (const key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        document.querySelector('.links').insertAdjacentHTML("beforeend", localStorage.getItem(key))
        /* console.log(localStorage.getItem(key)); */
    }

    document.querySelectorAll('.box').forEach(box => {
        box.onmouseover = () => {
            this.onkeyup = el => {
                if (el.key === 'Delete') {
                    box.remove(self);
                    for (const key in localStorage) {
                        if (!localStorage.hasOwnProperty(key)) {
                            continue;
                        }
                        console.log(box.outerHTML.split(' ').join('').split('amp;').join(''))
                        console.log(localStorage.getItem(key).split(' ').join(''))
                        if (box.outerHTML.split(' ').join('').split('amp;').join('') === localStorage.getItem(key).split(' ').join('')) { localStorage.removeItem(key) }
                    }
                }

            }
        }
    }
    )
}

/* localstorage elem debug
 for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(i))
} */


