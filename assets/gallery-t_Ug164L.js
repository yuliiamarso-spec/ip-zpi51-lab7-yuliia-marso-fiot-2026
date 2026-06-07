import{t as e}from"./modulepreload-polyfill-BDH-tZZC.js";/* empty css              */e((()=>{function e(){let e=[{preview:`https://picsum.photos/id/1015/300/200`,original:`https://picsum.photos/id/1015/1200/800`,description:`Mountain landscape`},{preview:`https://picsum.photos/id/1016/300/200`,original:`https://picsum.photos/id/1016/1200/800`,description:`River in the mountains`},{preview:`https://picsum.photos/id/1025/300/200`,original:`https://picsum.photos/id/1025/1200/800`,description:`Dog portrait`},{preview:`https://picsum.photos/id/1035/300/200`,original:`https://picsum.photos/id/1035/1200/800`,description:`Forest road`},{preview:`https://picsum.photos/id/1043/300/200`,original:`https://picsum.photos/id/1043/1200/800`,description:`Lake view`},{preview:`https://picsum.photos/id/1050/300/200`,original:`https://picsum.photos/id/1050/1200/800`,description:`City street`}],t=document.querySelector(`.gallery`);function n(){let n=``;e.forEach(function(e){n+=`
            <li class="gallery-item">
                <img 
                    class="gallery-image"
                    src="${e.preview}" 
                    data-original="${e.original}"
                    alt="${e.description}"
                >
            </li>
        `}),t.innerHTML=n}function r(e,t){basicLightbox.create(`
        <div class="modal-content">
            <img src="${e}" alt="${t}">
            <p>${t}</p>
        </div>
    `).show()}t.addEventListener(`click`,function(e){if(e.target.tagName!==`IMG`)return;let t=e.target.dataset.original,n=e.target.alt;console.log(t),r(t,n)}),n()}e()}))();