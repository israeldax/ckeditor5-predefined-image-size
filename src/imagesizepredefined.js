import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ImageSizePredefinedEditing from '@ckeditor/ckeditor5-image-size-predefined/src/imagesizepredefined/imagesizepredefinedediting';
import ImageSizePredefinedUI from '@ckeditor/ckeditor5-image-size-predefined/src/imagesizepredefined/imagesizepredefinedui';

export default class ImageSizePredefined extends Plugin {

	static get requires() {
		return [ ImageSizePredefinedEditing, ImageSizePredefinedUI ];
	}

	static get pluginName() {
		return 'ImageSizePredefined';
	}
}
