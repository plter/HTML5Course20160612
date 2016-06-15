/**
 * Created by plter on 6/15/16.
 */

(function () {

    var currentTable;
    var reverse = true;

    var students = [
        {name: "ZhangSan", score: 80},
        {name: "LiSi", score: 30},
        {name: "ucai", score: 90},
        {name: "WangWu", score: 60},
        {name: "ZhaoLiu", score: 20}
    ];


    function sortFunction(a, b) {
        if (reverse) {
            return a.score > b.score;
        } else {
            return a.score < b.score;
        }
    }


    function linkSortByScoreClickedHandler() {
        students.sort(sortFunction);
        reverse = !reverse;

        addTableToBody();
    }


    function createTableHeader() {
        var tr = document.createElement("tr");

        var th = document.createElement("th");
        th.innerHTML = "姓名";
        tr.appendChild(th);

        th = document.createElement("th");
        var a = document.createElement("a");
        a.href = "#";
        a.innerHTML = "分数";
        a.onclick = linkSortByScoreClickedHandler;
        th.appendChild(a);
        tr.appendChild(th);
        return tr;
    }

    function createTableRow(student) {
        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.innerHTML = student.name;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = student.score;
        tr.appendChild(td);

        return tr;
    }


    function createTable() {
        /**
         *
         * @type {HTMLTableElement}
         */
        var table = document.createElement("table");
        table.border = 1;
        table.appendChild(createTableHeader());

        students.forEach(function (item) {
            table.appendChild(createTableRow(item));
        });

        return table;
    }


    function addTableToBody() {
        if (currentTable) {
            document.body.removeChild(currentTable);
        }

        currentTable = createTable();
        document.body.appendChild(currentTable);
    }

    function init() {
        addTableToBody();
    }

    init();
}());