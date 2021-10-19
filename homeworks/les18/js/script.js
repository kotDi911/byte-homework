//------------------------------------- Variant-1 -------------------------------------//

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const postXhr = new XMLHttpRequest();
postXhr.open('GET', `${BASE_URL}`);
postXhr.responseType = 'json';
postXhr.send();

const renderPosts = (post) => {
    const {title, body, id} = post;

    const contElem = document.createElement('div');
    const titleElem = document.createElement('h2');
    const bodyElem = document.createElement('h4');
    const buttonElem = document.createElement('button');
    const commentContainer = document.createElement('div');
    const btnAtr = buttonElem.dataset;

    contElem.classList.add('container_post');
    buttonElem.classList.add('button');

    titleElem.innerText = title;
    bodyElem.innerText = body;
    buttonElem.innerText = 'Show Comments';
    buttonElem.setAttribute('data-comments-shown', 'true');
    contElem.append(titleElem, bodyElem, commentContainer, buttonElem);
    document.body.append(contElem);

    const renderComment = (comments) => {
        comments.forEach((comment) => {
            const {body} = comment;
            const commentElem = document.createElement('p');
            commentElem.innerHTML = `${body} <hr>`;
            commentContainer.append(commentElem);
            commentContainer.style.display = (commentContainer.style.display === '') ? '' : 'none';
        });
        commentContainer.setAttribute('id', `${id}`)
    };

    buttonElem.addEventListener('click', (event) => {
        event.preventDefault();

        if (btnAtr.commentsShown === 'true') {
            const commentXhr = new XMLHttpRequest();
            commentXhr.open('GET', `${BASE_URL}/${id}/comments`);
            commentXhr.responseType = 'json';
            commentXhr.send();
            commentXhr.onload = () => {
                const {response: comments} = commentXhr;
                commentContainer.classList.add('container');
                btnAtr.commentsShown = 'false';
                buttonElem.innerText = 'Hide Comments';
                renderComment(comments);
            };
        } else {
            commentContainer.classList.remove('container');
            buttonElem.innerText = 'Show Comments';
            btnAtr.commentsShown = 'true';
            commentContainer.innerHTML = '';
        }
    });
};

postXhr.onload = () => {
    const {response: posts} = postXhr;
    posts.forEach((post) => renderPosts(post));
};

//------------------------------------- Variant-2 -------------------------------------//

// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
// fetch(`${BASE_URL}`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         data.forEach((post) => renderPosts(post));
//         console.log(data);
//     });
// const renderPosts = (post) => {
//     const {title, body, id} = post;
//
//     const contElem = document.createElement('div');
//     const titleElem = document.createElement('h2');
//     const bodyElem = document.createElement('h4');
//     const buttonElem = document.createElement('button');
//     const commentContainer = document.createElement('div');
//     const btnAtr = buttonElem.dataset;
//
//     contElem.classList.add('container_post');
//     buttonElem.classList.add('button');
//
//     titleElem.innerText = title;
//     bodyElem.innerText = body;
//     buttonElem.innerText = 'Show Comments';
//     buttonElem.setAttribute('data-comments-shown', 'true');
//     contElem.append(titleElem, bodyElem, commentContainer, buttonElem);
//     document.body.append(contElem);
//
//     buttonElem.addEventListener('click', (event) => {
//         event.preventDefault();
//
//         if (btnAtr.commentsShown === 'true') {
//             fetch(`${BASE_URL}/${id}/comments`)
//                 .then((response) => {
//                     return response.json();
//                 })
//                 .then((data) => {
//                     commentContainer.classList.add('container');
//                     btnAtr.commentsShown = 'false';
//                     buttonElem.innerText = 'Hide Comments';
//                     data.forEach((comment) => {
//                         const {body} = comment;
//                         const commentElem = document.createElement('p');
//                         commentElem.innerHTML = `${body} <hr>`;
//                         commentContainer.append(commentElem);
//                         commentContainer.style.display = (commentContainer.style.display === '') ? '' : 'none';
//                     });
//                     console.log(data);
//                 });
//         } else {
//             commentContainer.classList.remove('container');
//             buttonElem.innerText = 'Show Comments';
//             btnAtr.commentsShown = 'true';
//             commentContainer.innerHTML = '';
//         }
//     });
// };