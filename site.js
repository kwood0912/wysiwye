var bodyBackground, bodyTextColor, bodyLinkColor, bodyFontSize;
var template = null;
$(document).ready(function() {
	//initialize gui variables
	template = new wysiwye($('#contentContainer tr td'));
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
	$(body).css('background', '#' + $(bodyBackground).val());
	$(body).css('color', '#' + $(bodyTextColor).val());
	$('#body a').css('color', '#' + $(bodyLinkColor).val());
	$(body).css('font-size', $(bodyFontSize).val() + 'px');
	$(contentContainer).css('background', '#' + $(ccBackground).val());
	$(contentContainer).css('max-width', $(ccWidth).val() + 'px');
	$(contentContainer).css('padding', $(ccPadding).val() + 'px');

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
		template.addModule(module);
	});
});
