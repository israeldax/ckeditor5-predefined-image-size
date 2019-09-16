const _defaultPredefinedSizes = {
    small: {
        order: 1,
        className: 'img-prd-size-sml',
    },
    medium: {
        order: 2,
        className: 'img-prd-size-med',
    },
    big: {
        order: 3,
        className: 'img-prd-size-big',
    }
};

function _nextSizeKey(currentSize) {
    const keys = getAllPredefinedSizes();

    let currentSizeIndex = keys.findIndex(key => key === currentSize);
    currentSizeIndex = currentSizeIndex === (keys.length - 1) ? 0 : currentSizeIndex + 1;

    return keys[currentSizeIndex];
}

export function nextPredefinedSize(currentSize, sizes = _defaultPredefinedSizes) {
    return _nextSizeKey(currentSize, sizes);
};

export function getPredefinedSizeClass(size, sizes = _defaultPredefinedSizes) {
    return sizes[size].className;
};

export function getAllPredefinedSizes(sizes = _defaultPredefinedSizes) {
    const keys = Object.keys(sizes);
    return keys.sort((a,b) => sizes[a].order - sizes[b].order);
}
