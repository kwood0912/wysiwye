var bodyBackground, /*bodyTextColor, bodyLinkColor, bodyFontSize,*/ body, contentContainer, ccBackground, ccWidth, ccPadding, ccShadow;
var imgSrc, imgBg, imgPadding;
var txtFntColor, txtFntSize, txtAlign, txtBg, txtPadding, txtEditBtn;
var btnColor, btnBdrColor, btnFntColor, btnRadius, btnFntSize, btnText, btnUrl, btnAlign, btnBg, btnPaddingTB, btnPaddingLR, btnContainerPadding;
var spaceColor, spaceHeight;
var divBg, divHeight, divColor, divContainerPadding;
var colBg, colNum, colAlign, colContainerPadding;
var deleteBtn, saveBtn, upArrowBtn, downArrowBtn, closeMceBtn, txtSaveBtn;
var template = null;

function changeSettingsView(module) {
	$('.module-settings').hide();
	if (module && module.type) {
		$('.module-settings[module="' + module.type + '"]').show();
		$(deleteBtn).show();
		switch (module.type) {
			case 'image':
				$(imgSrc).val(module.src);
				$(imgBg).val(module.backgroundColor);
				$(imgPadding).val(module.containerPadding);
				break;
			case 'text':
				$(txtFntColor).val(module.fontColor);
				$(txtFntSize).val(module.fontSize);
				$(txtAlign).val(module.alignment)
				$(txtBg).val(module.backgroundColor);
				$(txtPadding).val(module.containerPadding);
				break;
			case 'button':
				$(btnColor).val(module.buttonColor);
				$(btnBdrColor).val(module.borderColor);
				$(btnFntColor).val(module.fontColor);
				$(btnRadius).val(module.borderRadius);
				$(btnFntSize).val(module.fontSize);
				$(btnText).val(module.buttonText);
				$(btnUrl).val(module.href);
				$(btnAlign).val(module.alignment);
				$(btnBg).val(module.backgroundColor);
				$(btnPaddingTB).val(module.paddingTB);
				$(btnPaddingLR).val(module.paddingLR);
				$(btnContainerPadding).val(module.containerPadding);
				break;
			case 'space':
				$(spaceColor).val(module.backgroundColor);
				$(spaceHeight).val(module.height);
				break;
			case 'divider':
				$(divBg).val(module.backgroundColor);
				$(divHeight).val(module.height);
				$(divColor).val(module.color);
				$(divContainerPadding).val(module.containerPadding);
				break;
			case 'columns':
				$(colBg).val(module.backgroundColor);
				$(colNum).val(module.columns.length);
				$(colAlign).val(module.alignment);
				$(colContainerPadding).val(module.containerPadding);
				break;
		}
	} else {
		$('.module-settings[module="none"]').show();
		$(deleteBtn).hide();
	}
}

function moveArrowButtons(element) {
	if (element && template && $(element).siblings().length) {
		$('.arrow-btn').show();
		var box = $(element).offset();
		$('#upArrowBtn').css({ top: box.top + 'px', left: (box.left - $('#upArrowBtn').height()) + 'px' });
		$('#downArrowBtn').css({ top: box.top + $('#upArrowBtn').height() + 'px', left: (box.left - $('#downArrowBtn').height()) + 'px' });
	} else {
		$('.arrow-btn').hide();
	}
}

function moduleClick(e) {
	e.stopPropagation();
	if (!$(this).attr('selected')) {
		$('.module').removeAttr('selected');
		$('.module-column').removeAttr('selected');
		$(this).attr('selected', 'true');
		//move the up/down buttons
		moveArrowButtons(this);
		//pull settings in the side pane
		var id = $(this).attr('id');
		var focusModule = template.setFocusedModule(parseInt(id));
		changeSettingsView(focusModule);
		if (focusModule.type == 'columns') {
			$('tr td.module-column', this).first().attr('selected', 'true');
		}
	}
}

$(document).ready(function() {
	tinymce.init({
		selector: 'textarea',
		height: 500,
		width: 600,
		theme: 'modern',
		plugins: [
			'advlist autolink lists link image charmap print preview hr anchor pagebreak',
			'searchreplace wordcount visualblocks visualchars code fullscreen',
			'insertdatetime media nonbreaking save table contextmenu directionality',
			'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
		],
		toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | fontsizeselect',
		toolbar2: 'bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | codesample help',
		image_advtab: true,
		content_css: [
			'https://fonts.googleapis.com/css?family=Questrial'//,
			//'//www.tinymce.com/css/codepen.min.css'
		]
	});

	//initialize gui variables
	template = new wysiwye($('#body'));
	deleteBtn = $('#deleteBtn');
	saveBtn = $('#saveBtn');
	loadBtn = $('#loadBtn');
	upArrowBtn = $('#upArrowBtn');
	downArrowBtn = $('#downArrowBtn');
	closeMceBtn = $('#closeMceBtn');
	txtSaveBtn = $('#txtSaveBtn');
	bodyBackground = $('#bodybg');
	body = $('#body');
	contentContainer = $('#contentContainer');
	ccBackground = $('#ccbg');
	ccWidth = $('#ccWidth');
	ccPadding = $('#ccPadding');
	ccShadow = $('#ccShadow');
	//image gui controls
	imgSrc = $('#imgSrc');
	imgBg = $('#imgBg');
	imgPadding = $('#imgPadding');
	imgAlign = $('#imgAlign');
	imgWidth = $('#imgWidth');
	//text gui controls
	txtFntColor = $('#txtFntColor');
	txtFntSize = $('#txtFntSize');
	txtAlign = $('#txtAlign');
	txtBg = $('#txtBg');
	txtPadding = $('#txtPadding');
	txtEditBtn = $('#txtEditBtn');
	//button gui controls
	btnColor = $('#btnColor');
	btnBdrColor = $('#btnBdrColor');
	btnFntColor = $('#btnFntColor');
	btnWidth = $('#btnWidth');
	btnHeight = $('#btnHeight');
	btnRadius = $('#btnRadius');
	btnFntSize = $('#btnFntSize');
	btnText = $('#btnText');
	btnUrl = $('#btnUrl');
	btnAlign = $('#btnAlign');
	btnBg = $('#btnBg');
	btnPaddingTB = $('#btnPaddingTB');
	btnPaddingLR = $('#btnPaddingLR');
	btnContainerPadding = $('#btnContainerPadding');
	//space gui controls
	spaceColor = $('#spaceColor');
	spaceHeight = $('#spaceHeight');
	//divider gui controls
	divBg = $('#divBg');
	divHeight = $('#divHeight');
	divColor = $('#divColor');
	divContainerPadding = $('#divContainerPadding');
	//columns gui controls
	colBg = $('#colBg');
	colNum = $('#colNum');
	colAlign = $('#colAlign');
	colContainerPadding = $('#colContainerPadding');

	//set variables
	$(bodyBackground).val(template.globals.bodyBackground);
	$(ccBackground).val(template.globals.contentContainerBackground);
	$(ccWidth).val(template.globals.contentContainerWidth);
	$(ccPadding).val(template.globals.contentContainerPadding);
	if (template.globals.contentContainerShadow) {
		$(ccShadow).attr('checked', 'true');
	} else {
		$(ccShadow).removeAttr('checked');
	}

	$(window).resize(function() {
		var i = template.getFocusedId();
		var fe = $('#' + i).get(0);
		moveArrowButtons(fe);
	});

	$('#body').scroll(function() {
		moveArrowButtons($('#' + template.getFocusedId()).get(0));
	});

	$('#body').click(function() {
		$('.module').removeAttr('selected');
		$('.module-column').removeAttr('selected');
		template.setFocusedModule(null);
		changeSettingsView(null);
		$('.arrow-btn').hide();
	});

	$('.overlay').click(function(e) {
		e.stopPropagation();
	});

	//defint event handlers
	$('.ctrl-expando').click(function(){
		var arrow = $(this).find('.caret');
		var contentId = $(this).attr('expand-content');
		if ($(arrow).hasClass('arrow-right')) {
			//collapsed
			$(arrow).removeClass('arrow-right').addClass('arrow-down');
			$(contentId).show();
			$(contentId).animate({
				height: $(contentId).get(0).scrollHeight
			}, 500, function () {
				$(this).height('auto');
			});
		} else {
			//expanded
			$(arrow).removeClass('arrow-down').addClass('arrow-right');
			$(contentId).animate({
				height: 0
			}, 500, function() {
				$(this).hide();
			});
		}
	});

	$('.module-add').click(function() {
		var module = $(this).attr('module');
		//check to see if currently focused module is a columns type
		var currentFocusMod = template.getFocusedModule();
		$('.module').removeAttr('selected');
		var moduleElement = null;
		if (currentFocusMod && currentFocusMod.type == 'columns') {
			moduleElement = template.addColumnModule(module, template.getFocusedId());
		} else {
			$('.module-column').removeAttr('selected');
			moduleElement = template.addModule(module);
		}
		
		$(moduleElement).attr('selected', 'true');
		var newModule = template.getFocusedModule();
		changeSettingsView(newModule);
		moveArrowButtons(moduleElement.get(0));
		if (module == 'text') {
			$('tr td div[contenteditable]', moduleElement).keyup(function() {
				template.updateFocusedModule('text', $(this).text());
			});
		} else if (module == 'columns') {
			var cols = $('tr td.module-column', moduleElement);
			cols.first().attr('selected', 'true');
			cols.click(function() {
				if (!$(this).attr('selected')) {
					$('.module-column').removeAttr('selected');
					$(this).attr('selected', 'true');
				}
			});
		}
		$(moduleElement).click(moduleClick);
	});

	$(txtSaveBtn).click(function(){
		var content = tinymce.activeEditor.getContent();
		$('#' + template.getFocusedId() + ' > tbody > tr > td > div').html(content);
		template.updateFocusedModule('text', content);
		$('.overlay').fadeOut(function() {
			tinymce.activeEditor.setContent('');
		});
	});
	$(closeMceBtn).click(function() {
		$('.overlay').fadeOut(function() {
			tinymce.activeEditor.setContent('');
		});
	});
	$(deleteBtn).click(function() {
		template.removeFocusedModule();
		changeSettingsView(null);
		$('.arrow-btn').hide();
	});
	$(saveBtn).click(function() {
		template.saveTemplate(function(html) {
			if (typeof(Storage) !== 'undefined' && localStorage) {
				localStorage.setItem('template', html);
				alert('Template has been saved!');
			} else {
				alert('Local Storage is not supported by this browser!');
			}
		});
	});
	$(loadBtn).click(function() {
		if (typeof(Storage) !== 'undefined' && localStorage) {
			var htmlTemplate = localStorage.getItem('template');
			if (htmlTemplate) {
				template.loadTemplate(htmlTemplate);
				//loop through modules and apply event handlers
				$('table.module').each(function(index) {
					var module = $(this).attr('module');
					if (module == 'text') {
						$('tr td div[contenteditable]', this).keyup(function() {
							template.updateFocusedModule('text', $(this).text());
						});
					} else if (module == 'columns') {
						var cols = $('td.module-column', this);
						cols.click(function() {
							if (!$(this).attr('selected')) {
								$('.module-column').removeAttr('selected');
								$(this).attr('selected', 'true');
							}
						});
					}
					$(this).click(moduleClick);
				});
				//set global styles input values
				body = $('div#body');
				$(body).click(function() {
					$('.module').removeAttr('selected');
					$('.module-column').removeAttr('selected');
					template.setFocusedModule(null);
					changeSettingsView(null);
					$('.arrow-btn').hide();
				});
				contentContainer = $('#contentContainer');
				$(bodyBackground).val(template.globals.bodyBackground);
				$(ccBackground).val(template.globals.contentContainerBackground);
				$(ccWidth).val(template.globals.contentContainerWidth);
				$(ccPadding).val(template.globals.contentContainerPadding);
				if (template.globals.contentContainerShadow) {
					$(ccShadow).attr('checked', 'true');
				} else {
					$(ccShadow).removeAttr('checked');
				}
				alert('Template has been loaded!');
			}
		} else {
			alert('Local Storage is not supported by this browser!');
		}
	});
	$(upArrowBtn).click(function() {
		var fe = $('#' + template.getFocusedId());
		if (!fe.is(':first-child')) {
			fe.prev().insertAfter(fe);
			template.moveFocusedModuleUp();
			moveArrowButtons($(fe).get(0));
		}
	});
	$(downArrowBtn).click(function() {
		var fe = $('#' + template.getFocusedId());
		if (!fe.is(':last-child')) {
			fe.next().insertBefore(fe);
			template.moveFocusedModuleDown();
			moveArrowButtons($(fe).get(0));
		}
	});
	$(bodyBackground).change(function() {
		template.updateGlobalSetting('bodyBackground', $(this).val());
		$(body).css('background', '#' + $(this).val());
	});
	/*$(bodyTextColor).change(function() {
		template.updateGlobalSetting('bodyTextColor', $(this).val());
		$(body).css('color', '#' + $(this).val());
	});*/
	/*$(bodyLinkColor).change(function() {
		template.updateGlobalSetting('bodyLinkColor', $(this).val());
		$('#body a').css('color', '#' + $(this).val());
	});*/
	/*$(bodyFontSize).change(function() {
		template.updateGlobalSetting('bodyFontSize', $(this).val());
		$(body).css('font-size', $(this).val() + 'px');
	});*/
	$(ccBackground).change(function() { 
		template.updateGlobalSetting('contentContainerBackground', $(this).val());
		$(contentContainer).css('background', '#' + $(this).val());
	});
	$(ccWidth).change(function() {
		template.updateGlobalSetting('contentContainerWidth', $(this).val());
		$(contentContainer).css('max-width', $(this).val() + 'px');
		moveArrowButtons($('#' + template.getFocusedIndex()).get(0));
	});
	$(ccPadding).change(function() {
		template.updateGlobalSetting('contentContainerPadding', $(this).val());
		$(contentContainer).css('padding', $(this).val() + 'px');
		moveArrowButtons($('#' + template.getFocusedIndex()).get(0));
	});
	$(ccShadow).change(function() {
		template.updateGlobalSetting('contentContainerShadow', this.checked);
		if (this.checked) {
			$(contentContainer).css('box-shadow', '2px 2px 3px rgba(0,0,0,0.6');
		} else {
			$(contentContainer).css('box-shadow', '0px 0px 0px rgba(0,0,0,0');
		}
		
	});

	//image parameter events
	$(imgSrc).change(function() {
		template.updateFocusedModule('src', $(this).val());
		$('#' + template.getFocusedId() + ' tr td img').attr('src', $(this).val());
	});
	$(imgBg).change(function() {
		template.updateFocusedModule('backgroundColor', $(this).val());
		$('#' + template.getFocusedId()).css('background', '#' + $(this).val());
	});
	$(imgPadding).change(function() {
		template.updateFocusedModule('containerPadding', $(this).val());
		$('#' + template.getFocusedId()).css('padding', $(this).val() + 'px');
	});
	$(imgWidth).change(function() {
		template.updateFocusedModule('width', $(this).val());
		var value = $(this).val();
		if (value != 'auto' && value.indexOf('%') < 0) {
			value += 'px';
		}
		$('#' + template.getFocusedId() + ' tr td img').css('width', value);
	});
	$(imgAlign).change(function() {
		template.updateFocusedModule('alignment', $(this).val());
		$('#' + template.getFocusedId() + ' tr td').attr('align', $(this).val());
	});
	//text parameter events
	$(txtFntSize).change(function() {
		template.updateFocusedModule('fontSize', $(this).val());
		$('#' + template.getFocusedId() + ' > tbody > tr > td > div').css('font-size', $(this).val() + 'px');
	});
	$(txtFntColor).change(function() {
		template.updateFocusedModule('fontColor', $(this).val());
		$('#' + template.getFocusedId() + ' > tbody > tr > td > div').css('color', '#' + $(this).val());
	});
	$(txtAlign).change(function() {
		template.updateFocusedModule('alignment', $(this).val());
		$('#' + template.getFocusedId() + ' > tbody > tr > td > div').css('text-align', $(this).val());
	});
	$(txtBg).change(function() {
		template.updateFocusedModule('backgroundColor', $(this).val());
		$('#' + template.getFocusedId()).css('background', '#' + $(this).val());
	});
	$(txtPadding).change(function() {
		template.updateFocusedModule('containerPadding', $(this).val());
		$('#' + template.getFocusedId()).css('padding', $(this).val() + 'px');
	});
	$(txtEditBtn).click(function() {
		var content = $('#' + template.getFocusedId() + ' > tbody > tr > td > div').html();
		tinymce.activeEditor.setContent(content);
		$('.overlay').fadeIn();
	});
	//button parameter events
	$(btnColor).change(function() {
		template.updateFocusedModule('buttonColor', $(this).val());
		$('#' + template.getFocusedId() + ' tr td a').css("background", '#' + $(this).val());
	});
	$(btnBdrColor).change(function() {
		template.updateFocusedModule('buttonColor', $(this).val());
		$('#' + template.getFocusedId() + ' tr td a').css("border", '1px solid #' + $(this).val());
	});
	$(btnFntColor).change(function() {
		template.updateFocusedModule('fontColor', $(this).val());
		$('#' + template.getFocusedId() + ' tr td a').css("color", '#' + $(this).val());
	});
	$(btnRadius).change(function() {
		template.updateFocusedModule('borderRadius', $(this).val());
		$('#' + template.getFocusedId() + ' tr td a').css("border-radius", $(this).val() + 'px');
	});
	$(btnFntSize).change(function() {
		template.updateFocusedModule('fontSize', $(this).val());
		$('#' + template.getFocusedId() + ' tr td a').css("fontSize", $(this).val() + 'px');
	});
	$(btnText).change(function() {
		template.updateFocusedModule('buttonText', $(this).val());
		$('#' + template.getFocusedId() + ' tr td a').html($(this).val());
	});
	$(btnUrl).change(function() {
		template.updateFocusedModule('href', $(this).val());
		$('#' + template.getFocusedId() + ' tr td a').attr("href", $(this).val());
	});
	$(btnAlign).change(function() {
		template.updateFocusedModule('alignment', $(this).val());
		$('#' + template.getFocusedId() + ' tr td').css("text-align", $(this).val());
	});
	$(btnBg).change(function() {
		template.updateFocusedModule('backgroundColor', $(this).val());
		$('#' + template.getFocusedId()).css("background", '#' + $(this).val());
	});
	$(btnPaddingTB).change(function() {
		template.updateFocusedModule('paddingTB', $(this).val());
		$('#' + template.getFocusedId() + ' tr td a').css('padding-bottom', $(this).val() + 'px').css('padding-top', $(this).val() + 'px');
	});
	$(btnPaddingLR).change(function() {
		template.updateFocusedModule('paddingLR', $(this).val());
		$('#' + template.getFocusedId() + ' tr td a').css('padding-left', $(this).val() + 'px').css('padding-right', $(this).val() + 'px');
	});
	$(btnContainerPadding).change(function() {
		template.updateFocusedModule('containerPadding', $(this).val());
		$('#' + template.getFocusedId()).css('padding', $(this).val() + 'px');
	});

	//space parameter events
	$(spaceColor).change(function() {
		template.updateFocusedModule('backgroundColor', $(this).val());
		$('#' + template.getFocusedId()).css('background', '#' + $(this).val());
	});
	$(spaceHeight).change(function() {
		template.updateFocusedModule('height', $(this).val());
		$('#' + template.getFocusedId() + ' tr td').css("height", $(this).val() + 'px');
	});

	//divider parameter events
	$(divBg).change(function() {
		template.updateFocusedModule('backgroundColor', $(this).val());
		$('#' + template.getFocusedId()).css('background', '#' + $(this).val());
	});
	$(divHeight).change(function() {
		template.updateFocusedModule('height', $(this).val());
		$('#' + template.getFocusedId() + ' tr td div').css('height', $(this).val() + 'px');
	});
	$(divColor).change(function() {
		template.updateFocusedModule('color', $(this).val());
		$('#' + template.getFocusedId() + ' tr td div').css('background', '#' + $(this).val());
	});
	$(divContainerPadding).change(function() {
		template.updateFocusedModule('containerPadding', $(this).val());
		$('#' + template.getFocusedId()).css('padding', $(this).val() + 'px');
	});

	//columns parameter events
	$(colBg).change(function() {
		template.updateFocusedModule('backgroundColor', $(this).val());
		$('#' + template.getFocusedId()).css('background', '#' + $(this).val());
	});
	$(colNum).change(function() {
		var mod = template.getFocusedModule();
		var cn = parseInt($(this).val());
		if (isNaN(cn) || cn < 2) {
			$(this).val('2'); 
			return; 
		}
		var newWidth = 100 / cn;
		//template.updateFocusedModule('columnCount', $(this).val());
		//manipulate columns here
		var cc = $('#' + template.getFocusedId() + ' tr td.module-column').length;
		while (cc != cn) {
			if (cn > cc) {
				//add some columns
				var newCol = $('<td class="module-column" style="vertical-align: top;"></td>');
				$('#' + template.getFocusedId() + ' > tbody > tr').append(newCol);
				newCol.click(function() {
					if (!$(this).attr('selected')) {
						$('.module-column').removeAttr('selected');
						$(this).attr('selected', 'true');
					}
				});
				mod.columns.push([]);
			} else {
				//remove some columns
				$('#' + template.getFocusedId() + ' tr td.module-column').get(cc - 1).remove();
				mod.columns.pop();
			}
			cc = $('#' + template.getFocusedId() + ' tr td.module-column').length;
		}
		$('#' + template.getFocusedId() + ' tr td.module-column').css('width', newWidth + '%');
		$('#' + template.getFocusedId() + ' tr td.module-column').attr('align', $(colAlign).val());
	});
	$(colAlign).change(function() {
		template.updateFocusedModule('alignment', $(this).val());
		$('#' + template.getFocusedId() + ' tr td.module-column').attr('align', $(this).val());
	});
	$(colContainerPadding).change(function() {
		template.updateFocusedModule('containerPadding', $(this).val());
		$('#' + template.getFocusedId()).css('padding', $(this).val() + 'px');
	});
});
