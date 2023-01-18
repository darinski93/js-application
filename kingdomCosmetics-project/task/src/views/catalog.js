import { getAll } from "../api/data.js"
import { html, render } from "../lib.js"



const catalogTemplate = (products) => html`<h2>Products</h2>

<section id="dashboard">
    ${products.length == 0 ? html`<div>
        <h2>No products yet.</h2>
    </div>` : products.map(productTemplate)}

</section>`

const productTemplate = (product) => html`
<div class="product">
    <img src=${product.imageUrl} alt="example1" />
    <p class="title">${product.name}</p>
    <p><strong>${product.price}:</strong><span class="price">23.99</span>$</p>
    <a class="details-btn" href="/catalog/${product._id}">Details</a>
</div>`



export async function showCatalogView(ctx) {
    const products = await getAll()
    ctx.render(catalogTemplate(products))
}