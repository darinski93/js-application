import { deleteById, getById } from "../api/data.js";
import { html, nothing, render } from "../lib.js";

const detailsTemplate = (product, hasUser, isOwner, onDelete) => html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${product.imageUrl} alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
            Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span>${product.description}</span>
            </div>
        </div>

        ${hasUser ? html`<div id="action-buttons">
                ${isOwner ? html`
                <a href="/edit/${product._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : html`
                <a href="" id="buy-btn">Buy</a>
                `}
            </div>
            ` : nothing}
        </div>
    </div>
</section>`


export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const product = await getById(id)

    const hasUser = Boolean(ctx.user)
    const isOwner = hasUser && ctx.user._id == product._ownerId;

    ctx.render(detailsTemplate(product, hasUser, isOwner, onDelete))

    async function onDelete() {
        const choice = confirm('Are you sure you  want to delete this product?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/')
        }
    }
}