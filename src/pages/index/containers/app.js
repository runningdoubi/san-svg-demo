/**
 * @file 容器组件
 * @author
 */

import {Component} from 'san';
import './app.less';
import logo from '@assets/logo.svg';

const SVG_STRING = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0"  width="0" height="0" preserveAspectRatio="xMidYMid meet">
        <defs>
            <radialGradient id="myRadialGradient">
                <stop offset="10%" stop-color="gold" />
                <stop offset="95%" stop-color="red" />
            </radialGradient>
            <linearGradient id="myLinearGradient">
                <stop offset="5%" stop-color="green"/>
                <stop offset="95%" stop-color="gold"/>
            </linearGradient>
        </defs>
    </svg>`;

export default class App extends Component {

    static template = `
        <div class="main">
            <div id="svgWrap">{{svgHtml | raw}}</div>
            <div class="origin-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"  width="500" height="500" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <radialGradient id="myRadialGradient">
                            <stop offset="10%" stop-color="gold" />
                            <stop offset="95%" stop-color="red" />
                        </radialGradient>
                        <linearGradient id="myLinearGradient">
                            <stop offset="5%" stop-color="green"/>
                            <stop offset="95%" stop-color="gold"/>
                        </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="100" fill="url(#myRadialGradient)" />
                    <rect fill="url(#myLinearGradient)" x="200" y="200" width="200" height="200" />
                </svg>
            </div>
            <button on-click="toggle">添加svg defs</button>
        </div>
    `;

    initData() {
        return {
            logo,
            title: 'San CLI',
            svgHtml: ''
        };
    }

    attached() {
    }

    toggle() {
        let str = this.data.get('svgHtml');
        this.data.set('svgHtml', str ? '' : SVG_STRING);
    }
}
