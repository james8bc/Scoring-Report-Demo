var json = { "image_info": {
    "name": "Image Name",
    "running_time": "00:15:48",
    "points": 0,
    "points_total": 0,
    "vulns_total": 5,
    "vulns_found": 2
},
"vulns": {
    "yeet": {
        "points": 69,
        "desc": "#MakePaulModAgain"
    },
    "Yo": {
        "points": 3,
        "desc": "Vuln check passed"
    }
}
};
console.log(json);

document.getElementById("imageName").innerHTML = json.image_info.name + " Score Report";
document.getElementById("vulnCount").innerHTML = json.image_info.vulns_found + " out of " + json.image_info.vulns_total + " security issues resolved";
document.getElementById("runningTime").innerHTML = json.image_info.running_time;
document.getElementById("issuesTitle").innerHTML = "Security Issues (" + json.image_info.vulns_found + " out of " + json.image_info.vulns_total + " resolved)";

for(x in json.vulns){
	var node = document.createElement("LI");
	var textnode = document.createTextNode(json.vulns[x].desc + " - " + json.vulns[x].points + " pts");
	node.appendChild(textnode);
	document.getElementById("issuesList").appendChild(node);
	json.image_info.points += json.vulns[x].points;
}

document.getElementById("scoreCount").innerHTML = json.image_info.points + " out of " + json.image_info.points_total + " points scored";