var kinolarEl = document.querySelector('.kinolar');
var kinolarTemplate = document.querySelector('#kinolar-template').content;

var kinoYuklashBtnEl = document.querySelector('.kino-yuklash');
kinoYuklashBtnEl.addEventListener('click', function () {
    kinolar.forEach(function (kinolar) {
        var kinoClone = document.importNode(kinolarTemplate, true);
        // kinoClone.querySelector('img').src = kinolar.photo;
        kinoClone.querySelector('img').alt = kinolar.title;
        kinoClone.querySelector('h3').textContent = kinolar.title;
        kinoClone.querySelector('span').textContent = kinolar.year;
        // kinoClone.querySelector('a').href = kino.url;
        // kinoClone.querySelector('a').textContent = 'Batafsil';
        kinolarEl.appendChild(kinoClone);
    });
});