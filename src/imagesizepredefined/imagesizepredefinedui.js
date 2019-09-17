import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import imageIcon from '../../theme/icons/predefined-size.svg';
import '../../theme/predefinedsize.css';

export default class ImageSizePredefinedUI extends Plugin {

	static get pluginName() {
		return 'ImageSizePredefinedUI';
    }

	init() {
		this._createButton();
    }

	_createButton() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( 'imageSizePredefined', locale => {
			const command = editor.commands.get( 'imageSizePredefined' );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Change image predefined size' ),
				icon: imageIcon,
				tooltip: true
			} );

			view.bind( 'isEnabled' ).to( command, 'isEnabled' );

			this.listenTo( view, 'execute', () => editor.execute('imageSizePredefined'));

			return view;
		} );
    }

}
