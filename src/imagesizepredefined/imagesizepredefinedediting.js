import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import ImageSizePredefinedCommand from './imagesizepredefinedcommand';
import {modelToViewPredefinedSize, viewToModelPredefinedSize} from './converters';

export default class ImageSizePredefinedEditing extends Plugin {

    static get pluginName() {
		return 'ImageSizaPredefinedEditing';
	}

	init() {
        const editor = this.editor;
        const schema = editor.model.schema;
        const data = editor.data;
		const editing = editor.editing;

        schema.extend( 'image', { allowAttributes: 'predefinedSize' } );

        editing.downcastDispatcher.on( 'attribute:predefinedSize:image', modelToViewPredefinedSize );
        data.downcastDispatcher.on( 'attribute:predefinedSize:image', modelToViewPredefinedSize );

        data.upcastDispatcher.on( 'element:figure', viewToModelPredefinedSize, { priority: 'low' } );

		editor.commands.add( 'imageSizePredefined', new ImageSizePredefinedCommand( editor ) );
	}
}
