import banner from '@/components/banner';
import Header from '@/components/header';

import data from '@/data';

const ProductManager = {
    async render() {
        // const data = await (await fetch('http://localhost:3001/products')).json();
        const { data } = await axios.get('http://localhost:3001/products');
        console.log(data);
        return /*html*/ `
            <div class="container">
                ${Header.render()}
                <div class="banner">
                    ${banner.render()}
                </div>
                <div class="news">
                    <a href="/product/add" data-navigo class="btn btn-primary">Add product</a>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá sản phẩm</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        ${data
                            .map(
                                (item, index) => /*html*/ `
                                    <tr>
                                        <td>${index + 1}</td>
                                        <td>${item.name}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button class="btn btn-danger btn-remove" data-id=${
                                                item.id
                                            }>Remove</button>
                                            <button class="btn btn-danger btn-update">Update</button>
                                        </td>
                                    </tr>`
                            )
                            .join('')}
                            
                        </tbody>
                    </table>
                </div>
                <footer></footer>
            </div>
            
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll('table .btn'); // nodeList=[btn]
        for (let btn of btns) {
            const id = btn.dataset.id;
            // event click
            btn.addEventListener('click', function () {
                // data.filter((item) => item.id !== id);
            });
        }
    },
};

export default ProductManager;
