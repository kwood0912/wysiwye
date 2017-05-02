function wysiwye(preview) {
	this.previewElement = preview;
	this.globalDefaults = {
		bodyBackground: 'FAFAFA',
		bodyTextColor: 'FFFFFF',
		bodyLinkColor: '1188e6',
		contentContainerBackground: 'FFFFFF',
		contentContainerWidth: '600',
		contentContainerPadding: '8'
	};
	this.moduleDefaults = {
		image: {
			url: '',
			backgroundColor: '#FFFFFF',
			containerPadding: '0',
			html: '<img style="max-width: 100%" src="" />'
		},
		text: {
			text: 'Type something',
			backgroundColor: 'FFFFFF',
			containerPadding: '0',
			html: '<div style="width:100%"></div>'
		},
		button: {
			buttonColor: '1188E6',
			borderColor: '1288E5',
			fontColor: 'FFFFFF',
			width: '200',
			height: '15',
			padding: '12',
			borderRadius: '6',
			fontSize: '16',
			buttonText: 'Your Call-to-action',
			buttonUrl: '',
			alignment: 'center',
			backgroundColor: 'FFFFFF',
			containerPadding: '0'
		}
	};
	this.modules = []; 
	this.html = '<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /></head><body></body></html>';
	this.module = '<table><tr><td></td></tr></table>';
};

wysiwye.prototype.addModule = function(module) {
	//push the default module onto the modules collection
	this.modules.push(this.moduleDefaults[module]);
	//add to the preview

}

wysiwye.prototype.removeModule = function(index) {
	this.modules.splice(index, 1);
}

wysiwye.prototype.update = function() {
	//go through and update the preview
}