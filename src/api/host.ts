let host = '';

/*<prod>*/
host = './';
/*</prod>*/

/*<dev>*/
host = location.host;
/*</dev>*/

export default host;
