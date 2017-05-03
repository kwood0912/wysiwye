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
	this. getDefaultImage = function() {
		return {
			src: '',
			backgroundColor: '#FFFFFF',
			containerPadding: '0',
			html: '<table class="module" style="width: 100%; background: #FFFFFF; padding: 0px;"><tr><td><img style="max-width: 100%" src="" /></td></tr></table>'
		};
	};
	this.getDefaultText = function() {
		return {
			text: 'Type something',
			backgroundColor: 'FFFFFF',
			containerPadding: '0',
			html: '<table class="module" style="width: 100%; background: #FFFFFF; padding: 0px;"><tr><td><div style="width:100%" contenteditable="true">Type something</div></td></tr></table>'
		};
	};
	this.getDefaultButton = function() {
		return {
			buttonColor: '1188E6',
			borderColor: '1288E5',
			fontColor: 'FFFFFF',
			width: '200',
			height: '15',
			padding: '12',
			borderRadius: '6',
			fontSize: '16',
			buttonText: 'Your Call-to-action',
			href: '',
			alignment: 'center',
			backgroundColor: 'FFFFFF',
			containerPadding: '0',
			html: '<table class="module" style="width: 100%; background: #FFFFFF; text-align: center; padding: 0px;"><tr><td><a href="" target="_blank" style="background: #1188E6;border: 1px solid #1288E5;color: #FFFFFF;width: 200px; height: 15px; padding: 12px; border-radius: 6px; font-size: 16px; text-decoration: none;">Your Call-to-action</a></td></tr></table>'
		};
	};
	this.modules = []; 
	this.html = '<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /></head><body></body></html>';
};

wysiwye.prototype.addModule = function(module) {
	var newModule = null;
	switch (module) {
		case 'image': 
			newModule = this.getDefaultImage();
			break;
		case 'text':
			newModule = this.getDefaultText();
			break;
		case 'button':
			newModule = this.getDefaultButton();
			break;
	}
	var index = this.modules.push(newModule);
	var element = $(newModule.html);
	$('table', element).attr('index', index);
	//add to the preview
	$(this.previewElement).append(newModule.html);
}

wysiwye.prototype.removeModule = function(index) {
	this.modules.splice(index, 1);
}

wysiwye.prototype.update = function() {
	//go through and update the preview
}