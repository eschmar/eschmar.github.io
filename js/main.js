jQuery(document).ready(function($) {
    var $repoCount = $('#repo-count');
    var $hireable = $('#hireable');

    $.get("https://api.github.com/users/eschmar", function(data) {
        $repoCount.html(data.public_repos);

        var hireableVal = "No";
        if (data.hireable == true) { hireableVal = "Yes"}
        $hireable.html(hireableVal);
    });
});