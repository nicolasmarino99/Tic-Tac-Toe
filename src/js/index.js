import '../assets/global.scss';
import gameModule from './gameModule';
import { displayCtrl } from './displayModule';

document.getElementById('menu-btns').addEventListener('click', gameModule.gameInit);
document.querySelector('#replay').addEventListener('click', gameModule.cleanBoard);

displayCtrl.initEvents();