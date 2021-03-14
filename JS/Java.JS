

var sections = {
'pizza': 'section2',
'mex': 'section3',
'thai': 'section4'
};

var selection = function(select) {

for(i in sections)
    document.getElementById(sections[i]).style.display = "none";

document.getElementById(sections[select.value]).style.display = "block";

}
