import Command from '@ckeditor/ckeditor5-core/src/command';
import { isImage } from '@ckeditor/ckeditor5-image/src/image/utils';
import {nextPredefinedSize} from './util';

export default class ImageSizePredefinedCommand extends Command {

	refresh() {
		const element = this.editor.model.document.selection.getSelectedElement();

		this.isEnabled = isImage( element );

		if ( isImage( element ) && element.hasAttribute( 'predefinedSize' ) ) {
			this.value = element.getAttribute( 'predefinedSize' );
		} else {
			this.value = false;
		}
	}

	execute( options ) {
		const model = this.editor.model;
		const imageElement = model.document.selection.getSelectedElement();

		model.change( writer => {
            let currentSize = imageElement.getAttribute( 'predefinedSize' );
            let nextSize;

            if(currentSize) {
                nextSize = nextPredefinedSize(currentSize);
            } else {
                nextSize = 'small';
            }

			writer.setAttribute( 'predefinedSize', nextSize, imageElement );
		} );
	}
}
