(function(d){
    if (d.getFullYear() > 2017) {
	return;
    }

    alert('你沒錢，別想再買了，去好好工作存錢啦');
    location.href = 'https://golang.org/';
})(new Date());
