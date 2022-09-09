import './api/moviedb/getMoviesDetails';
import modalInputTpl from '../templates/modal-card.hbs';

const modal = document.querySelector('[data-backdrop]');

export default function openModalCard() {
  document.body.classList.add('show-modal-card');

  console.log('Show Modal', this);

  // шаблонні дані data треба замінити на дані з бекенду
  const data = {
    adult: false,
    backdrop_path: '/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    belongs_to_collection: null,
    budget: 63000000,
    genres: [{ id: 18, name: 'Drama' }],
    homepage: 'http://www.foxmovies.com/movies/fight-club',
    id: 550,
    imdb_id: 'tt0137523',
    original_language: 'en',
    original_title: 'Fight Club',
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    popularity: 75.101,
    poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    production_companies: [
      {
        id: 508,
        logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
        name: 'Regency Enterprises',
        origin_country: 'US',
      },
      {
        id: 711,
        logo_path: '/tEiIH5QesdheJmDAqQwvtN60727.png',
        name: 'Fox 2000 Pictures',
        origin_country: 'US',
      },
      {
        id: 4700,
        logo_path: '/A32wmjrs9Psf4zw0uaixF0GXfxq.png',
        name: 'The Linson Company',
        origin_country: 'US',
      },
      {
        id: 20555,
        logo_path: '/hD8yEGUBlHOcfHYbujp71vD8gZp.png',
        name: 'Taurus Film',
        origin_country: 'DE',
      },
      {
        id: 54051,
        logo_path: null,
        name: 'Atman Entertainment',
        origin_country: '',
      },
      {
        id: 54052,
        logo_path: null,
        name: 'Knickerbocker Films',
        origin_country: 'US',
      },
    ],
    production_countries: [
      { iso_3166_1: 'DE', name: 'Germany' },
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    release_date: '1999-10-15',
    revenue: 100853753,
    runtime: 139,
    spoken_languages: [
      { english_name: 'English', iso_639_1: 'en', name: 'English' },
    ],
    status: 'Released',
    tagline: 'Mischief. Mayhem. Soap.',
    title: 'Fight Club',
    video: false,
    vote_average: 8.431,
    vote_count: 24725,
  };

  const html = modalInputTpl(data);
  modal.innerHTML = html;

  // const openModalEl = document.querySelectorAll('[data-modal-open]');
  const closeModalBtnEl = document.querySelector('[data-modal-close]');
  const backdropEl = document.querySelector('[data-backdrop]');

  // openModalEl.forEach(card => card.addEventListener('click', penModalCard));
  closeModalBtnEl.addEventListener('click', onCloseModalCard);
  backdropEl.addEventListener('click', onBackdropClick);

  window.addEventListener('keydown', onEscKyePressExit);
}

function onCloseModalCard() {
  document.body.classList.remove('show-modal-card');
  window.addEventListener('keydown', onEscKyePressExit);
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModalCard();
  }
}

function onEscKyePressExit(event) {
  if (event.code === 'Escape') {
    onCloseModalCard();
  }
}
//видалити після додавання карточок на сторінку
window.callModalViaConsole = openModalCard;
