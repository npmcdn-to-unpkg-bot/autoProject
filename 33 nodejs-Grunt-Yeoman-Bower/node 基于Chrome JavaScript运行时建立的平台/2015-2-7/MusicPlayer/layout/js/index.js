var nodejs = global,
		appPath = nodejs.process.cwd(),
		musicPath = appPath + '/Music',
		musicFiles = [],
		fs = require('fs'),
		gui = require('nw.gui'),
		GUI_WINDOW = gui.Window.get(),
		isPlay = null,
		player = null;

/* *
 * ��ק
 * */
$.fn.extend({
	drag: function(moveCallBack) {
		$(this).on('mousedown', function(e) {
		
			var _this = this;
			
			var disX = e.clientX - $(this).position().left;
			var disY = e.clientY - $(this).position().top;
			
			$(document).on('mousemove', fnMove);
			
			$(document).on('mouseup', fnUp);
			
			function fnMove(e) {
				moveCallBack && moveCallBack.call(_this, {
					x: e.clientX - disX,
					y: e.clientY - disY
				});
			}
			
			function fnUp() {
				$(document).off('mousemove', fnMove);
				$(document).off('mouseup', fnUp);
			}
			
			return false;
		});
	}
});

function getMusicList() {
	fs.readdir(musicPath, function(err, files) {
		if (err) {
			alert('�����б��ȡʧ��');
			return;
		}

		musicFiles = files;
		
		var $list = $('.list').html('');
		
		$.each(musicFiles, function(index, data) {
			var $li = $('<li>').html( data.replace(/(.*)\.\w+$/i, function($0, $1) {
				return $1;
			}) ).on('click', function() {
				
				player.src = musicPath + '/' + this.innerHTML + '.OGG';
				
				player.addEventListener('timeupdate', function() {
					
					var scale = this.currentTime / this.duration;
					
					var iLeft = 300 * scale - 11;
					
					$('.processbar_play_btn').css('left', iLeft);
					
				});
				
				player.addEventListener('play', function() {
					isPlay = true;
					$('#btnPlay').removeClass('btn_play').addClass('btn_stop');
				});

				player.addEventListener('pause', function() {
					isPlay = false;
					$('#btnPlay').removeClass('btn_stop').addClass('btn_play');
				});
				
				player.play();
				
			});
			$list.append( $li );
		});

	});
}

function convertTime(seconds) {
	return [ parseInt(seconds / 60), parseInt(seconds % 60) ];
}

$(document).ready(function() {
	
	player = $('#player')[0];

	//��ק����
	/*$('.processbar_play_btn').drag(function(pos) {
		if (pos.x < -11) {
			pos.x = -11;
		}
		if (pos.x > 289) {
			pos.x = 289;
		}
		$(this).css({
			left: pos.x
		});
	});*/
	
	$('.header').on('mousedown', function(e) {
		
		if ($(e.target).data('dragWindow') != 1) {
			return;
		}
		
		var disX = e.screenX - GUI_WINDOW.x;
		var disY = e.screenY - GUI_WINDOW.y;
		
		$(document).on('mousemove', fnMove);
		
		$(document).on('mouseup', fnUp);
		
		function fnMove(e) {
			GUI_WINDOW.x = e.screenX - disX;
			GUI_WINDOW.y = e.screenY - disY;
		}
		
		function fnUp() {
			$(document).off('mousemove', fnMove);
			$(document).off('mouseup', fnUp);
		}
		
		return false;
		
	});
	
	//�ر�
	$('.close').on('click', function(){
		GUI_WINDOW.close();
	});
	
	//��ȡ�����б�
	getMusicList();
	
	//����ļ��б�仯
	fs.watch(musicPath, function(event, filename) {
		getMusicList();	//�����Ż�
	});
	
	$('#btnPlay').on('click', function() {
		
		if (isPlay === true) {
			player.pause();
		} else if (isPlay === false) {
			player.play();
		} else {
		}
		
	});
	

});