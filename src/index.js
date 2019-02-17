import User from './user';

window.onload = function () {


    const item1 = document.getElementById('item1');
    const weight1 = document.getElementById('weight_item1');
    item1.onmouseover = function () {
        if (item1.hasAttribute('selected')) {
            item1.classList.add('bc-p_hover');
            item1.classList.remove('bc-p');
            weight1.classList.add('bc-p_hover');
            weight1.classList.remove('bc-p');
        } else {
            item1.classList.add('bc-b_hover');
            item1.classList.remove('bc-b');
            weight1.classList.add('bc-b_hover');
            weight1.classList.remove('bc-b');
        }
    };
    item1.onmouseout = function () {
        if (item1.hasAttribute('selected')) {
            item1.classList.remove('bc-p_hover');
            item1.classList.add('bc-p');
            weight1.classList.remove('bc-p_hover');
            weight1.classList.add('bc-p');
        } else {
            item1.classList.remove('bc-b_hover');
            item1.classList.add('bc-b');
            weight1.classList.remove('bc-b_hover');
            weight1.classList.add('bc-b');
        }


    };
    item1.addEventListener('click', function () {
        if (item1.hasAttribute('selected')) {
            item1.removeAttribute('selected');
            item1.classList.remove('bc-p_hover');
            item1.classList.remove('bc-p');
            item1.classList.add('bc-b');
            weight1.classList.remove('bc-p_hover');
            weight1.classList.add('bc-p');
        } else {
            item1.setAttribute('selected', '');
            item1.classList.remove('bc-b_hover');
            item1.classList.remove('bc-b');
            weight1.classList.remove('bc-b_hover');
            weight1.classList.add('bc-p');
            item1.classList.add('bc-p');
        }


    });

    const item2 = document.getElementById('item2');
    const weight2 = document.getElementById('weight_item2');
    item2.onmouseover = function () {
        if (item2.hasAttribute('selected')) {
            item2.classList.add('bc-p_hover');
            item2.classList.remove('bc-p');
            weight2.classList.add('bc-p_hover');
            weight2.classList.remove('bc-p');
        } else {
            item2.classList.add('bc-b_hover');
            item2.classList.remove('bc-b');
            weight2.classList.add('bc-b_hover');
            weight2.classList.remove('bc-b');
        }
    };
    item2.onmouseout = function () {
        if (item2.hasAttribute('selected')) {
            item2.classList.remove('bc-p_hover');
            item2.classList.add('bc-p');
            weight2.classList.remove('bc-p_hover');
            weight2.classList.add('bc-p');
        } else {
            item2.classList.remove('bc-b_hover');
            item2.classList.add('bc-b');
            weight2.classList.remove('bc-b_hover');
            weight2.classList.add('bc-b');
        }


    };
    item2.addEventListener('click', function () {
        if (item2.hasAttribute('selected')) {
            item2.removeAttribute('selected');
            item2.classList.remove('bc-p_hover');
            item2.classList.remove('bc-p');
            item2.classList.add('bc-b');
            weight2.classList.remove('bc-p_hover');
            weight2.classList.add('bc-p');
        } else {
            item2.setAttribute('selected', '');
            item2.classList.remove('bc-b_hover');
            item2.classList.remove('bc-b');
            weight2.classList.remove('bc-b_hover');
            weight2.classList.add('bc-p');
            item2.classList.add('bc-p');
        }


    });

    const item3 = document.getElementById('item3');
    const weight3 = document.getElementById('weight_item3');
    item3.onmouseover = function () {
        if (item3.hasAttribute('selected')) {
            item3.classList.add('bc-p_hover');
            item3.classList.remove('bc-p');
            weight3.classList.add('bc-p_hover');
            weight3.classList.remove('bc-p');
        } else {
            item3.classList.add('bc-b_hover');
            item3.classList.remove('bc-b');
            weight3.classList.add('bc-b_hover');
            weight3.classList.remove('bc-b');
        }
    };
    item3.onmouseout = function () {
        if (item3.hasAttribute('selected')) {
            item3.classList.remove('bc-p_hover');
            item3.classList.add('bc-p');
            weight3.classList.remove('bc-p_hover');
            weight3.classList.add('bc-p');
        } else {
            item3.classList.remove('bc-b_hover');
            item3.classList.add('bc-b');
            weight3.classList.remove('bc-b_hover');
            weight3.classList.add('bc-b');
        }


    };
    item3.addEventListener('click', function () {
        if (item3.hasAttribute('selected')){
            item3.removeAttribute('selected');
            item3.classList.remove('bc-p_hover');
            item3.classList.remove('bc-p');
            item3.classList.add('bc-b');
            weight3.classList.remove('bc-p_hover');
            weight3.classList.add('bc-p');
        } else{
            item3.setAttribute('selected', '');
            item3.classList.remove('bc-b_hover');
            item3.classList.remove('bc-b');
            weight3.classList.remove('bc-b_hover');
            weight3.classList.add('bc-p');
            item3.classList.add('bc-p');
        }


    })

};