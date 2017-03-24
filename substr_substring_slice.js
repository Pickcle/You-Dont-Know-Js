var s = ‘hello world’;
s.slice(3)		//‘lo world’
s.substring(3) 	//‘lo world’
s.substr(3) 	//‘lo world’
s.slice(3,7)	//‘lo w’
s.substring(3,7)	//‘lo w’
s.substr(3,7)	//‘lo worl’
s.slice(-3)		//‘rld’
s.substring(-3)	//‘hello world’
s.substr(-3)	//‘rld’
s.slice(3,-4)	//‘lo w’
s.substring(3,-4)//‘hel’
s.substr(3,-4)	//‘’
