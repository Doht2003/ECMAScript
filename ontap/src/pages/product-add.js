import banner from '@/components/banner';
import Header from '@/components/header';
import axios from 'axios';

const ProductAdd = {
    render() {
        return /*html*/ `
        <div class="container">
            ${Header.render()}
            <div class="banner">
                ${banner.render()}
            </div>
            <div class="news">
                <h1>Product Add Form</h1>
                <form id="formAdd">
                    <input type="text" id="product-name" />
                    <input type="number" id="product-price" />
                    <button>Submit</button>
                </form>
            </div>
            <footer></footer>
        </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector('#formAdd');
        formAdd.addEventListener('submit', function (e) {
            e.preventDefault();

            const product = {
                name: document.querySelector('#product-name').value,
                price: document.querySelector('#product-price').value,
            };
            // call api
            axios.post('http://localhost:3000/products', product);
            // fetch('http://localhost:3000/products', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(product),
            // }).then((data) => console.log(data));
        });
    },
};

export default ProductAdd;