import React, { Fragment } from 'react';
import './Categories.css';

const Categories = () => {
    return ( 
        <Fragment>
            <main className="grid">
            <article className="articleContainer first">
                <div className="article_text" >
                <h1 >Get up to 50% off</h1>
                <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, pariatur dolorem. Quibusdam iusto dolore magnam nostrum amet tenetur. Molestias delectus, numquam iusto officia mollitia dignissimos culpa eligendi! Molestiae, neque inventore?</p>
                </div>
            </article>

            <article className="articleContainer min-50 rigthCategorie">
            <div className="article_text" >
                <h2 >New-season Textures</h2>
                <p >Collaboratively  markets via plug-and-play networks.</p>
            </div>
            </article>

            <article  className="articleContainer min-50 rigthCategorie">
            <div className="article_text">
                <h2 >Summer Weekends </h2>
                <p >Collaboratively  markets via plug-and-play networks.</p>
            </div>
            </article>            
            <article  className="articleContainer min-50 rigthCategorie">
            <div className="article_text">
                <h2>Just Arribed </h2>
                <p >Collaboratively  markets via plug-and-play networks.</p>
            </div>
            </article>
            <article className="articleContainer min-50 rigthCategorie">
                <div className="article_text">
                <h2 >Bestsellers </h2>
                <p>Collaboratively  markets via plug-and-play networks.</p>
            </div>
            </article>
         
            </main>
        </Fragment>
     );
}
 
export default Categories;