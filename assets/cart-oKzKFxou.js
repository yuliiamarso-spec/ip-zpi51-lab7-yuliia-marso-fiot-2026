import{t as e}from"./modulepreload-polyfill-BDH-tZZC.js";/* empty css              */e((()=>{function e(){let e=[{id:1,name:`Product 1`,price:100},{id:2,name:`Product 2`,price:150},{id:3,name:`Product 3`,price:200},{id:4,name:`Product 4`,price:250},{id:5,name:`Product 5`,price:300},{id:6,name:`Product 6`,price:350}],t=[],n=1,r=document.querySelector(`.products`),i=document.querySelector(`.pagination`),a=document.querySelector(`.cart`);function o(){let t=(n-1)*4,i=t+4,a=e.slice(t,i),o=``;a.forEach(function(e){o+=`
                <div class="product-card">
                    <h3>${e.name}</h3>
                    <p>Ціна: ${e.price} грн</p>
                    <button type="button" data-id="${e.id}">
                        Додати в кошик
                    </button>
                </div>
            `}),r.innerHTML=o}function s(){let t=Math.ceil(e.length/4),n=``;for(let e=1;e<=t;e++)n+=`
                <button type="button" class="page-btn" data-page="${e}">
                    ${e}
                </button>
            `;i.innerHTML=n}function c(n){let r=e.find(function(e){return e.id===n});r&&(t.push(r),u())}function l(e){t.splice(e,1),u()}function u(){if(t.length===0){a.innerHTML=`<p>Кошик порожній</p>`;return}let e=``;t.forEach(function(t,n){e+=`
                <div class="cart-item">
                    <p>${t.name} — ${t.price} грн</p>
                    <button type="button" data-index="${n}">
                        Видалити
                    </button>
                </div>
            `}),a.innerHTML=e}r.addEventListener(`click`,function(e){e.target.tagName===`BUTTON`&&c(Number(e.target.dataset.id))}),i.addEventListener(`click`,function(e){e.target.tagName===`BUTTON`&&(n=Number(e.target.dataset.page),o(),s())}),a.addEventListener(`click`,function(e){e.target.tagName===`BUTTON`&&l(Number(e.target.dataset.index))}),o(),s(),u()}e()}))();