import SiButton from './button'
const components = [
    SiButton,
];

const install = function (Vue) {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    SiButton
}