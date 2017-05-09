var bodyBackground, bodyTextColor, bodyLinkColor, bodyFontSize, body, contentContainer, ccBackground, ccWidth, ccPadding;
var imgSrc, imgBg, imgPadding;
var txtBg, txtPadding;
var btnColor, btnBdrColor, btnFntColor, btnWidth, btnHeight, btnRadius, btnFntSize, btnText, btnUrl, btnAlign, btnBg, btnPadding;
var template = null;

function changeSettingsView(type) {
	$('.module-settings').hide();
	if (type) {
		$('.module-settings[module="' + type + '"]').show();
	} else {
		$('.module-settings[module="none"]').show();
	}
}

$(document).ready(function() {
	//initialize gui variables
	template = new wysiwye($('#body'));
	bodyBackground = $('#bodybg');
	bodyTextColor = $('#bodytxtc');
	bodyLinkColor = $('#bodyLinkColor');
	bodyFontSize = $('#bodyFontSize');
	body = $('#body');
	contentContainer = $('#contentContainer');
	ccBackground = $('#ccbg');
	ccWidth = $('#ccWidth');
	ccPadding = $('#ccPadding');




	//set variables
	$(bodyBackground).val(template.globals.bodyBackground);
	$(bodyTextColor).val(template.globals.bodyTextColor);
	$(bodyLinkColor).val(template.globals.bodyLinkColor);
	$(bodyFontSize).val(template.globals.bodyFontSize);
	$(ccBackground).val(template.globals.contentContainerBackground);
	$(ccWidth).val(template.globals.contentContainerWidth);
	$(ccPadding).val(template.globals.contentContainerPadding);

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

	$(bodyBackground).change(function() {
		$(body).css('background', '#' + $(this).val());
	});
	$(bodyTextColor).change(function() {
		$(body).css('color', '#' + $(this).val());
	});
	$(bodyLinkColor).change(function() {
		$('#body a').css('color', '#' + $(this).val());
	});
	$(bodyFontSize).change(function() {
		$(body).css('font-size', $(this).val() + 'px');
	});
	$(ccBackground).change(function() { 
		$(contentContainer).css('background', '#' + $(this).val());
	});
	$(ccWidth).change(function() {
		$(contentContainer).css('max-width', $(this).val() + 'px');
	});
	$(ccPadding).change(function() {
		$(contentContainer).css('padding', $(this).val() + 'px');
	});

	$('.module-add').click(function() {
		var module = $(this).attr('module');
		var moduleElement = template.addModule(module);
		$(moduleElement).click(function() {
			if (!$(this).attr('selected')) {
				$('.module').removeAttr('selected');
				$(this).attr('selected', 'true');
				//pull settings in the side pane
				var index = $(this).attr('index');
				var focusModule = template.getModule(parseInt(index));
				changeSettingsView(focusModule.type);
			}
		});
	});
});
