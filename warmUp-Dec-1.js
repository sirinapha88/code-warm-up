function dirsToTree (dirs) {
    var tree = {};    

    for (var j in dirs) {
        var directory = dirs[j];
        var splitDirectory = directory.split("/").splice(1);
        var currentWorkingDirectory = tree;
        for (var i = 0; i < splitDirectory.length; i++) {
            if (currentWorkingDirectory[splitDirectory[i]]) {
                currentWorkingDirectory = currentWorkingDirectory[splitDirectory[i]]
            } else {
                currentWorkingDirectory[splitDirectory[i]] = {};
            }
        }
    }
    return tree;

}

var dirs = ["/users", "/users/liz", "/users/tyler", "/users/liz/projects", "/users/tyler/music"];
console.log(dirsToTree(dirs));


function dirsToTree (dirs) {
    var jsonDirs = {}
    for (var i = 0; i < dirs.length; i++) {
        var folders = dirs[i].split("/").splice(1);
        var tld = jsonDirs;
        for (var j = 0; j < folders.length; j++) {
            if (tld[folders[j]]) {
                tld = tld[folders[j]]
            } else {
                tld[folders[j]] = {}
            }
        }
    }
    return jsonDirs;
}

var dirs = ["/users", "/users/liz", "/users/tyler", "/users/liz/projects", "/users/tyler/music"];
console.log(dirsToTree(dirs));