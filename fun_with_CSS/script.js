const root = document.querySelector(`:root`)

document.querySelector('#pd').addEventListener('change',makeChanges);
document.querySelector('#wd').addEventListener('change',makeChanges);
document.querySelector('#blur').addEventListener('change',makeChanges);
document.querySelector('#clr').addEventListener('change',makeChanges);

function makeChanges(e) {
    let prop = `--${e.target.id}`
    let propVal = `${e.target.value}`

    switch (prop) {
        case '--blur':
            propVal += 'px';
            break;
    
        case '--pd':
            propVal += 'rem';
            break;
        
        case '--wd':
            propVal += 'rem';
            break;
            
        default:
            break;
    }
    
    root.style.setProperty(prop,propVal)
}
