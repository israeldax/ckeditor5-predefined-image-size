import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import ImageSizePredefinedEditing from './imagesizepredefined/ImageSizePredefinedEditing';
import ImageSizePredefinedUI from './imagesizepredefined/imagesizepredefinedui';

export default class ImageSizePredefined extends Plugin {

	static get requires() {
		return [ ImageSizePredefinedEditing, ImageSizePredefinedUI ];
	}

	static get pluginName() {
		return 'ImageSizePredefined';
	}
}
