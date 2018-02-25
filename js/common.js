$(function () {
    gettime();
    $(".dropdown h2").click(function () {
        $(".dropBox").toggle();
    });
    $(".dropBox p").click(function () {
        $(".dropdown h2 span").text($(this).text());
        $(".dropBox").hide();
    });
    $(".dropdown").blur(function () { $(".dropBox").hide(); });
});

/** 
 * @synopsis 获取图片预览链接
 * @param file
 * @return 
 */
function getObjectURL(file){
    var url = null ; 
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
}


/** 
 * 显示加载动画
 * @synopsis show_loader 
 * @param msg
 * @return 
 */

function loading(is_type, message) {
    message = arguments[1] ? arguments[1] : '';
    if (is_type == 'show') {
        //$('body').append('<div id="loading"><span>' + message + '</span></div>');
        $('body').append('<div id="loading"><div class="loading_icon"><div class="la-ball-spin-clockwise la-dark"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>');
    } else if (is_type == 'hide') {
        $('#loading').remove();
    }
}

/** 
 * 关闭加载动画
 * @synopsis hide_loader 
 * @return 
 */
function hide_loader(){
    $('#loading').remove();
}

/** 
 * 弹窗
 * @synopsis alerts 
 * @param msg   提示消息
 * @return 
 */
function alerts(msg, callback) {
    $('.alert_layer').remove();
    callback = callback ? callback : function () { }
    var html = '<div class="alert_layer">';
    html += '<div class="alert_box">';
    //html += '<div class="Pop_header">弹窗提示</div>';
    html += '<div class="alert_cont">' + msg + '</div>';
    html += '<div class="alert_op_center"><input  type="submit" id="confirm" value="确定" class="define_ra_btn" /></div>';
    html += '</div>';
    html += '</div>';
    $('body').append(html);
    $('#confirm').click(function(){
        callback();
        $('.alert_layer').remove();
    });

}

/** 
 * 询问框
 * @synopsis confirms  
 * @param msg       提示消息
 * @param callback  回调函数
 * @return 
 */
function confirms(msg,callback){
    var html = '<div class="alert_layer">';
    html += '<div class="alert_box">';
    html += '<div class="alert_cont"><p>' + msg + '</p></div>';
    html += '<div class="alert_op"><input  type="submit" id="define_op" value="确定" class="define_btn" /><input type="submit" value="取消" class="cancel_btn fr" onclick="$(\'.alert_layer\').remove()" /></div>';
    html += '</div>';
    html += '</div>';
    $('body').append(html);

    $('#define_op').click(function () {
        // 确定执行
        $('.alert_layer').remove();
        callback();
    });
}

function gettime() {
    var myDate = new Date();
    var a = new Array("日", "一", "二", "三", "四", "五", "六");
    var week = new Date().getDay();
    var str = "周" + a[week];
    $(".data_time label").text(myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate());
    $(".data_time span").text(str);
}


