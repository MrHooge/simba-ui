import SiButton from './Button'

/* istanbul ignore next */
SiButton.install = function (app) {
    app.component(SiButton.name, SiButton)
}

export default SiButton