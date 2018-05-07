// querySelector a element by `query` from `parent`
function queryEle(query, parent){
    return parent.querySelector(query);
}

// get attribute of a element, attribute maybe attr, func, etc.
function getAttribute(ele, attr) {
    if(attr.type == 'attr'){
        return ele.getAttribute(attr.des);
    }else if(attr.type == 'func'){
        return ele[attr.des](attr.para);
    }
}
