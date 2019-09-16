import first from '@ckeditor/ckeditor5-utils/src/first';

import {getPredefinedSizeClass, getAllPredefinedSizes} from './util';


export function modelToViewPredefinedSize(evt, data, conversionApi) {
    const {item, attributeNewValue, attributeOldValue} = data;

    if ( !conversionApi.consumable.consume( item, evt.name ) ) {
        return;
    }

    const viewElement = conversionApi.mapper.toViewElement( data.item );
    const viewWriter = conversionApi.writer;

    if(attributeOldValue) {
        viewWriter.removeClass( getPredefinedSizeClass(attributeOldValue), viewElement );
    }

    if(attributeNewValue){
        viewWriter.addClass( getPredefinedSizeClass(attributeNewValue), viewElement );
    }
}


export function viewToModelPredefinedSize( evt, data, conversionApi ) {
    if ( !data.modelRange ) {
        return;
    }

    const viewFigureElement = data.viewItem;
    const modelImageElement = first( data.modelRange.getItems() );

    if ( !conversionApi.schema.checkAttribute( modelImageElement, 'predefinedSize' ) ) {
        return;
    }


    getAllPredefinedSizes().forEach(size => {
        if ( conversionApi.consumable.consume( viewFigureElement, { classes: getPredefinedSizeClass(size) } ) ) {
            conversionApi.writer.setAttribute( 'predefinedSize', size, modelImageElement );
        }
    })
}
