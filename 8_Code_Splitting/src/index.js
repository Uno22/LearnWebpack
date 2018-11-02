

async function getComponent() {
    
    let element = document.createElement('div');

    const {default: _} = await import(/* webpackChuckName: "lodash"*/ 'lodash');

    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    
    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
})
