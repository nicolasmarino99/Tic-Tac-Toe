import '../assets/global.scss';
import { gameModule }  from './gameModule.js';
import {displayCtrl} from './displayModule.js';

document.getElementById('form').addEventListener('keypress', gameModule.gameInit(event.key));
document.querySelector('#replay').addEventListener('click', gameModule.cleanBoard);

displayCtrl.initEvents();