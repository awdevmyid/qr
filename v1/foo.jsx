ReactDOM.render(new Clock().render(),document.getElementById("clock"));


ReactDOM.render(jsx(
		`<div id='foo'>
		<span> Oppen Aplication QR Scanner! </span>
		<a href="https://awdev-corporation.github.io/qr/v1/index.html" >
		<button onClick="{e => alert('hi!')}">Get Started</button></a>
		</div>`),document.getElementById("hello"));
		
ReactDOM.render(jsx.compile("function() { return(<div>Pretty cool, huh?</div>) }")(),document.getElementById("cool"));
	
const compiled = jsx(document.getElementById('directions').outerHTML);

document.getElementById("vdom").innerText = JSON.stringify(compiled);

ReactDOM.render(compiled,document.getElementById("repeat"));
