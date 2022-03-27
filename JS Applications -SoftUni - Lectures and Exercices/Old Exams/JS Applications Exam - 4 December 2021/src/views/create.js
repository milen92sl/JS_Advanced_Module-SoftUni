import { createAlbum } from '../api/data.js';
import {html} from '../lib.js'

const createTemplate = (onSubmit) => html`
<!--Create Page-->
        <section class="createPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Add Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" placeholder="Album name">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" placeholder="Price">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" placeholder="Description"></textarea>

                        <button class="add-album" type="submit">Add New Album</button>
                    </div>
                </fieldset>
            </form>
        </section>`

export async function createPage(ctx){
    ctx.render(createTemplate(onSubmit))
    
    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const name= formData.get('name')
        const imgUrl= formData.get('imgUrl')
        const priceInput= formData.get('price')
        const releaseDate= formData.get('releaseDate')
        const artist= formData.get('artist')
        const genre= formData.get('genre')
        const description= formData.get('description')

        if(name == '' || imgUrl == '' || priceInput == '' || 
        releaseDate == '' || artist == '' || description == '' || genre == ''){
            return alert('Pleasse fill all fields')
        } if(isNaN(Number(priceInput))){
            return alert('Price should be number')
        }
        
        await createAlbum( {
            name,
            imgUrl,
            price: Number(priceInput).toFixed(2),
            releaseDate,
            artist,
            genre,
            description
        })
       
       ctx.page.redirect('/catalog')
    }
}