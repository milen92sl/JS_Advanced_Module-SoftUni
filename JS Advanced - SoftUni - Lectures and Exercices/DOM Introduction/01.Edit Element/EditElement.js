function solve(element, match, replacer){
    while(element.textContent.incudes(match)){
    element.textContent = element.textContent.replace(match, replacer)
    }
};