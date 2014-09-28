// None of this is mine
function WisepopsSetCookiePage(cookieName,value) {
   document.cookie=cookieName + "=" + escape(value) + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT;";
}
function WisepopsGetCookiePage(cookieName) {
	var cookies = document.cookie;
	var offset = cookies.indexOf(" " + cookieName + "=");
	if (offset == -1) {
	    offset = cookies.indexOf(cookieName + "=");
	}
	if (offset == -1) {
	    cookies = null;
	} else {
    	offset = cookies.indexOf("=", offset) + 1;
    	var c_end = cookies.indexOf(";", offset);
    	if (c_end == -1) {
    	    c_end = cookies.length;
    	}
    	cookies = unescape(cookies.substring(offset,c_end));
	}
	return cookies;
}
function WisepopsUpdateCookiePage() {
    var wisepop_count_request     = WisepopsGetCookiePage('wisepop_count_request');
    if (wisepop_count_request == null) {
        WisepopsSetCookiePage('wisepop_count_request', 1);
    } else {
    	wisepop_count_request = Number(wisepop_count_request);
    	WisepopsSetCookiePage('wisepop_count_request', (wisepop_count_request + 1));
    }
}
function WisepopsGetPopin() {
    WisepopsUpdateCookiePage();
    var wisepop_date_last_request = WisepopsGetCookiePage('wisepop_date_last_request');
    var wisepop_date_last_display = WisepopsGetCookiePage('wisepop_date_last_display');
    var wisepop_count_request     = WisepopsGetCookiePage('wisepop_count_request');
	var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
	s.src = 'http://wisepops.com/my-wisepop?user_id=6685&wisepop_count_request='+wisepop_count_request+'&referer='+encodeURIComponent(document.referrer)+'&url='+encodeURIComponent(document.location);
    if (wisepop_date_last_request != null) {
        s.src += '&wisepop_date_last_request='+wisepop_date_last_request;
    }
    if (wisepop_date_last_display != null) {
        s.src += '&wisepop_date_last_display='+wisepop_date_last_display;
    }

	var s2 = document.getElementsByTagName('script')[0];s2.parentNode.insertBefore(s, s2);
}
(function() {WisepopsGetPopin();});

(function(){
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    var source = 'http://wisepops.com/shared/wisepops/98c596533fff25667f65634c669140c4/11395.js';
    var exdate=new Date();
    if (typeof source == 'string' && source.length > 0) {
        WisepopsSetCookiePage('wisepop_date_last_display', exdate.toJSON());
    }
    WisepopsSetCookiePage('wisepop_date_last_request', exdate.toJSON());
    
    if (typeof source == 'string' && source.length > 0)
    {
	    s.src = source;
	    var s2 = document.getElementsByTagName('body')[0];
	    s2.appendChild(s);
	}
})();


